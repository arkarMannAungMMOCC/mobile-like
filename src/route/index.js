import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Dependency Injection
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import RouteName from '@route/RouteName';
import { comaFormat, dateFormatter, scrollUp, sleep, validator } from "@helper";
import Local from "@store/localStroage";
//RootSlice Action
import { setUser, setCartCount, setItems, setOrderHistorys, setPromotions } from "@store/reducer/rootSlice";
// api
import Api from "@store/api";
//Screens
import HomeScreen from '@screens/HomeScreen';
import AccountScreen from '@screens/AccountScreen';
import CartScreen from '@screens/CartScreen';
import DeliveryScreen from '@screens/DeliveryScreen';
import PromotionScreen from '@screens/PromotionScreen';
import PromotionDetailScreen from '@screens/PromotionDetailScreen';
import CategoryScreen from '@screens/CategoryScreen';
import SettingScreen from '@screens/SettingScreen';
import ProductDetailScreen from '@screens/ProductDetailScreen';
import CheckOutScreen from '@screens/CheckOutScreen';
import OrderDetailScreen from '@screens/OrderDetailScreen';
import SignUpScreen from '@screens/SignUpScreen';
import LoginScreen from '@screens/LoginScreen';
import ConfirmScreen from '@screens/ConfirmScreen';
import PasswordRecoveryScreen from '@screens/PasswordRecoveryScreen';
import RecoveryConfirmScreen from '@screens/RecoveryConfirmScreen';
import ChangeNameScreen from '@screens/ChangeNameScreen';
import ChangePasswordScreen from '@screens/ChangePasswordScreen';
import PolicyScreen from '@screens/PolicyScreen';
const RouterView = () => {
    const dispatch = useDispatch();
    const screenProps = {
        useEffect, useState, useRef, useCallback,
        useSelector, dispatch, Local, setUser, setCartCount, Api,
        RouteName, comaFormat, scrollUp, sleep, validator
    }
    const { token, id } = useSelector(({ root: { user } }) => user);

    useEffect(() => {
        // console.log("Root");
        Api.getItems()
            .then(({ data: { data } }) => {
                // console.log(data);
                dispatch(setItems(data));
                if (token && id) {
                    getOrderHistory({ items: data, dispatch, token, id, setOrderHistorys });
                }
            });
        Api.getPromotions()
            .then(({ data: { data } }) => {
                console.log(data);
                const base = "https://dev.mobilelikemm.com/ml/public/";
                const reformatedData = data.map(({ id, title, body, image_url }) => {
                    return { id, title, body, image_url: base + image_url }
                });
                dispatch(setPromotions(reformatedData));
                console.log(reformatedData);
            });
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={RouteName.home} element={<HomeScreen {...screenProps} />} />
                <Route path={RouteName.account} element={<AccountScreen {...screenProps} />} />
                <Route path={RouteName.cart} element={<CartScreen {...screenProps} />} />
                <Route path={RouteName.delivery} element={<DeliveryScreen {...screenProps} />} />
                <Route path={RouteName.promotion} element={<PromotionScreen {...screenProps} />} />
                <Route path={RouteName.promotionDetail} element={<PromotionDetailScreen {...screenProps} />} />
                <Route path={RouteName.category} element={<CategoryScreen {...screenProps} />} />
                <Route path={RouteName.productDetail} element={<ProductDetailScreen {...screenProps} />} />
                <Route path={RouteName.checkOut} element={<CheckOutScreen {...screenProps} />} />
                <Route path={RouteName.orderDetail} element={<OrderDetailScreen {...screenProps} />} />
                <Route path={RouteName.signUp} element={<SignUpScreen {...screenProps} />} />
                <Route path={RouteName.login} element={<LoginScreen {...screenProps} />} />
                <Route path={RouteName.confirm} element={<ConfirmScreen {...screenProps} />} />
                <Route path={RouteName.recovery} element={<PasswordRecoveryScreen {...screenProps} />} />
                <Route path={RouteName.recoveryConfirm} element={<RecoveryConfirmScreen {...screenProps} />} />
                <Route path={RouteName.setting} element={<SettingScreen {...screenProps} />} />
                <Route path={RouteName.changeName} element={<ChangeNameScreen {...screenProps} />} />
                <Route path={RouteName.changePwd} element={<ChangePasswordScreen {...screenProps} />} />
                <Route path={RouteName.policy} element={<PolicyScreen {...screenProps} />} />
            </Routes>
        </BrowserRouter>
    );
}
export default RouterView;

const filterItem = (items, item_detail_id) => {
    let filteredItems = items.filter(({ id }) => id == item_detail_id);
    if (filteredItems.length > 0) {
        let name = filteredItems[0]["name"];
        let itemDiscount = filteredItems[0]["detail"]["discount"];
        let itemPrice = filteredItems[0]["detail"]["price"];
        const price = itemDiscount > 0 ? itemDiscount : itemPrice;
        return {
            name, price
        }
    } else {
        return {
            name: 'no data', price: '0'
        }
    }
}

export const getOrderHistory = async ({ items, dispatch, token, id, setOrderHistorys }) => {
    // console.log('run tal');
    await Api.getOrderHistory({ token, id })
        .then(({ data: { data } }) => {
            if (data.length > 0) {
                const orderHistry = data.map(({ id, code, status, created_at, detail, remark }) => {
                    // reformat and filter name,price for details
                    const details = detail.map(({ quantity, item_detail_id, }) => {
                        const { name, price } = filterItem(items, item_detail_id);
                        return {
                            quantity, name, price
                        }
                    })
                    // json.parse name,phone,address
                    let userData;
                    if (JSON.parse(remark)) {
                        userData = JSON.parse(remark);
                    } else {
                        const [name, phone, address] = remark.split(',');
                        userData = { name, phone, address };
                    }
                    return {
                        ...userData,
                        status,
                        id,
                        orderId: `#${code}`,
                        date: dateFormatter(new Date(created_at)),
                        details
                    };
                });
                // set store
                dispatch(setOrderHistorys(orderHistry));
            }
        });
}
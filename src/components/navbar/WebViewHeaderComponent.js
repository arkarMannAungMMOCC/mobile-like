import { memo } from "react";
import { useCallback, useState } from "react";
import CartComponent from "./CartComponent";
import TabBar from "./TabBarComponent";
import RouteName from '@route/RouteName';
import { HiShoppingCart } from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import Logo from "@assets/logo.png";
import SearchBox from "./SearchBoxComponent";
import { useLocation, useNavigate } from 'react-router-dom';
// store
import { useSelector } from "react-redux";
// store
const WebViewHeaderComponent = ({

}) => {
    const cartCount = useSelector(state => state.root.cartCount);
    const { token, id } = useSelector(({ root: { user } }) => user);
    const [searchValue, setSearchValue] = useState('');
    const currentRoute = useLocation().pathname;
    const navigate = useNavigate();
    const searchAction = useCallback(() => {
        alert('search');
    }, [searchValue]);

    return (
        <>
            <div className="z-50 fixed top-0 hidden md:flex flex-row w-screen h-24 bg-primary">
                <div className="container mx-auto flex flex-row h-20 md:h-24 items-center justify-between">
                    <div className="flex flex-row h-20 items-center">
                        <img src={Logo} alt="logo" className="object-contain h-20 w-20" />
                        <div className="flex flex-col ml-4 font-semibold text-xl text-white">
                            <div>Mobile Like</div>
                            <div>Phone & Accessories</div>
                        </div>
                    </div>
                    {/* search box */}
                    <div className="flex-1 flex flex-row ml-16">
                        <SearchBox
                            value={searchValue}
                            setValue={setSearchValue}
                            search={searchAction}
                        />
                        <CartComponent
                            onClick={() => { navigate(RouteName.cart) }}
                            Icon={HiShoppingCart}
                            label="Cart"
                            count={cartCount}
                        />
                        <CartComponent
                            onClick={() => { alert('haha') }}
                            Icon={CiHeart}
                            label="Wish List"
                            count="5"
                            countStyle="-right-2 -mt-1"
                        />
                        <CartComponent
                            onClick={() => {
                                if (id && token) {
                                    navigate(RouteName.account)
                                } else {
                                    console.log("Unlogged User");
                                    navigate(RouteName.signUp);
                                }
                            }}
                            Icon={RiAccountCircleLine}
                            label={token && id?"Account":"SignUp"}
                            countStyle="-right-2 -mt-1"
                        />
                    </div>
                </div>
                <TabBar />
            </div>
        </>
    );
}
export default memo(WebViewHeaderComponent);
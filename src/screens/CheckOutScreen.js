import { memo } from "react";
import InputComponent from "@components/form/InputComponent";
import CheckOutScreenLayout from "@layout/CheckOutScreenLayout";
import ButtonComponent from "../components/form/ButtonComponent";
import OrderComponent from "../components/OrderComponent";
import CheckOutBtnComponent from "@components/checkOut/CheckOutBtnComponent";
import { useNavigate, createSearchParams } from "react-router-dom";
import { setOrderHistorys } from "@store/reducer/rootSlice";
import { getOrderHistory } from '@route/index';
const CheckOutScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local, Api, setCartCount,
    RouteName, comaFormat, scrollUp
}) => {
    // store
    const { user: { id, token, name: userName, phone: userPhone }, items } = useSelector(({ root }) => root);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(userName);
    const [nameErrMsg, setNameErrMsg] = useState("");
    const [phone, setPhone] = useState(userPhone);
    const [phoneErrMsg, setPhoneErrMsg] = useState("");
    const [address, setAddress] = useState("");
    const [addressErrMsg, setAddressErrMsg] = useState("");
    // store
    const cartCount = useSelector(state => state.root.cartCount);
    const [carts, setCarts] = useState([]);
    // store
    // button
    const [isCOD, setIsCOD] = useState(true);
    const local = Local({ dispatch, setCartCount });
    const navigate = useNavigate();
    useEffect(() => {
        if (local.getCart()) {
            // setCarts(local.getCart());
            // console.log(local.getCart());
            if (local.getCart().length !== carts.length) {
                setCarts(local.getCart());
            }
        }
    }, [carts]);
    const placeOrderAction = () => {
        setLoading(true);
        setNameErrMsg('');
        setPhoneErrMsg('');
        setAddressErrMsg('');
        if (name && phone && address) {
            // navigate(RouteName.orderDetail, { state: { name, phone, address, order } });
            const userData = JSON.stringify({
                name,
                phone, address
            });
            const orderDetails = carts.map(({ id, quantity }) => {
                return {
                    quantity: `${quantity}`,
                    item_detail_id: `${id}`
                }
            })
            Api.createOrder({ token, id, userData, orderDetails })
                .then(async ({ data: { data } }) => {
                    await getOrderHistory({ items, dispatch, token, id, setOrderHistorys });
                    setLoading(false);
                    const orderId = data[0].id;
                    const params = { id: orderId };
                    navigate({
                        pathname: RouteName.orderDetail,
                        search: `?${createSearchParams(params)}`
                    });
                    // TODO: clear local Local
                    local.removeCart();

                })
                .catch(err => {
                    setLoading(false);
                    console.log('order error');
                    console.log(err)
                });
        } else if (!name) {
            setLoading(false);
            setNameErrMsg('please enter name');
            scrollUp({ top: 0, behavior: 'smooth' });
        } else if (!phone) {
            setLoading(false);
            setPhoneErrMsg('Please enter phone number');
            scrollUp({ top: 0, behavior: 'smooth' });
        } else if (!address) {
            setLoading(false);
            setAddressErrMsg('Please enter address');
            scrollUp({ top: 0, behavior: 'smooth' });
        }
    }

    return (<>
        <CheckOutScreenLayout body={
            <div className="">
                <div className="bg-white shadow-lg  rounded-2xl py-4 mb-12">
                    <div className=" font-bold text-[#4D5E80] mx-4">Address & Info</div>
                    <InputComponent label="Name" value={name} setValue={setName} placeholder={"Enter Name"} errorMsg={nameErrMsg} />
                    <div className=" flex-grow  w-full border-t-2 border-[#D0D0D0] "></div>
                    <InputComponent label="Phone no." value={phone} setValue={setPhone} placeholder={"Enter Phone Number"} errorMsg={phoneErrMsg} />
                    <div className=" flex-grow  w-full border-t-2  border-[#D0D0D0] "></div>
                    <InputComponent label="Address" value={address} setValue={setAddress} placeholder={"Enter Address"} errorMsg={addressErrMsg} />
                </div>
                <ButtonComponent isCOD={isCOD} setIsCOD={setIsCOD} />
                {isCOD ? <OrderComponent cartCount={cartCount} carts={carts} comaFormat={comaFormat} /> : <div className="text-center text-gray-400 mt-20">Online Payment is not availiable!</div>}
                {isCOD && <CheckOutBtnComponent disable={loading} onClick={placeOrderAction} />}
                <div className="h-6"></div>

            </div>
        } />
    </>);

}
export default memo(CheckOutScreen);
//{name:"Ackarman",phone:"09109110",address:"No206,3A,Baho Road,SanChaung"}
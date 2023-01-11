import { memo } from "react";
import OrderDetailScreenLayout from "@layout/OrderDetailScreenLayout";
import ButtonComponent from "@components/form/ButtonComponent";
import OrderComponent from "../components/OrderComponent";
import { useLocation, useSearchParams } from "react-router-dom";
import BottomSheet from "@components/BottomSheetComponent";
import { TiTick as Check } from "react-icons/ti";


const OrderDetailScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat, scrollUp
}) => {
    // bottom sheet variable
    const [open, setOpen] = useState(false);
    const toggleBottomSheet = () => {
        setOpen(!open);
    }
    // bottom sheet variable
    const orderHistorys = useSelector(({ root: { orderHistorys } }) => orderHistorys);
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('id');
    const [orderDetail, setOrderDetail] = useState(null);
    // button
    const [isCOD, setIsCOD] = useState(true);
    const local = Local({});
    const location = useLocation();
    // Action
    const orderCancelAction = () => {
        console.log("Order Cancel Action: Order Detail Screen");
    }
    const orderConfirmAction = () => {
        console.log("Order Confirm Action: Order Detail Screen");
    }
    useEffect(() => {
        console.log(orderHistorys);
        const [order] = orderHistorys.filter(({ id }) => id === parseInt(orderId));
        console.log(order);
        setOrderDetail(order);
    }, [orderDetail]);
    const renderUserItems = ({ key, label }, i) => {
        return (<div key={i}>
            <div className="flex flex-row justify-between px-6">
                <div className="flex-[1] h-10 flex flex-row items-center font-bold">
                    <div>{key}</div>
                </div>
                <div className="flex-[1] flex flex-row items-center justify-end">
                    <div>{label} </div>
                </div>
            </div>
            <div className=" flex-grow  w-full border-t-2 border-[#D0D0D0] "></div>

        </div>)

    }
    const renderOrderItems = ({ key, label }, i) => {
        return (<div key={i}>
            <div className="flex flex-row justify-between px-6">
                <div className="flex-[1] h-10 flex flex-row items-center font-bold">
                    <div>{key} </div>
                </div>
                <div className="flex-[1] flex flex-row items-center justify-end">
                    <div>{label}</div>
                </div>
            </div>
            <div className=" flex-grow  w-full border-t-2 border-[#D0D0D0] "></div>

        </div>)

    }
    const itemStr = (details) => {
        const orderItems = details.map(({ name }) => { return name });
        return orderItems.join(', ');
    }
    return (<>
        {orderDetail ? <OrderDetailScreenLayout
            onClick={toggleBottomSheet}
            body={
                <div className="rss-backdrop" style={{ background: '#F5F5F5', minHeight: '100vh' }}>
                    {true && <>
                        {/* Order Info Card */}
                        <div className="bg-white shadow-lg  rounded-2xl py-4 mb-12 mt-8 md:mt-16">
                            <div className="font-bold text-[#4D5E80] mx-4">Address & Info</div>
                            {
                                [{ key: 'name', label: orderDetail.name }, { key: 'phone', label: orderDetail.phone }, { key: 'address', label: orderDetail.address }]
                                    .map(({ key, label }, i) => renderUserItems({ key, label }, i))
                            }
                        </div>
                        <ButtonComponent isCOD={isCOD} setIsCOD={() => { }} />

                        {/* Order Detail List */}
                        {isCOD ? <OrderComponent cartCount={orderDetail.details.length} carts={orderDetail.details} comaFormat={comaFormat} /> : <div className="text-center text-gray-400 mt-20">Online Payment is not availiable!</div>}

                        {/* Order Item List */}
                        <div className="bg-white shadow-lg  rounded-2xl py-4 mb-32 mt-8 md:mt-16">
                            <div className="font-bold text-[#4D5E80] mx-4 ">Order{orderDetail.orderId}</div>
                            {
                                [{ key: 'id', label: orderDetail.orderId }, { key: 'orderItems', label: itemStr(orderDetail.details).length > 18 ? `${itemStr(orderDetail.details).substr(0, 18)}...` : itemStr(orderDetail.details) }, { key: 'date', label: orderDetail.date }]
                                    .map(({ key, label }, i) => renderOrderItems({ key, label }, i))
                            }
                        </div>
                    </>}
                    <BottomSheet
                        open={open}
                        setOpen={setOpen}
                        status={orderDetail.status}
                        cancelAction={orderCancelAction}
                        confirmAction={orderConfirmAction}
                    />

                    <div className=" h-1/2 hidden md:flex flex-col items-center rounded-3xl mt-[28px] bg-white shadow-lg " >
                        <div className="text-[#4D5E80] text-2xl text-center h-[60px] font-bold my-8" >Delivery Status</div>
                        <div className="flex flex-row lg:w-[1000px] justify-center items-center container mx-auto">
                            <div className={`${orderDetail.status > 0 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[3] flex flex-row justify-center items-center h-12 border-4 border-[#4D5E80] rounded-2xl cursor-pointer`}>
                                {orderDetail.status > 0 ? <Check size={35} /> : 'pending'}
                            </div>
                            <div className="bg-[#4D5E80] flex-[2] h-1"></div>
                            <div className={`${orderDetail.status > 1 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[3] flex flex-row justify-center items-center h-12 border-4 border-[#4D5E80] rounded-2xl cursor-pointer`}>
                                {orderDetail.status > 1 ? <Check size={35} /> : 'Waiting'}
                            </div>
                            <div className="bg-[#4D5E80] flex-[2] h-1"></div>
                            <div className={`${orderDetail.status > 2 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[3] flex flex-row justify-center items-center h-12 border-4 border-[#4D5E80] rounded-2xl cursor-pointer`}>
                                {orderDetail.status > 2 ? <Check size={35} /> : 'Vertified!'}
                            </div>
                        </div>

                        <div className="flex flex-row w-full justify-center items-center container mx-auto mt-16 mb-16">
                            <div onClick={() => { }} className="bg-[#FF6C6C] flex flex-row justify-center items-center py-4 px-8 text-white rounded-2xl cursor-pointer">
                                Cancel
                            </div>
                            <div className="w-6"></div>
                            <div onClick={() => { }} className="bg-[#56CB49] flex flex-row justify-center items-center py-4 px-8 text-white rounded-2xl cursor-pointer">
                                Confirm
                            </div>
                        </div>
                        <div className="mb-12 flex w-[400px] h-[5px] rounded-full bg-[#A99898]"></div>

                    </div>
                </div>
            }
        /> : <OrderDetailScreenLayout />

        }
    </>);
}
export default memo(OrderDetailScreen);
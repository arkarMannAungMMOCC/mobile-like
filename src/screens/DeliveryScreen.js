import { memo, useState, useRef, useEffect } from "react";
import DeliveryScreenLayout from "@layout/DeliveryScreenLayout";
import { useNavigate, createSearchParams } from "react-router-dom";
const DeliveryScreen = ({
    useSelector, RouteName
}) => {
    const navigate = useNavigate();
    const orderHistorys = useSelector(({ root: { orderHistorys } }) => orderHistorys);
    const renderOrderItems = ({ key, label }, i) => {
        return (<div key={i}>
            <div className="flex flex-row justify-between px-6">
                <div className="flex-[1] h-10 flex flex-row items-center font-bold">
                    <div>{key} </div>
                </div>
                <div className="flex-[1] flex flex-row items-center justify-end">
                    {/* <div>{typeof (location.state.order[key]) === 'object' ? location.state.order[key].toString() : location.state.order[key]} </div> */}
                    <div>{label}</div>
                </div>
            </div>
            <div className=" flex-grow  w-full border-t-2 border-[#D0D0D0] "></div>

        </div>)

    }
    const orderDetailAction = (id) => {
        const params = { id };
        navigate({
            pathname: RouteName.orderDetail,
            search: `?${createSearchParams(params)}`
        });
    }
    useEffect(() => {
        // console.log(orderHistorys);
    })
    return (
        <DeliveryScreenLayout
            body={
                <>
                    <div className="h-8 md:h-14"></div>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {/* Order Item List */}
                        {
                            orderHistorys.map(({ orderId, details, date, id }, i) => {
                                const orderItems = details.map(({ name }) => { return name });
                                const orderItemStr = orderItems.join(', ');
                                return (
                                    <div onClick={() => orderDetailAction(id)} key={i} className="bg-white shadow-lg  rounded-2xl py-4 cursor-pointer">
                                        <div className="font-bold text-[#4D5E80] mx-4 ">Order#{i + 1}</div>
                                        {
                                            [{ key: 'Order Id', label: orderId }, { key: 'orderItems', label: orderItemStr.length > 18 ? `${orderItemStr.substr(0, 18)}...` : orderItemStr }, { key: 'Date', label: date }]
                                                .map(({ key, label }, i) => renderOrderItems({ key, label }, i))
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </>
            }
        />
    );
};
export default memo(DeliveryScreen);
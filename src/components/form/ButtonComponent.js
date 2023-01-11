import { memo, useCallback } from "react";
const ButtonComponent = ({isCOD,setIsCOD}) => {
    // const cashPaymentAction = useCallback(() => {
    //     setIsCOD(true);
    //     // navigate();
    // }, [isCOD]);
    const cashPaymentAction = () => {
        setIsCOD(true);
    }
    const onlinePaymentAction = () => {
        setIsCOD(false)
    }
    return (<>
        <div className="flex flex-row mt-5 justify-center font-bold">
            <div onClick={cashPaymentAction} className={` ${isCOD ? ' bg-green-400 text-white ' : 'bg-white text-[#BFBFBF]'} p-2 rounded-l-2xl select-none cursor-pointer`} >Cash On Delivery</div>
            <div onClick={onlinePaymentAction} className={` ${isCOD ? 'bg-white text-[#BFBFBF]' : ' bg-green-400 text-white '} p-2 rounded-r-2xl select-none cursor-pointer`}>Online Payment</div>
        </div>
    </>)
}
export default memo(ButtonComponent);
import { memo } from "react";
const CheckOutBtnComponent = ({ disable, onClick }) => {
    return (
        <div className={`${disable ? 'opacity-60' : ''} rounded-2xl bg-[#FEE96C] p-2 mt-3  text-title  font-bold cursor-pointer w-full text-center shadow-lg`} onClick={disable ? () => { } : onClick}>Place Order</div>
    );

}
export default memo(CheckOutBtnComponent);
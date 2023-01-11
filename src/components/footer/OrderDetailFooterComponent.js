import { memo } from "react";
import { MdOutlineKeyboardArrowUp as Expand } from "react-icons/md";
const OrderDetailFooterComponent = ({ onClick = () => { console.log('click bottom sheet') } }) => {
    return <>
        {/* For Mobile */}
        <div onClick={onClick} className="md:hidden mt-1rem p-1rem fixed bottom-0 left-0  w-full">
            <div className="relative flex flex-col justify-between items-center h-[80px] rounded-t-3xl mt-[28px]  bg-[#FEE96C]" >
                <div className="text-[#4D5E80] text-2xl text-center font-bold mt-2" >Delivery Status</div>
                <div className="mb-4 flex w-[180px] h-[5px] rounded-full bg-[#A99898]"></div>
                {/* stack */}
                <div className="absolute bg-[#E6E6E6] rounded-t-lg text-white w-[36px] h-[30px] -top-[30px]">
                    <Expand size={35} />
                </div>
            </div>
        </div>
        {/* For Mobile */}



    </>;
}
export default memo(OrderDetailFooterComponent);
import { memo } from "react";
import { BsTelephoneFill } from 'react-icons/bs';
const PhoneCard = ({ phone }) => {
    return (
        <div className=" bg-white  rounded-2xl shadow-lg  p-4 md:py-8 md:pl-6 ">
            <div className="flex flex-row justify-start items-center">
                <div className="flex flex-col mr-3">
                    <div className="text-[#8E99AF]"><BsTelephoneFill size={22} /></div>
                </div>
                <div className="flex flex-col mr-2">
                    <div className="text-title font-bold">Phone no:</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-title font-semibold">{phone}</div>
                </div>
            </div>
        </div>
    );
}
export default memo(PhoneCard);
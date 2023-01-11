import { memo } from "react";
import { FaUserLock } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import RouteName from "@route/RouteName";
const RoleCard = () => {
    const navigate = useNavigate();
    const settingAction = () => {
        navigate(RouteName.setting);
    }
    return (
        <div className="flex flex-row  items-center ">
            <div className="flex-1 flex-col bg-white  rounded-2xl shadow-xl  py-8 md:py-14 pl-4 md:pl-6">
                <div className="flex flex-row justify-start items-center">
                    <div className="flex flex-col mr-3">
                        <div className="text-[#8E99AF]"><FaUserLock size={22} /></div>
                    </div>
                    <div className="flex flex-col mr-2">
                        <div className="text-title font-bold">Role:</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-title font-semibold">Customer</div>
                    </div>
                </div>
            </div>
            <div className="flex-none w-3 "></div>
            <div onClick={settingAction} className="flex-1 flex-col text-title font-[500px] cursor-pointer select-none  py-8 md:py-14 pl-4 md:pl-6 bg-white  rounded-2xl shadow-lg   ">
                <div className="flex flex-row items-center">
                    <div className="text-[#8E99AF]"><IoMdSettings size={22} /></div>
                    <div className="ml-3 text-title font-bold">Setting</div>
                </div>

            </div>
        </div>
    );
}
export default memo(RoleCard);
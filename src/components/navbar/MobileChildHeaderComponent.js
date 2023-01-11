import { memo } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MobileChildHeaderComponent = ({
    title = '',
    centerTitle = true,
    leadingIcon = false,
    leadingRoute = -1
}) => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="z-50 md:hidden fixed top-0 w-screen bg-gradient-to-r from-linearFrom to-linearTo rounded-b-2xl md:rounded-none shadow-lg">
                <div className={`container mx-auto flex flex-row h-20 md:h-24 items-center text-white font-semibold relative ${centerTitle ? 'justify-center' : ''}`}>
                    {/* stack icon */}
                    {
                        leadingIcon && <div className="absolute flex flex-col justify-center left-1">
                            <div onClick={() => navigate(leadingRoute)} className="w-12 h-12 flex justify-center items-center rounded-lg cursor-pointer">
                                <IoIosArrowBack size={40} />
                            </div>
                        </div>
                    }
                    <div className={`text-xl ${centerTitle ? '' : (leadingIcon ? 'ml-12' : 'ml-2')}`}>{title}</div>
                </div>
            </nav>
        </>
    );
}
export default memo(MobileChildHeaderComponent);
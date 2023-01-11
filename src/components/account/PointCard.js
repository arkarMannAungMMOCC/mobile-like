import { memo } from "react";
import { HiGift } from 'react-icons/hi';
import { TiStarFullOutline } from 'react-icons/ti';

const PointCard = ({
    points,
    giftAction = () => console.log('giftAction'),
    usePointAction = () => console.log('usePointAction')
}) => {
    return (
        <div className="flex flex-row h-full">
            <div className="flex-[2] flex flex-col justify-center bg-white rounded-l-2xl shadow-lg py-3 px-4 md:pl-8">
                <div className="text-title text-[18px] font-bold">Your Points</div>
                <div className="text-[#56CB49] text-[25px] font-bold">{points} Pts</div>
            </div>
            <div className="flex-[1] flex flex-col  h-full ">
                <div onClick={giftAction} className="flex-1 flex flex-row items-center bg-white py-4 pl-2 md:pl-6 mb-0.5 md:mb-1  ml-1 md:ml-2 rounded-tr-2xl cursor-pointer select-none">
                    <div className="text-[#8E99AF] mr-1.5"><HiGift size={22} /></div>
                    <div className="text-title">Gifts</div>
                </div>
                <div onClick={usePointAction} className="flex-1 flex flex-row items-center bg-white py-4 pl-2 md:pl-6 mt-0.5 md:mt-1 ml-1 md:ml-2 rounded-br-2xl shadow-lg cursor-pointer select-none">
                    <div className="text-[#8E99AF] mr-1.5"><TiStarFullOutline size={22} /></div>
                    <div className="text-title"> Use Pts</div>
                </div>
            </div>
        </div>
    );
}
export default memo(PointCard);
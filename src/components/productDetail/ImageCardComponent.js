import { memo, useCallback, useState } from "react";
// icon for image card component
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// icon for image card component
const ImageCardComponent = ({ prev, next, setPhotoIndex, detailItem, photoIndex }) => {
    const base = "https://dev.mobilelikemm.com/ml/public/";
    return (
        <>
            <div className="flex flex-row justify-between items-center select-none">
                <div onClick={prev} className="p-2 cursor-pointer text-gray-400">
                    <BsChevronLeft size={35} />
                </div>
                <div className="">
                    <img className="object-contain rounded-lg" src={detailItem.created_at ? `${base}${detailItem.images[photoIndex].photo_url}` : detailItem.images[photoIndex].photo_url} alt="topho" />
                </div>
                <div onClick={next} className="p-2 cursor-pointer text-gray-400">
                    <BsChevronRight size={35} />
                </div>
            </div>
            <div className="flex flex-row justify-center mt-3">
                {/* <div className="w-[150px] h-[6px] bg-black"></d iv> */}
                {
                    detailItem.images.map((p, i) => {
                        return (
                            <div key={i} onClick={() => { setPhotoIndex(i) }} className={`w-[8px] mx-2 h-[8px] rounded-full ${i === photoIndex ? 'bg-[#56CB49]' : 'bg-[#CCCCCC]'} cursor-pointer`}></div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default memo(ImageCardComponent);
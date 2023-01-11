import { memo, useCallback, useState } from "react";
import { RiShareForwardLine } from 'react-icons/ri';
import { BiHeart } from 'react-icons/bi';
import { MdAddShoppingCart } from "react-icons/md";
import { comaFormat } from "@helper";
const MobileInfoComponent = ({
    detailItem, addToCartAction
}) => {
    const [isdescription, setIsDescription] = useState(false);
    // Action
    const descriptionTabAction = useCallback(() => {
        setIsDescription(true)
    }, [isdescription]);
    const specTabAction = useCallback(() => {
        setIsDescription(false)
    }, [isdescription]);
    // Action
    const renderItem = ({ i, title, detail, len }) => {
        return (
            <div key={i}>
                <div className={`flex flex-row justify-between container mx-auto h-8 items-center flex-grow ${len - 1 === i ? 'border-0' : 'border-b-2'} border-[#D0D0D0]`} >
                    <div className="font-bold">{title}</div>
                    <div>{detail}</div>
                </div>
            </div>
        );
    }
    const SizedBox = ({ x = '0', y = '0' }) => {
        // return <div className={`mx-${x} my-${y} `}></div>
        return <div className={`mx-${x} my-${y} `}></div>
    }
    return detailItem && <>
        <div className="mt-5 flex-grow border-t border-2 border-[#D0D0D0] "></div>
        <div className="mt-3 container mx-auto">
            <div className=" flex flex-row justify-between items-center">
                <div className="flex-1" >
                    {/* {detailItem.detail.discount}&& */}
                    {
                        detailItem.detail.discount > 0 ?
                            <div className="flex flex-row">
                                <div className="text-[#289266] font-bold text-xl flex flex-row">
                                    {comaFormat(detailItem.detail.discount)}
                                    <span className="pl-1">Ks</span>
                                </div>
                                <SizedBox x='2' />
                                <div className="text-[#D0D0D0] font-bold text-xl flex flex-row line-through ">
                                    {comaFormat(detailItem.detail.price)}
                                    <span className="pl-1">Ks</span>
                                </div>
                            </div>

                            : <div className="text-[#289266] font-bold text-xl flex flex-row">
                                {comaFormat(detailItem.detail.price)}

                                <span className="pl-1">Ks</span>
                            </div>
                    }
                    <div className="font-bold text-lg mt-2">{detailItem.name}</div>
                </div>
                <div className="flex-1 flex flex-row cursor-pointer  justify-end space-x-3">
                    <div className="ml-5"><BiHeart size={30} /></div>
                    <div ><RiShareForwardLine size={30} /></div>
                </div>
            </div>

        </div>
        <div className="flex flex-row">
            <div onClick={descriptionTabAction} className={`${isdescription ? 'border-t-[#4D5E80]' : 'border-[#D0D0D0]'} flex-1 mt-5 border-t-2 h-8 cursor-pointer border-r-2 `}>
                <div className={`${isdescription ? 'text-[#4D5E80] font-bold' : 'text-gray-400'} text-lg text-center`}>Description</div>
            </div>
            <div onClick={specTabAction} className={`${!isdescription ? 'border-t-[#4D5E80]' : 'border-[#D0D0D0]'} flex-1 mt-5 border-t-2 cursor-pointer border-[#D0D0D0] `}>
                <div className={`${!isdescription ? 'text-[#4D5E80] font-bold' : 'text-gray-400'} text-lg text-center`}>Specification</div>
            </div>
        </div>
        {
            /* Description */
            isdescription ? <div className=" mt-2  container mx-auto mb-5 "  >
                <div className="text-justify">{detailItem.description}</div>
            </div> :
                /* End Description */
                /* Specification */
                <div className="mt-2 flex flex-row mb-5">
                    <div className=" flex-1 ">
                        {/* {                                
                        Object.entries(detailItem.detail).map(([title, detail],i) => {
                            const len = Object.keys(detailItem.detail).length;
                            return renderItem({i,title,detail,len});
                        })
                    } */}
                        {
                            detailItem.specification.map(
                                ({ title, detail }, i) => renderItem({
                                    i,
                                    title,
                                    detail,
                                    len: detailItem.specification.length
                                })
                            )
                        }
                    </div>
                </div>
            /* End Specification */
        }
        <div className=" flex flex-row justify-center mt-10 ">
            <div onClick={addToCartAction} className="w-[400px] h-12 hidden md:flex flex-row my-4 cursor-pointer shadow-md rounded-2xl">
                <div className="flex-[1] text-white flex flex-row justify-center items-center bg-primary rounded-l-2xl select-none">
                    <MdAddShoppingCart size={30} />
                </div>
                <div className="flex-[2] text-title text-xl font-bold flex flex-row justify-center items-center bg-[#FEE96C] rounded-r-2xl select-none">
                    Buy Now
                </div>
            </div>
        </div>

    </>;
}
export default memo(MobileInfoComponent);
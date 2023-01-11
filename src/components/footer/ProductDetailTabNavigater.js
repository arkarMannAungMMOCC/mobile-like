import { memo } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";

const TabNavigater = ({ addToCartAction }) => {
    return (
        <>
            <div className="fixed bottom-0 flex flex-row md:hidden justify-around w-screen h-20 border-2 border-b-0 bg-white border-gray-300 rounded-t-3xl">
                <div className="container mx-auto flex flex-row justify-around">
                    <div className="flex flex-row mr-6">
                        <div onClick={() => console.log('heart')} className="flex flex-col items-center w-fit py-2 px-2 mx-1">
                            <div className={`${false ? 'text-primary' : 'text-[#D0D0D0]'}`}>
                                <FaRegHeart size={30} />
                            </div>
                            <div className="text-sm">
                                Wishlist
                            </div>
                        </div>
                        <div onClick={() => console.log('share')} className="flex flex-col items-center w-fit py-2 px-2 mx-1">
                            <div className={`${false ? 'text-primary' : 'text-[#D0D0D0]'}`}>
                                <RiShareForwardLine size={30} />
                            </div>
                            <div className="text-sm">
                                Share
                            </div>
                        </div>
                    </div>
                    <div onClick={addToCartAction} className="flex-1 flex flex-row my-2 cursor-pointer shadow-md rounded-2xl">
                        <div className="flex-[1] text-white flex flex-row justify-center items-center bg-primary rounded-l-2xl select-none">
                            <MdAddShoppingCart size={30} />
                        </div>
                        <div className="flex-[2] text-title text-xl font-bold flex flex-row justify-center items-center bg-[#FEE96C] rounded-r-2xl select-none">
                            Buy Now
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default memo(TabNavigater);
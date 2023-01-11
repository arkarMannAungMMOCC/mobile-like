import { memo } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
const TabNavigater = ()=>{
    return (
        <>
            <div className="fixed bottom-0 flex flex-row md:hidden justify-around w-screen h-20 border-2 border-b-0 bg-white border-gray-300 rounded-t-3xl">
                <div className="container mx-auto flex flex-row justify-around">
                    <div className="flex flex-row mr-6">
                        <div onClick={()=>console.log('heart')} className="flex flex-col items-center w-fit py-2 px-2 mx-1">
                            <div className={`${false?'text-primary':'text-[#D0D0D0]'}`}>
                                <FaRegHeart size={30}/>
                            </div>
                            <div className="text-sm">
                                Like
                            </div>
                        </div>
                        <div onClick={()=>console.log('share')} className="flex flex-col items-center w-fit py-2 px-2 mx-1">
                            <div className={`${false?'text-primary':'text-[#D0D0D0]'}`}>
                                <RiShareForwardLine size={30}/>
                            </div>
                            <div className="text-sm">
                                Share
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 rounded-2xl bg-primary text-white text-center font-bold py-3 text-xl my-3 ml-5">                        
                        Go Shopping
                    </div>
                </div>
            </div>  
        </>
    );
}
export default memo(TabNavigater);
import { memo } from "react";

const Avatar = ({name})=>{
    return (
        <div className="relative h-32 md:h-44 w-full shadow-xl bg-gradient-to-r from-linearFrom to-linearTo rounded-b-[35px] md:rounded-b-[60px] md:rounded-none shadow-l">
            {/* mobile view */}
            <div className="md:hidden flex flex-row justify-center">
                <div className="absolute flex flex-col -bottom-[50px] h-[100px] w-[100px] bg-white justify-center items-center rounded-full">
                    <div className="animate-spin flex flex-col h-[90px] w-[90px] bg-gradient-to-r from-linearFrom to-linearTo rounded-full">                        
                    </div>
                    {/* eye */}
                    <div className="absolute">
                        <div className="flex flex-row justify-center">
                            <div className="w-[8px] h-[30px] rounded-full bg-white"></div>
                            <div className="mx-2.5"></div>
                            <div className="w-[8px] h-[30px] rounded-full bg-white"></div>
                        </div>
                        <div className="flex flex-row justify-center mt-4">
                            <div className="w-[25px] h-[4px] rounded-full bg-white rotate-[30deg] -mr-0.5"></div>
                            <div className="w-[15px] h-[4px] rounded-full bg-white -rotate-[30deg] -ml-0.5"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex -bottom-[80px]">
                    <div className="text-[#4D5E80] font-bold text-[20px]">{name}</div>
                </div>
            </div>
            {/* web view */}
            <div className="hidden md:flex flex-row justify-center">
                <div className="absolute flex flex-col -bottom-[75px] h-[150px] w-[150px] bg-white justify-center items-center rounded-full">
                    <div className="animate-spin flex flex-col h-[135px] w-[135px] bg-gradient-to-r from-linearFrom to-linearTo rounded-full">                        
                    </div>
                    {/* eye */}
                    <div className="absolute">
                        <div className="flex flex-row justify-center">
                            <div className="w-[12px] h-[40px] rounded-full bg-white"></div>
                            <div className="mx-4"></div>
                            <div className="w-[12px] h-[40px] rounded-full bg-white"></div>
                        </div>
                        <div className="flex flex-row justify-center mt-5">
                            <div className="w-[30px] h-[5px] rounded-full bg-white rotate-[30deg] -mr-0.5"></div>
                            <div className="w-[20px] h-[5px] rounded-full bg-white -rotate-[30deg] -ml-0.5"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex -bottom-[110px]">
                    <div className="text-[#4D5E80] font-bold text-[20px]">{name}</div>
                </div>
            </div>  
        </div>
    );
}
export default memo(Avatar);
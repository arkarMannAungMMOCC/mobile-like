import { memo } from 'react';
import { FaTiktok,FaFacebookF } from "react-icons/fa";
import GooglePlay from "@assets/footer/google.png";

const FooterNavigater = ()=>{
    return (
        <>
            <div className="hidden md:flex flex-row justify-center h-72 bg-[#56CB49] relative">
                <div className="container mx-auto flex flex-col justify-end">
                    <div className="flex flex-row text-white">
                        <div className="flex-1 flex flex-col items-center">
                            <div>
                                <div className="text-xl font-bold mb-2">Help Center</div>
                                <div className="text-sm mb-1">FAQ</div>
                                <div className="text-sm mb-1">Terms & Conditions</div>
                                <div className="text-sm mb-1">Privacy Policy</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <div>
                                <div className="text-xl font-bold mb-2">Corporation</div>
                                <div className="text-sm mb-1">Contact Us</div>
                                <div className="text-sm mb-1">About Us</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <div>
                                <div className="text-xl font-bold mb-2">Follow Us</div>
                                <div className="flex flex-row">
                                    <div className="flex flex-col bg-[#3b5998] justify-center items-center text-white text-3xl rounded-full w-12 h-12 cursor-pointer">
                                        <FaFacebookF/>
                                    </div>
                                    <div className="flex flex-col justify-center items-center p-2.5 bg-white w-12 h-12 rounded-full cursor-pointer mx-4">
                                        <img src={GooglePlay} alt="google play" />
                                    </div>
                                    <div className="flex flex-col justify-center items-center text-2xl text-white bg-black w-12 h-12 rounded-full cursor-pointer">
                                        <FaTiktok/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <div className="text-sm text-center text-white">
                            *Prices can be change accordingly with time, please <span className="text-[#FFEB4A] text-bold cursor-pointer">Contact Us</span> to confirm.*
                        </div>
                        <div className="text-sm text-center text-white">
                            Copyright © 2022 by Mobile Like Co., Ltd. All Rights Reserved.
                        </div>
                    </div>
                </div>
                {/* stack card */}
                <div className="absolute -mt-[88px] flex flex-row justify-center">
                    <div className="relative">
                        <div className="flex flex-col bg-gradient-to-tr from-[#FFEB4A] to-[#56CB49] rounded-2xl h-[176px] p-4 shadow-lg">
                            <div className="flex-1 flex flex-row items-center">
                                <img src={require('@assets/logo.png')} className="w-[60px]" alt="logo"/>
                                <div className="text-xl font-bold text-white ml-4">
                                    <div className="leading-5">
                                        Mobile Like<br/>
                                        Phones & Accessories
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center mr-52">
                                <div className="flex-1 mr-4 flex flex-row items-center">
                                    <img src={require('@assets/footer/callUs.png')} className="w-[40px] h-[40px]" alt="call us"/>
                                    <div className="flex flex-col ml-4 text-white font-semibold text-sm leading-4">
                                        <div className="font-bold">Call Us:</div>
                                        <div>09454000000</div>
                                        <div>09401000000</div>
                                    </div>
                                </div>
                                <div className=" flex-1  flex flex-row items-center mr-12">
                                    <img src={require('@assets/footer/writeToUs.png')} className="w-[40px] h-[40px]" alt="call us"/>
                                    <div className="flex flex-col -mt-3 ml-4 text-white font-semibold text-sm leading-4">
                                        <div className="font-bold">Write To Us:</div>
                                        <div>swmobilelike@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-row items-center">
                                    <img src={require('@assets/footer/visitUs.png')} className="w-[40px] h-[40px]" alt="call us"/>
                                    <div className="flex flex-col ml-4 text-white font-semibold text-sm leading-4">
                                        <div className="font-bold">Visit Us:</div>
                                        <div>35st 84 x 85st,</div>
                                        <div>Chanayethazan, Mandalay</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* stack image */}
                        <div className="absolute bottom-0 right-[20px] w-[280px]">
                            <img className="object-contain" src={require("@assets/footer/phone.png")} alt="phone"/>
                        </div>
                    </div>
                </div>
                {/* stack card */}
            </div>
        </>
    );
}
export default memo(FooterNavigater);
import { memo, useState } from "react";
import { useEffect } from 'react';
import { scrollUp } from "@helper";
import { useLocation } from 'react-router-dom';
import { HiGift } from 'react-icons/hi';
import Footer from "@components/footer/FooterComponent";
const DefaultLayout = ({
    avatar, pointCard, phoneCard, roleCard, logOut, bottomSheet
}) => {
    const [init, setInit] = useState(true);
    const currentRoute = useLocation().pathname;
    useEffect(() => {
        if (init) {
            scrollUp();
            setInit(false);
        }
    })
    return (
        <>
            {avatar}
            <div className="container mx-auto mt-32 md:mt-44">
                {/* mobile */}
                <div className="md:hidden">
                    {pointCard}
                    <div className="h-4"></div>
                    {phoneCard}
                    <div className="h-4"></div>
                    {roleCard}
                    <div className="h-4"></div>
                    {logOut}
                    {bottomSheet}
                </div>
                {/* Web View */}
                <div className="hidden md:flex flex-col">
                    <div className="flex flex-row">
                        {/* Point Card */}
                        <div className="flex-1">
                            {pointCard}
                        </div>
                        <div className="w-6 "></div>
                        {/* Phone Card + Role Card */}
                        <div className="flex-1 flex flex-col">
                            {phoneCard}
                            <div className="h-3"></div>
                            {roleCard}
                        </div>
                    </div>
                    <div className="h-24"></div>
                    <div className="flex flex-row justify-center">
                        <div className="w-[500px]">
                            {logOut}
                        </div>
                    </div>
                    <div className="mt-20 md:mt-38"></div>
                </div>
            </div>
            <div className="h-32"></div>
            {/* Footer */}
            <Footer />
        </>
    );
}
export default memo(DefaultLayout);
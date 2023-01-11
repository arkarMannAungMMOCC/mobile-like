import { memo, useState } from "react";
import { useEffect } from 'react';
import { scrollUp } from "@helper";
import { useLocation } from "react-router-dom";
import RouteName from "@route/RouteName";
import Navbar from "@components/navbar/NavBarComponent";
import Footer from "@components/footer/FooterComponent";
const DefaultLayout = ({ navbarProps, body }) => {
    const [init, setInit] = useState(true);
    const location = useLocation();
    const path = location.pathname;
    useEffect(() => {
        if (init) {
            scrollUp();
            setInit(false);
        }
    })
    return (
        <>
            {/* Nav bar */}
            <Navbar {...navbarProps} />
            <div className="mt-20 md:mt-28"></div>

            {body}

            <div className="mt-20 md:mt-44"></div>
            {/* Footer */}

            {((path !== RouteName.setting) || (path !== RouteName.changeName)) &&
                <Footer />
            }
        </>
    );
}
export default memo(DefaultLayout);
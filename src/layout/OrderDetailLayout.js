import { memo, useState } from "react";
import { useEffect } from 'react';
import { scrollUp } from "@helper";
import Navbar from "@components/navbar/NavBarComponent";
import FooterNavigater from '@components/footer/FooterNavigater';
import OrderDetailFooter from '@components/footer/OrderDetailFooterComponent';
const OrderDetailLayout = ({ onClick, navbarProps, body }) => {
    const [init, setInit] = useState(true);
    useEffect(() => {
        if (init) {
            scrollUp();
            setInit(false);
        }
    })
    return (
        <>
            {/* Nav bar */}
            {/* { title: 'Promotions',centerTitle: true, leadingIcon: false } */}
            <Navbar {...navbarProps} />
            <div className="mt-20 md:mt-28"></div>

            {body}

            <div className="mt-20 md:mt-44"></div>
            {/* Mobile Footer */}
            <OrderDetailFooter onClick={onClick} />
            {/* Web Footer */}
            <FooterNavigater /> 

        </>
    );
}
export default memo(OrderDetailLayout);
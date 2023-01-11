import { memo } from "react";
import { navItems } from "@components/navbar/NavBarComponent";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TabNavigater from './TabNavigater';
import FooterNavigater from './FooterNavigater';
import RouteName from '@route/RouteName';

const Footer = () => {
    const navigate = useNavigate();
    const { user: { id, token } } = useSelector(({ root }) => root);
    const currentRoute = useLocation().pathname;
    const navItemAction = (path) => {
        if (path === RouteName.account) {
            if (id && token) {
                navigate(RouteName.account)
            } else {
                console.log("Unlogged User");
                navigate(RouteName.signUp);
            }
        } else {
            navigate(path);
        }
        if (path === currentRoute) return;
    }
    return (
        <>
            {/* Mobile View Only flex md:hidden */}
            <TabNavigater
                navItems={navItems}
                navItemAction={navItemAction}
                currentRoute={currentRoute}
            />
            {/* Web View Only hidden md:flex */}
            <FooterNavigater />
        </>
    );
}
export default memo(Footer);
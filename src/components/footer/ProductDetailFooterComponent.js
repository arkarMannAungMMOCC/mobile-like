import { memo } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import TabNavigater from './ProductDetailTabNavigater';
import FooterNavigater from './FooterNavigater';

const Footer = ({addToCartAction})=>{
    const navigate = useNavigate();
    const currentRoute = useLocation().pathname;
    const navItemAction = (path)=>{
        if(path===currentRoute) return;
        navigate(path);
    }
    return (
        <>
            {/* Mobile View Only flex md:hidden */} 
            <TabNavigater addToCartAction={addToCartAction} />

            {/* Web View Only hidden md:flex */}
            <FooterNavigater />
        </>
    );
}
export default memo(Footer);
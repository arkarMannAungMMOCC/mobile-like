import { memo } from "react";
import TabNavigater from './PromotionDetailTabNavigater';
import FooterNavigater from './FooterNavigater';

const Footer = ()=>{   
    return (
        <>   
            <TabNavigater />
            {/* Web View Only hidden md:flex */}
            <FooterNavigater />
        </>
    );
}
export default memo(Footer);
import { memo } from "react";
import Navbar from "@components/navbar/NavBarComponent";
import Footer from "@components/footer/PromotionDetailFooterComponent";
const PromotionDetailLayout = ({appBar,body}) => {
    return (  <>
            <Navbar
                root={false}
                appBar={appBar}
            />
            <div className="mt-20 md:mt-28"></div>
            {body}
            <div className="mt-20 md:mt-44"></div>
            <Footer/>
        </>)
}
export default memo(PromotionDetailLayout);

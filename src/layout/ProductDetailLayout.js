import { memo } from "react";
import { useEffect, useState } from 'react';
import { scrollUp } from "@helper";
import Navbar from "@components/navbar/NavBarComponent";
import Footer from "@components/footer/ProductDetailFooterComponent";
const ProductDetailLayout = ({ appBar, body, addToCartAction }) => {
    const [ init, setInit ] = useState(true);
    useEffect(()=>{
        if(init){
            scrollUp();
            setInit(false);
        }
    })
    return (
        <>
            <Navbar
                root={false}
                appBar={appBar}
            />
            <div className="mt-20 md:mt-28"></div>
            {body}
            <div className="mt-20 md:mt-44"></div>
            <Footer addToCartAction={addToCartAction} />
        </>
    );
}
export default memo(ProductDetailLayout); 
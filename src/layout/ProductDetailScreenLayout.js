import { memo } from "react";
import ProductDetailLayout from "./ProductDetailLayout";

const ProductDetailScreenLayout = ({ imageCard, mobileInfo, feature, addToCartAction }) => {
    return (
        <ProductDetailLayout
            addToCartAction={addToCartAction}
            appBar={
                {
                    title: 'Product Detail',
                    centerTitle: true,
                    leadingIcon: true
                }
            }
            body={
                <>
                    {/* Mobile View Only */}
                    <div className=" flex flex-col md:hidden">
                        <div className="mt-5  ">
                            {imageCard}
                        </div>
                        <div>{mobileInfo}</div>
                        <div className="mt-4">{feature}</div>
                        <div className="h-24"></div>
                    </div>
                    {/* Web View Only */}
                    <div className="hidden md:flex flex-col container mx-auto">
                        <div className="flex flex-row mt-20">
                            <div className="flex-[1] flex flex-col">{imageCard}
                                <div className="mt-12">{feature}</div>
                            </div>
                            <div className="flex-[1] ml-5">{mobileInfo}</div>
                        </div>
                        <div className="my-10 h-20 "></div>
                    </div>
                    {/* <div className="mt-5 flex-grow border-t border-2 border-[#D0D0D0] "></div> */}

                </>
            }
        />
    );
}
export default memo(ProductDetailScreenLayout);
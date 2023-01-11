import { memo } from "react";
import PromotionDetailLayout from "./PromotionDetailLayout";
const PromotionDetailScreenLayout = ({ image, title, description }) => {
    return (
        <PromotionDetailLayout
            appBar={
                {
                    title: 'Promotion Detail',
                    centerTitle: true,
                    leadingIcon: true
                }
            }
            body={
                <>
                    {image &&
                        <div className="md:container md:mx-auto ">
                            <div className="mx-auto h-4 md:h-16 lg:h-20"></div>
                            {image}
                        </div>}
                    {/* {image && <div className=" ml-2 md:container md:mx-auto  my-3 "> {image}</div>} */}
                    {title && <div className=" ml-2 md:container md:mx-auto   my-3 text-2xl font-semibold"> {title}</div>}
                    <div className=" flex-grow border-t border-2 border-[#D0D0D0] "></div>
                    {description && <div className="text-justify container mx-auto mt-3 md:text-xl "> {description}</div>}
                </>
            }
        />
    );
}
export default memo(PromotionDetailScreenLayout);
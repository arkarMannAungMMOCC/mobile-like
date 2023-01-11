import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const PromotionScreenLayout = ({ body }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Promotions', centerTitle: true, leadingIcon: false }
            }}
            body={
                <div className="container mx-auto">
                    <div className="h-4 md:h-16 lg:h-20 "></div>
                    {body}
                    <div className="h-4 md:h-16 lg:h-20 "></div>
                </div>
            }
        />
    );
}
export default memo(PromotionScreenLayout);
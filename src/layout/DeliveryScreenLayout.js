import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const DeliveryScreenLayout = ({ body }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Deliveries', centerTitle: true, leadingIcon: false }
            }}
            body={
                <div className="">
                    {body}
                    <div className="h-12"></div>
                </div>
            }
        />
    );
}
export default memo(DeliveryScreenLayout);
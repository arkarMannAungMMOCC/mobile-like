import { memo } from "react"
import OrderDetailLayout from "./OrderDetailLayout";
import Routename from "@route/RouteName";
const OrderDetailScreenLayout = ({ body, onClick }) => {
    return (<><OrderDetailLayout
        onClick={onClick}
        navbarProps={{
            root: false,
            appBar: { title: 'Order Detail', centerTitle: true, leadingIcon: true, leadingRoute: Routename.delivery }
        }}
        body={
            <div className=" mt-28 container mx-auto md:mt-48 ">
                {body}
            </div>
        }
    />
    </>)
}
export default memo(OrderDetailScreenLayout);
import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const CartScreenLayout = ({ body }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Cart', centerTitle: true, leadingIcon: false }
            }}
            body={
                <div className="mt-28 mb-36 md:mt-48 md:mb-60 container mx-auto">
                    {body}
                </div>
            }
        />
    );
}
export default memo(CartScreenLayout);
import { memo } from "react"
import DefaultLayout from "./DefaultLayout";

const CheckOutScreenLayout = ({ body }) => {
    return (<DefaultLayout
        navbarProps={{
            root: false,
            appBar: { title: 'Check Out', centerTitle: true, leadingIcon: true }
        }}
        body={
            <div className=" mt-28 container mx-auto md:mt-48 ">
                {body}
            </div>
        }
    />)
}
export default memo(CheckOutScreenLayout);
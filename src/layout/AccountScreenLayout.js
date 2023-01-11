import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const AccountScreenLayout = ({ body }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Account', centerTitle: true, leadingIcon: false }
            }}
            body={body}
        />
    );
}
export default memo(AccountScreenLayout); 
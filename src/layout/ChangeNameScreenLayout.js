import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
import InputComponent from "@components/auth/InputComponent";
import ButtonComponent from "@components/auth/ButtonComponent";
const ChangeNameScreenLayout = ({ body }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Change Name', centerTitle: true, leadingIcon: true }
            }}
            body={
                <>
                    <div className="container mx-auto">
                        <InputComponent label='Name' value="A mie " setValue='' type="text" />
                        <div className="h-3"></div>
                        <ButtonComponent
                            title="Login"
                        />
                    </div>
                </>

            }
        />
    );
}
export default memo(ChangeNameScreenLayout);
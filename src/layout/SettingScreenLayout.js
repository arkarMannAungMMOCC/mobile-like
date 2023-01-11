import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const SettingScreenLayout = ({ account, about }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Setting', centerTitle: true, leadingIcon: true }
            }}
            body={
                <div className="container mx-auto">
                    <div className="h-4 md:h-16 lg:h-20 "></div>
                    {/* Mobile View  */}
                    <div className="flex flex-col md:hidden">
                        {account}
                        <div className="h-14"></div>
                        {about}
                    </div>

                    {/* Web View */}
                    <div className="hidden md:flex flex-row">
                        <div className="flex-1">
                            {account}
                        </div>
                        <div className="w-14"></div>
                        <div className="flex-1">
                            {about}
                        </div>
                    </div>
                    <div className="h-4 md:h-16 lg:h-20 "></div>
                </div>
            }
        />
    );
}
export default memo(SettingScreenLayout);
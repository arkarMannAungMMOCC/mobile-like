import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const CategoryScreenLayout = ({ label, categoryItems }) => {
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: label, centerTitle: true, leadingIcon: true }
            }}
            body={
                <>
                    <div className="container mx-auto flex flex-col mt-24 md:mt-40 lg:mt-44">
                        {categoryItems}
                    </div>
                </>

            }
        />
    );
}
export default memo(CategoryScreenLayout);
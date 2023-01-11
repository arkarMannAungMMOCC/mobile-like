import { memo } from "react";
import DefaultLayout from "./DefaultLayout";
const HomeScreenLayout = ({
    carousel,
    category,
    promotions,
    popularItems
}) => {
    return (
        <DefaultLayout
            // body={body}
            body={
                <>             
                    {/* Carousel */}
                    <div className="container mx-auto flex flex-col lg:flex-row mt-24 md:mt-40 lg:mt-44 bg-background">
                        <div className="z-500 flex-1">
                            {carousel}
                        </div>
                        <div>
                            {category}
                        </div>
                    </div>

                    <div className="h-8 md:h-20"></div>

                    <div className="container mx-auto">
                        {promotions}
                    </div>

                    <div className="h-8 md:h-20"></div>

                    <div className="container mx-auto">
                        {popularItems}
                    </div>
                    <div className="h-20"></div>
                </>
            }
        />
    ); 
}
export default memo(HomeScreenLayout);
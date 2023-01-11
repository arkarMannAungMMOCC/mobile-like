import { memo } from "react";
import Logo from "@assets/logo.png";
import SearchBox from "./SearchBoxComponent";

const MobileRootHeaderComponent = ({
    searchValue,setSearchValue,searchAction
})=>{
    return (
        <>
            <nav className="z-50 md:hidden fixed top-0 w-screen bg-gradient-to-r from-linearFrom to-linearTo rounded-b-2xl md:rounded-none shadow-lg">
                <div className="container mx-auto flex flex-row h-20 md:h-24 items-center justify-between">
                    <div className="w-fit h-fit">
                        <img src={Logo} className="object-contain h-20 w-14 md:h-20 md:w-20"/>
                    </div>
                    {/* search box */}
                    <div className="flex-1 flex flex-row ml-6">
                        <SearchBox 
                        value={searchValue}
                        setValue={setSearchValue}
                        search={searchAction}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}
export default memo(MobileRootHeaderComponent);
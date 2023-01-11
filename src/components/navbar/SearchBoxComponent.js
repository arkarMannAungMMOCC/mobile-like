import { memo } from "react";
import { BiSearch } from "react-icons/bi";
const SearchBox = ({
    value,
    setValue,
    search,
    placeholder="Search . . .",
    type="text"
})=>{
    return (
        <>
            <div className="flex-1 flex flex-row items-center relative">
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value} 
                    onChange={(text) => setValue(text.target.value)}
                    className="flex-1 pl-4 pr-8 py-1 h-10 rounded-full placeholder-slate-300 text-slate-600 relative bg-white text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                    // w-60 
                />
                <div className="absolute right-1 flex flex-row items-center">
                    <div className="text-gray-200 text-3xl -mt-2">|</div>
                    <div onClick={search} className="text-primary ml-1 cursor-pointer"> 
                        <BiSearch size={30}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default memo(SearchBox);
import { memo } from "react";

const CartComponent = ({
    onClick = () => { },  
    Icon,
    label="",
    count,
    countStyle=""
})=>{
    return (
        <>
            <div onClick={onClick} className="flex flex-col mx-4 items-center text-white cursor-pointer select-none">
              <div className="relative">
                <Icon size={40}/>
                <div className={`absolute top-0 -right-2 -mt-2 bg-yellow-500 rounded-full text-sm px-1.5 w-fit ${countStyle}`}>{count}</div>
              </div>
              <div className="text-sm -mt-1 font-semibold">{label}</div>
            </div>
        </>
    );
}
export default memo(CartComponent);
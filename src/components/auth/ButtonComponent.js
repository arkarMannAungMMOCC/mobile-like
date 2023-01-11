import { memo } from "react";

const ButtonComponent = ({
    title,
    disable,
    onClick = () => console.log('onClick')
}) => {
    return (<>
        <div onClick={disable ? () => { } : onClick} className={"flex flex-row justify-center"}>
            <div className={`${disable ? 'opacity-60 ' : ''}bg-[#56CB49] px-6 py-3 rounded-2xl text-white text-[25px] font-bold cursor-pointer shadow-lg`}>{title}</div>
        </div>
    </>);
}
export default memo(ButtonComponent);
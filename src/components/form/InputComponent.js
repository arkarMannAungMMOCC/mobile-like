import { memo } from "react";
const InputComponent = ({ value, setValue, label, placeholder, type = "text", errorMsg,
    required = false }) => {
    return (<>
        <div className="flex flex-row items-center justify-between px-6">
            <div className="flex-[1] h-10 flex flex-row items-center">
                <label htmlFor={label} >{label}</label>
            </div>
            <div className="flex-[2] flex flex-row items-center">
                <input onChange={(event) => setValue(event.target.value)} type={type} value={value} className="ml-5 px-2 placeholder:italic focus:outline-none placeholder:text-[#D0D0D0] text-right flex-1 h-10" placeholder={placeholder} id={label} />
            </div>
        </div>
        {errorMsg && <div className="text-red-500 text-sm text-right mr-6 mb-1">{errorMsg}</div>}
    </>);
}
export default memo(InputComponent);




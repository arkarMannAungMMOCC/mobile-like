import { memo, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const InputComponent = ({
    label,
    value,
    setValue,
    type,
}) => {
    const [textSecure, setTextSecure] = useState(true);
    return (<>
        <div className="flex flex-row w-full my-2">
            <div className="flex flex-col w-full">
                <div htmlFor={label} className="mb-2 text-title text-[20px]">{label}</div>
                <div className="relative flex flex-row">
                    {type === 'password' &&
                        <div onClick={() => setTextSecure(!textSecure)} className="absolute text-gray-500 right-4 h-12 flex flex-row items-center cursor-pointer select-none">
                            {
                                textSecure ?
                                    /* textSecure */
                                    <AiFillEye size={30} />
                                    /* not textSecure */
                                    : <AiFillEyeInvisible size={30} />
                            }
                        </div>
                    }
                    <input
                        id={label}
                        className={`flex-1 flex flex-row h-12 text-title text-[20px] pl-4 ${type === 'password' ? 'pr-12' : 'pr-4'} rounded-2xl`}
                        value={value}
                        type={type === 'password' ? (textSecure ? 'password' : 'text') : (type)}
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
            </div>
        </div>
    </>)
}
export default memo(InputComponent);
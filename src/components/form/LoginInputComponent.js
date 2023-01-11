import { memo, useState } from "react";

const LoginInputComponent = ({value,setValue,type})=>{
    const [hide,setHide] = useState(true);
    return <>
        <input value={value} onChange={(text)=>setValue(text.target.value)} type={hide?'password':'text'}/>
        {type==="password" && <div onClick={()=>setHide(!hide)}>{hide?'eye close': 'eye open'}</div>}
    </>;
}
export default memo(LoginInputComponent);
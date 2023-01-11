import { memo } from "react";
import Logo from "@assets/logo.png";
const AuthLayout = ({ welcome, form }) => {
    return (
        <div className="flex flex-col bg-gradient-to-b from-linearFrom to-linearTo h-screen">
            {welcome}
            {form}
        </div>
    );
}
export default memo(AuthLayout);
{/* <>
    <div className="relative  justify-center items-center">
        
    </div>
    
</> */}
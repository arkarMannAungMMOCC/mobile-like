import { memo } from "react";
import AuthLayout from "@layout/AuthLayout";
import ButtonComponent from "@components/auth/ButtonComponent";
import InputComponent from "@components/auth/InputComponent";
import Logo from "@assets/logo.png";
import { useNavigate } from "react-router-dom";


const ConfirmScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat, scrollUp ,validator, sleep
}) => {
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState('');
    const [codeErrMsg, setCodeErrMsg] = useState('');
    const navigate = useNavigate();
    const goLoginPage = () => {
        navigate(RouteName.login);
    }
    const confirmAction = async () => {
        console.log('confirmAction');
        const confirmValidator = validator({
            name: 'OTP',
            value: code,
            setErrValue: setCodeErrMsg,
            rule: {
                required: true,
                max: 30
            }
        });
        if (confirmValidator) {
            console.log("Sign Up Confirm")
        }

    }
    return <AuthLayout
        welcome={
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <img src={Logo} alt="logo" className="object-contain h-[120px] w-[120px] md:h-[140px] md:w-[140px] lg:h-[140px] lg:w-[140px]" />
                </div>
                <div className="text-title text-[25px] font-semibold md:text-2xl lg:text-3xl mt-2">
                    Welcome to
                </div>
                <div className="text-title text-[25px] font-semibold md:text-2xl lg:text-3xl">
                    Mobile Like
                </div>
            </div>
        }
        form={
            <div className="flex flex-col p-[20px] md:px-[100px] lg:mb-[50px] lg:px-[350px] items-center">
                <div className="text-center mb-6 text-title text-[25px]"> 4 digit code has been <br /> sent to your phone number.</div>
                <InputComponent
                    label={'Confirm Code'}
                    value={code}
                    setValue={setCode}
                    type="number"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{codeErrMsg}</div>
                <div className="h-3"></div>
                <ButtonComponent
                    title="Enter"
                    onClick={confirmAction}
                    disable={loading}
                />
                <div onClick={goLoginPage} className="mt-3 cursor-pointer select-none text-[15px]">Already have an account ? Login</div>
            </div>
        }
    />;
}
export default memo(ConfirmScreen);
import { memo } from "react";
import AuthLayout from "@layout/AuthLayout";
import ButtonComponent from "@components/auth/ButtonComponent";
import InputComponent from "@components/auth/InputComponent";
import Logo from "@assets/logo.png";
import { useNavigate } from "react-router-dom";

const PasswordRecoveryScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat, scrollUp ,validator, sleep
}) => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [pwdErrMsg, setPwdErrMsg] = useState('');
    const [phone, setPhone] = useState('');
    const [phErrMsg, setPhErrMsg] = useState('');
    const navigate = useNavigate();
    const recoveryAction = async () => {
        console.log('recoveryAction');
        setPwdErrMsg('');
        setPhErrMsg('');
        const phoneValidator = validator({
            name: 'Phone no',
            value: phone,
            setErrValue: setPhErrMsg,
            rule: {
                required: true,
                max: 30
            }
        });
        const pwdValidator = validator({
            name: 'New Password',
            value: password,
            setErrValue: setPwdErrMsg,
            rule: {
                min: 6,
                max: 30
            }
        });

        if (phoneValidator && pwdValidator) {
            console.log("Go Recovery Confirm");
            navigate(RouteName.recoveryConfirm);
        }
    }
    const goLoginAction = () => {
        navigate(RouteName.login);
    }

    return <AuthLayout
        welcome={
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <img src={Logo} alt="logo" className="object-contain h-[120px] w-[120px] md:h-[140px] md:w-[140px] lg:h-[140px] lg:w-[140px]" />
                </div>
                <div className="text-lg text-title font-semibold mt-2 md:text-2xl lg:text-3xl">
                    Please recovery with your phone number
                </div>
            </div>
        }
        form={
            <div className="flex flex-col p-[20px] md:px-[100px] lg:mb-[50px] lg:px-[350px] items-center">
                <InputComponent
                    label={'Phone no.'}
                    value={phone}
                    setValue={setPhone}
                    type="tel"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{phErrMsg}</div>
                <InputComponent
                    label={'New Password'}
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{pwdErrMsg}</div>
                <div className="h-3"></div>
                <ButtonComponent
                    title="Recovery"
                    onClick={recoveryAction}
                    disable={loading}
                />
                <div onClick={goLoginAction} className="mt-3 select-none text-[15px] cursor-pointer">Already have an account ? Login</div>
            </div>
        }
    />;
}
export default memo(PasswordRecoveryScreen);
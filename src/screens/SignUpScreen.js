import { memo } from "react";
import AuthLayout from "@layout/AuthLayout";
import ButtonComponent from "@components/auth/ButtonComponent";
import InputComponent from "@components/auth/InputComponent";
import Logo from "@assets/logo.png";
import { useNavigate } from "react-router-dom";
const SignUpScreen = ({
    useEffect, useState, useRef, useCallback,
    Api, useSelector, dispatch, Local, setUser, setCartCount,
    RouteName, comaFormat, scrollUp, validator, sleep
}) => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [pwdErrMsg, setPwdErrMsg] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phErrMsg, setPhErrMsg] = useState('');
    const navigate = useNavigate();
    const local = Local({ dispatch, setUser, setCartCount });
    const signUpAction = async () => {
        console.log('signUpAction');
        setPwdErrMsg('');
        setPhErrMsg('');
        setLoading(true);
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
            name: 'Password',
            value: password,
            setErrValue: setPwdErrMsg,
            rule: {
                min: 6,
                max: 30
            }
        });

        if (phoneValidator && pwdValidator) {
            console.log("Go Sign Up");
            const request = {
                name,
                phone,
                password
            };
            Api.register(request)
                .then(({ data }) => {
                    setLoading(false);
                    if (data) {
                        const { id, phone, name } = data.data;
                        // TODO: setUser >> localStroage
                        local.setUser({ id, phone, name });
                        // TODO: goLogin
                        navigate(RouteName.login);
                    }
                })
                .catch(({ response: { data } }) => {
                    setLoading(false);
                    if (data) {
                        if (data.message) setPhErrMsg(data.message.length > 40 ? "unknown error" : data.message);
                        if (data.error.password) setPwdErrMsg(data.error.password[0]);
                        if (data.error.phone) setPhErrMsg(data.error.phone[0]);
                    } else {
                        setPhErrMsg('unknown error');
                    }
                });
        } else {
            setLoading(false);
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
                <div className="text-lg md:text-2xl lg:text-3xl mt-2 text-title text-[16px] font-semibold">
                    Please sign up with your phone number
                </div>
            </div>
        }
        form={
            <div className="flex flex-col p-[20px] md:px-[100px] lg:mb-[50px] lg:px-[350px] items-center">
                <InputComponent
                    label={'Name'}
                    value={name}
                    setValue={setName}
                    type="text"
                />
                <InputComponent
                    label={'Phone no.'}
                    value={phone}
                    setValue={setPhone}
                    type="tel"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{phErrMsg}</div>
                <InputComponent
                    label={'Password'}
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{pwdErrMsg}</div>
                <div className="h-3"></div>
                <ButtonComponent
                    title="Sign up"
                    onClick={signUpAction}
                    disable={loading}
                />
                <div onClick={goLoginAction} className="mt-3 cursor-pointer select-none text-[15px]">Already have an account ? Login</div>
            </div>
        }
    />;
}
export default memo(SignUpScreen);
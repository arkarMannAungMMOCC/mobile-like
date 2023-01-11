import React, { memo } from "react";
import AuthLayout from "@layout/AuthLayout";
import ButtonComponent from "@components/auth/ButtonComponent";
import InputComponent from "@components/auth/InputComponent";
import Logo from "@assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({
    useEffect, useState, useRef, useCallback,
    Api, useSelector, dispatch, Local, setUser, setCartCount,
    RouteName, comaFormat, scrollUp, validator, sleep
}) => {
    //store    
    const { phone: userPhone } = useSelector(({ root }) => root.user)
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [pwdErrMsg, setPwdErrMsg] = useState('');
    const [phone, setPhone] = useState(userPhone);
    const [phErrMsg, setPhErrMsg] = useState('');
    // localStroage
    const local = Local({ dispatch, setUser, setCartCount });
    const navigate = useNavigate();
    const goForgotPassword = () => {
        navigate(RouteName.recovery);
    }
    const loginAction = async () => {
        setPwdErrMsg('');
        setPhErrMsg('');
        console.log('confirmAction');
        const phoneValidator = validator({
            name: 'phone no',
            value: phone,
            setErrValue: setPhErrMsg,
            rule: {
                required: true,
                max: 30
            }
        });
        const pwdValitdator = validator({
            name: 'password',
            value: password,
            setErrValue: setPwdErrMsg,
            rule: {
                min: 6,
                max: 30

            }
        })
        if (phoneValidator && pwdValitdator) {
            setLoading(true);
            console.log('go login');
            // navigate(RouteName.home);
            //Your Logic Here ( API call)
            const request = {
                phone,
                password
            };
            Api.login(request)
                .then(({ data }) => {
                    setLoading(false);
                    // const { data: { id, phone, name, points, address }, token } = data;
                    if (data) {
                        const { data: { id, phone, name, points, address }, token } = data;
                        // TODO: setUser >> localStroage
                        local.setUser({ id, phone, name, points, address, token });
                        // TODO: goLogin
                        navigate(RouteName.home);
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
    return <AuthLayout
        welcome={
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>
                    <img src={Logo} alt="logo" className="object-contain h-[120px] w-[120px] md:h-[140px] md:w-[140px] lg:h-[140px] lg:w-[140px]" />
                </div>
                <div className="text-lg mt-2 md:text-xl lg:text-2xl text-title font-semibold">
                    Please login using your phone number
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
                    label={'Password'}
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
                <div className="h-1"></div>
                <div className="text-right font-bold text-red-500  w-full">{pwdErrMsg}</div>
                <div className="h-3"></div>
                <ButtonComponent
                    title="Login"
                    onClick={loginAction}
                    disable={loading}
                />
                <div onClick={goForgotPassword} className="mt-3 cursor-pointer select-none text-[15px]">Forget password ?</div>
            </div>
        }
    />;
}
export default memo(LoginScreen);
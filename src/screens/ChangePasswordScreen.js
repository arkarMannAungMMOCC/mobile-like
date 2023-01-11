import { memo } from "react";
import DefaultLayout from "@layout/DefaultLayout";
import InputComponent from "@components/auth/InputComponent";
import ButtonComponent from "@components/auth/ButtonComponent";
import { useNavigate } from "react-router-dom";
const ChangePasswordScreen = ({
    useEffect, useState, useRef, useCallback,
    Api, useSelector, dispatch, Local, setUser, setCartCount,
    RouteName, comaFormat, scrollUp, validator, sleep
}) => {
    const user = useSelector(({ root: { user } }) => user);
    const [password, setPassword] = useState('');
    const [pwdErrMsg, setPwdErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const local = Local({ dispatch, setUser });
    const navigate = useNavigate();

    const changePwdAction = () => {
        setLoading(true);
        setPwdErrMsg('');
        const pwdValidator = validator({
            name: 'Password',
            value: password,
            setErrValue: setPwdErrMsg,
            rule: {
                min: 6,
                max: 30
            }
        });
        if (pwdValidator) {
            Api.changePassword({ token: user.token, password })
                .then(({ data: { data: { password } } }) => {
                    console.log(password);
                    setLoading(false);
                    navigate(RouteName.setting);
                })
                .catch(({ response: { data: { message } } }) => {
                    console.log(message)
                    setPwdErrMsg(message);
                    setLoading(false);

                });
        } else {
            setLoading(false);
        }
    }
    return (
        <DefaultLayout
            navbarProps={{
                root: false,
                appBar: { title: 'Change Password', centerTitle: true, leadingIcon: true }
            }}
            body={
                <>
                    <div className="container mx-auto mt-32">
                        <InputComponent label='Password' value={password} setValue={setPassword} type="password" />
                        <div className="text-right font-bold text-red-500  w-full">{pwdErrMsg}</div>
                        <div className="h-3"></div>
                        <ButtonComponent
                            title="Change Password"
                            onClick={changePwdAction}
                            disable={loading}
                        />
                    </div>
                </>

            }
        />
    );
}
export default memo(ChangePasswordScreen);
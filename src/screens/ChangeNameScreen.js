import { memo } from "react";
import ChangeNameScreenLayout from "@layout/ChangeNameScreenLayout";
import DefaultLayout from "@layout/DefaultLayout";
import InputComponent from "@components/auth/InputComponent";
import ButtonComponent from "@components/auth/ButtonComponent";
import { useNavigate } from "react-router-dom";
const ChangeNameScreen = ({
    useEffect, useState, useRef, useCallback,
    Api, useSelector, dispatch, Local, setUser, setCartCount,
    RouteName, comaFormat, scrollUp, validator, sleep
}) => {
    const user = useSelector(({ root: { user } }) => user);
    const [name, setName] = useState(user.name);
    const [nameErrMsg, setNameErrMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const local = Local({ dispatch, setUser });
    const navigate = useNavigate();

    const changeNameAction = () => {
        setLoading(true);
        setNameErrMsg('');
        const nameValidator = validator({
            name: 'name',
            value: name,
            setErrValue: setNameErrMsg,
            rule: {
                required: true,
                max: 30
            }
        });
        if (nameValidator) {
            Api.changeName({ token: user.token, name })
                .then(({ data: { data: { name } } }) => {
                    console.log(name);
                    setLoading(false);
                    if (name) {
                        const updatedUser = { ...user, name };
                        console.log(updatedUser);
                        local.setUser(updatedUser);
                        navigate(RouteName.account);
                    }
                })
                .catch(({ response: { data: { message } } }) => {
                    console.log(message)
                    setNameErrMsg(message);
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
                appBar: { title: 'Change Name', centerTitle: true, leadingIcon: true }
            }}
            body={
                <>
                    <div className="container mx-auto mt-32">
                        <InputComponent label='Name' value={name} setValue={setName} type="text" />
                        <div className="text-right font-bold text-red-500  w-full">{nameErrMsg}</div>
                        <div className="h-3"></div>
                        <ButtonComponent
                            title="Change Name"
                            onClick={changeNameAction}
                            disable={loading || name === user.name}
                        />
                    </div>
                </>

            }
        />
    );
}
export default memo(ChangeNameScreen);
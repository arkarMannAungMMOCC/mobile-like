import { memo } from "react";
import { useNavigate } from "react-router-dom";
import RouterName from "@route/RouteName";

const LogOut = ({
    useSelector,
    dispatch,
    Local, setUser
}) => {
    const navigate = useNavigate();
    const { user: { name } } = useSelector(({ root }) => root);
    const local = Local({ dispatch, setUser });
    const logOutAction = () => {
        // local.setUser({ id: '', name: '', points: '', phone: '', address: '', token: '' });
        local.removeUser();
        navigate(RouterName.login);
    }
    return (
        <div onClick={logOutAction} className=" bg-white  rounded-2xl shadow-lg p-3 cursor-pointer select-none ">
            <div className="flex flex-row justify-center text-title font-bold">
                Log Out
            </div>
        </div>
    );
}
export default memo(LogOut); 
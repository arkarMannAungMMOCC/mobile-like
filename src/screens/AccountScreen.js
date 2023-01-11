import { memo } from "react";
import AccountLayout from "@layout/AccountLayout";
import PointCard from "@components/account/PointCard";
import Avatar from "@components/account/Avatar";
import PhoneCard from "@components/account/PhoneCard";
import RoleCard from "@components/account/RoleCard";
import LogOut from "@components/account/LogOut";
import LogOutModel from "@components/account/LogOutModel";
const AccountScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, setUser,
    RouteName, comaFormat, Local
}) => {
    const { name, points, phone } = useSelector(({ root: { user } }) => user);
    // bottom sheet variable
    const [open, setOpen] = useState(false);
    const toggleBottomSheet = () => {
        setOpen(!open);
    }
    // bottom sheet variable
    return (
        <div className="rss-backdrop" style={{ background: '#F5F5F5', minHeight: '100vh' }}>
            <AccountLayout
                avatar={<Avatar name={name} />}
                pointCard={<PointCard points={comaFormat(points)} />}
                phoneCard={<PhoneCard phone={phone} />}
                roleCard={<RoleCard />}
                logOut={
                    // <LogOut useSelector={useSelector} dispatch={dispatch} Local={Local} setUser={setUser} />
                    <div onClick={toggleBottomSheet} className=" bg-white  rounded-2xl shadow-lg p-3 cursor-pointer select-none ">
                        <div className="flex flex-row justify-center text-title font-bold">
                            Log Out
                        </div>
                    </div>

                }
                bottomSheet={
                    <></>
                }
            />
            <LogOutModel
                open={open}
                setOpen={setOpen}
                Local={Local}
                setUser={setUser}
            />
        </div>
    );
};
export default memo(AccountScreen);
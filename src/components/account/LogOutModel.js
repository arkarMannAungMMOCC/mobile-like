import { memo, useRef } from "react";
import { Sheet, Header, Content, Footer, detents, Portal } from 'react-sheet-slide';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RouteName from "@route/RouteName";
import './style1.css';

const LogOutModel = ({
    open,
    setOpen,
    Local, setUser
}) => {
    const ref = useRef();
    const dispatch = useDispatch();
    const local = Local({ dispatch, setUser });
    const navigate = useNavigate();
    const logOutAction = () => {
        // local.setUser({ id: '', name: '', points: '', phone: '', address: '', token: '' });
        local.removeUser();
        navigate(RouteName.login);
    }
    return <div className="mx-20">
        <Portal>
            <Sheet
                ref={ref}
                open={open}
                onDismiss={() => setOpen(false)}
                onClose={() => {
                    console.log('Component unmounted')
                }}
                selectedDetent={detents.fit}
                detents={props => [
                    // detents.large(props),
                    // detents.medium(props),
                    detents.fit(props),
                ]}
                // props => [detents.large(props), detents.medium(props)]
                useDarkMode={false}
                useModal={true}
                scrollingExpands={true}
            >
                <Content className="bg-[#E6E6E6]">
                    {/*  h-[80px] */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-title font-bold my-6">Are you sure you want to log out?</div>
                        <div onClick={logOutAction} className=" bg-white text-[#FF6C6C]  flex flex-row justify-center w-[340px] font-bold rounded-2xl shadow-lg p-2 cursor-pointer select-none ">
                            Log Out
                        </div>
                        <div onClick={() => setOpen(false)} className="mt-4 bg-white text-title  flex flex-row justify-center w-[340px] font-bold rounded-2xl shadow-lg p-2 cursor-pointer select-none ">
                            Cancel
                        </div>

                    </div>
                </Content>
                {/* <Footer>
                    <div className="bg-[#FEE96C] flex flex-row">
                        Hello
                    </div>
                </Footer> */}
            </Sheet>
        </Portal>
    </div>
}
export default memo(LogOutModel);
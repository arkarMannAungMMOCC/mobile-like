import { memo, useRef } from "react";
import { Sheet, Header, Content, Footer, detents, Portal } from 'react-sheet-slide';
import { MdOutlineKeyboardArrowUp as Expand } from "react-icons/md";
// import 'react-sheet-slide/style.css';
import './style.css';
import { TiTick as Check } from "react-icons/ti";

const BottomSheetComponent = ({
    open,
    setOpen,
    status = 1,
    cancelAction = () => { console.log('cancel') },
    confirmAction = () => { console.log('confirm') },
}) => { // status 1 | 2 | 3
    const ref = useRef();
    return <div>
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
                useModal={false}
                scrollingExpands={true}
            >
                <Content className="bg-[#FEE96C]">
                    {/*  h-[80px] */}
                    <div className="relative h-1/2 flex flex-col items-center rounded-t-3xl mt-[28px]  bg-[#FEE96C]" >
                        <div className="text-[#4D5E80] text-2xl text-center h-[60px] font-bold mt-2" >Delivery Status</div>
                        <div className="flex flex-row justify-center items-center container mx-auto">
                            <div className={`${status > 0 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[2] flex flex-row justify-center items-center h-12 border-4 border-white rounded-2xl cursor-pointer`}>
                                {status > 0 ? <Check size={35} /> : 'pending'}
                            </div>
                            <div className="bg-white flex-[1] h-1"></div>
                            <div className={`${status > 1 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[2] flex flex-row justify-center items-center h-12 border-4 border-white rounded-2xl cursor-pointer`}>
                                {status > 1 ? <Check size={35} /> : 'Waiting'}
                            </div>
                            <div className="bg-white flex-[1] h-1"></div>
                            <div className={`${status > 2 ? 'bg-[#56CB49] text-white' : 'bg-[#FBED98] text-[#4D5E80]'} flex-[2] flex flex-row justify-center items-center h-12 border-4 border-white rounded-2xl cursor-pointer`}>
                                {status > 2 ? <Check size={35} /> : 'Vertified!'}
                            </div>
                        </div>

                        <div className="flex flex-row w-full justify-end items-center container mx-auto mt-6 mb-8">
                            <div onClick={cancelAction} className="bg-[#FF6C6C] flex flex-row justify-center items-center py-4 px-6 text-white rounded-2xl cursor-pointer">
                                Cancel
                            </div>
                            <div className="w-6"></div>
                            <div onClick={confirmAction} className="bg-[#56CB49] flex flex-row justify-center items-center py-4 px-6 text-white rounded-2xl cursor-pointer">
                                Confirm
                            </div>
                        </div>
                        <div className="mb-4 flex w-[200px] h-[5px] rounded-full bg-[#A99898]"></div>

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
export default memo(BottomSheetComponent);
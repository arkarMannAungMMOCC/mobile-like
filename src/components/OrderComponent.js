import { memo } from "react";
const OrderComponent = ({ comaFormat, cartCount, carts }) => {
    const renderItems = ({ name, price, quantity }, i) => {
        return <div key={i}>
            <div className="flex flex-row justify-between px-6 h-10 ">
                <div className="flex-[2] flex flex-row items-center font-bold">
                    <div>{name} x {quantity}</div>
                </div>
                <div className="flex-none flex flex-row items-center justify-end">
                    <div>{comaFormat(quantity * price)} Ks</div>
                </div>
            </div>
            <div className=" flex-grow  w-full border-t-2 border-[#D0D0D0] "></div>
        </div>;
    }
    const total = () => {
        let total = 0;
        carts.map(({ quantity, price }) => total += quantity * price);
        return total;
    }
    return (<>
        <div className="bg-white shadow-lg  rounded-2xl py-4 mb-12 mt-8 md:mt-16">
            <div className="font-bold text-[#4D5E80] mx-4">Order Summary</div>
            <div className="mx-4 ">Items ({cartCount}).</div>
            {
                carts.map((cart, i) => renderItems(cart, i))
            }
            <div className="flex flex-row justify-between px-6 text-[#FF6C6C]">
                <div className="flex-[1] h-10 flex flex-row items-center font-bold">
                    <div>Order total:</div>
                </div>
                <div className="flex-[1] flex flex-row items-center justify-end">
                    <div>{comaFormat(total())} Ks</div>
                </div>
            </div>

        </div>
    </>);
}
export default memo(OrderComponent);




import { memo } from "react";
import CartScreenLayout from "@layout/CartScreenLayout";
import { useNavigate, createSearchParams } from "react-router-dom";
// store
import { setCartCount } from "@store/reducer/rootSlice";
// store
// AiOutlineClose
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';

const CartScreen = ({
    useEffect, useState, useRef, useCallback,
    useSelector, dispatch, Local,
    RouteName, comaFormat,
}) => {
    const { user: { id, token } } = useSelector(({ root }) => root);
    // const { token, id } = useSelector(({ root: { user } }) => user);

    // const dispatch = useDispatch();
    const local = Local({ setCartCount, dispatch });
    const [carts, setCarts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (local.getCart()) {
            if (local.getCart().length !== carts.length) {
                setCarts(local.getCart());
            }
        }
    }, [carts]);
    // Action
    const checkOutAction = () => {
        // To check if user is logged in
        carts.length && ((id && token) ? navigate(RouteName.checkOut) : navigate(RouteName.signUp));
    }

    const cartAction = ({ event, id }) => {
        const action = event.currentTarget.getAttribute('action');
        let updatedCarts = [];
        if (action === 'increase') {
            carts.map(cart => {
                if (cart.id === id) {
                    updatedCarts = [...updatedCarts, { ...cart, quantity: cart.quantity + 1 }];
                } else {
                    updatedCarts = [...updatedCarts, cart];
                }
            });
            setCarts(updatedCarts);
            local.setCart(updatedCarts);
        } else if (action === 'decrease') {
            carts.map(cart => {
                if (cart.id === id) {
                    if (cart.quantity !== 1) {
                        updatedCarts = [...updatedCarts, { ...cart, quantity: cart.quantity - 1 }]
                    }
                } else {
                    updatedCarts = [...updatedCarts, cart];
                }
            });
            setCarts(updatedCarts);
            local.setCart(updatedCarts);
        } else {
            // detail
            const params = { id };
            navigate({
                pathname: RouteName.productDetail,
                search: `?${createSearchParams(params)}`
            });
            // detail
        }
    }
    // Action
    const renderItem = ({ id, name, quantity, price, imageUrl }) => {
        return (
            <div key={id} className="bg-white relative flex flex-col rounded-xl md:rounded-2xl shadow-lg p-3 cursor-pointer">
                <div action="detail" className="flex flex-row justify-center h-[150px]" onClick={(event) => cartAction({ event, id })} >
                    <img src={imageUrl} alt={name} className="object-contain" />
                </div>
                <div className="py-0.5 flex flex-row justify-center items-center">
                    <div action="decrease" onClick={(event) => cartAction({ event, id })} className="text-green-400">
                        <AiFillMinusSquare size={35} />
                    </div>
                    <div className=" bg-gray-200 text-blue-800 font-bold w-12 h-7 flex flex-row justify-center items-center">
                        {quantity}
                    </div>
                    <div action="increase" onClick={(event) => cartAction({ event, id })} className="text-red-400">
                        <AiFillPlusSquare size={35} />
                    </div>
                </div>
                <div action="detail" onClick={(event) => cartAction({ event, id })} className="text-lg">{name}</div>
                <div action="detail" onClick={(event) => cartAction({ event, id })} className="text-[#289266] font-semibold">{comaFormat(price)} Ks</div>
            </div>
        );
    }
    return (
        <CartScreenLayout
            // cartList 
            body={<>
                <div className="flex flex-row items-center justify-between mb-12 md:mb-20">
                    <div className="text-[#4D5E80] font-bold">Your Cart</div>
                    <div onClick={checkOutAction} className={` bg-primary rounded-lg text-white font-semibold py-2 px-3 cursor-pointer select-none ${carts.length ? '' : 'opacity-60'}`}>Check Out</div>
                </div>
                {
                    carts.length ?
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                            {
                                carts.map(({ id, name, quantity, price, imageUrl }) => {
                                    return renderItem({ id, name, quantity, price, imageUrl });
                                })
                            }
                        </div>
                        : <div className="h-screen text-center text-gray-600 text-xl">
                            There is no item in cart
                        </div>
                }
            </>}
        />
    );
};
export default memo(CartScreen);
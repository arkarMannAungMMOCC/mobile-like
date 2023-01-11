const CART_KEY = 'CART_KEY';
const USER_KEY = 'USER_KEY';
const Local = ({
    dispatch = () => { console.log("Dispatch required to call store function") },
    setCartCount = () => { console.log("setCartCount required to update store") },
    setUser = () => { console.log("setUser required to update store") },
}) => {
    return {
        //User Data
        getUser: () => {
            try {
                const userData = JSON.parse(localStorage.getItem(USER_KEY));
                return userData;
            } catch (e) {
                return false;
            }
        },
        setUser: ({ id = '', name = '', points = '', phone = '', address = '', token = '' }) => {
            const user = JSON.stringify({ id, name, phone, address, points, token });
            localStorage.setItem(USER_KEY, user);
            dispatch(setUser({ id, name, phone, address, points, token }));
        },
        removeUser: () => {
            localStorage.removeItem(USER_KEY);
            dispatch(setUser({ id: '', name: '', phone: '', address: '', points: '', token: '' }));

        },
        //Add To Card Data
        getCart: () => {
            try {
                const cartDatas = JSON.parse(localStorage.getItem(CART_KEY));
                return cartDatas;
            } catch (e) {
                return false;
            }
        },
        addCart: (cart) => {
            const cartDatas = JSON.parse(localStorage.getItem(CART_KEY));
            const newCartDatas = [...cartDatas, cart];
            localStorage.setItem(CART_KEY, JSON.stringify(newCartDatas));
            dispatch(setCartCount(newCartDatas.length)); // set store
        },
        setCart: (carts) => {
            localStorage.setItem(CART_KEY, JSON.stringify(carts));
            dispatch(setCartCount(carts.length)); // set store
        },
        removeCart: () => {
            localStorage.removeItem(CART_KEY);
            dispatch(setCartCount(0));
        }
    };
}
export default Local;
/* 
    {
        id:,
        name: "",
        phone: "",
        address: "",
        token: ""
    }
*/
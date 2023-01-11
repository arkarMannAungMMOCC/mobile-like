import axios from 'axios';
axios.defaults.baseURL = 'https://dev.mobilelikemm.com/ml/public/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const register = ({ name, phone, password }) => {
    return axios.post(
        '/register', { name, phone, password, role_id: "4" }
    )
};
const login = ({ phone, password }) => {
    return axios.post(
        '/login', { phone, password, role_id: "4" }
    )
};
const getItems = () => {
    return axios.get('/user/items');
};
const getPromotions = () => {
    return axios.get('/carousel');
};
const getOrderHistory = ({ token, id }) => {
    return axios.get(`/user/get-user-order/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
};
const createOrder = ({ token, id, userData, orderDetails }) => {
    return axios.post(`/user/order-post`,
        {
            user_id: id,
            remark: userData,
            order_detail: orderDetails
        },
        {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }
    );
};
const changeName = ({ token, name }) => {
    return axios.post(`/user/update-user-data`,
        {
            name
        },
        {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }
    )
};
const changePassword = ({ token, password }) => {
    // console.log({ token, password });
    return axios.post(`/user/change-password`,
        {
            password
        },
        {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }
    )
};
const Api = {
    register, login, getItems, getPromotions, getOrderHistory, createOrder, changeName, changePassword
};
export default Api;
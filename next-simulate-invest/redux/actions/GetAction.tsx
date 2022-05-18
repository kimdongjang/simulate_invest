//src/redux/actions.js
import axios from 'axios';

const GET_USERS = 'GET_USERS';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

export default function getUsersPromise() {
    return {
        type: GET_USERS,
        payload: async () => {
            const res = await axios.get('/api/products');
            return res.data;
        },
    };
}

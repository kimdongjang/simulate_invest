//src/redux/actions.js
import axios from 'axios';

const POST_USERS = 'POST_USERS';

export const POST_USERS_PENDING = 'POST_USERS_PENDING';
export const POST_USERS_FULFILLED = 'POST_USERS_FULFILLED';
export const POST_USERS_REJECTED = 'POST_USERS_REJECTED';

export function postUsersPromise(url, param) {
    console.log(param);
    return {
        type: POST_USERS,
        payload: async () => {
            const res = await axios.post(url, param);
            return res.data;
        },
    };
}

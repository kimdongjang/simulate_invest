//src/redux/actions.js
import axios from 'axios';

const POST_REQUEST = 'POST_REQUEST';

export const POST_REQUEST_PENDING =   'POST_REQUEST_PENDING';
export const POST_REQUEST_FULFILLED = 'POST_REQUEST_FULFILLED';
export const POST_REQUEST_REJECTED =  'POST_REQUEST_REJECTED';

export function postPromise<T>(url:string , param:T) {
    console.log(param);
    return {
        type: POST_REQUEST,
        payload: async () => {
            const res = await axios.post(url, param);
            return res.data;
        },
    };
}

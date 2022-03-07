//src/redux/actions.js
import axios from 'axios';

const POST_REQUEST = 'POST_REQUEST';

export const POST_REQUEST_PENDING =   'POST_REQUEST_PENDING';
export const POST_REQUEST_FULFILLED = 'POST_REQUEST_FULFILLED';
export const POST_REQUEST_REJECTED =  'POST_REQUEST_REJECTED';

/**
 * parameter의 타입을 지정해서 받도록. url은 string 고정.
 * @param url 
 * @param param 
 * @returns 
 */
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


export type PostAction = | ReturnType<typeof postPromise>;
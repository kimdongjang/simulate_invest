//src/redux/actions.js
import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST' as const;
export const POST_REQUEST_PENDING =   'POST_REQUEST_PENDING' as const;
export const POST_REQUEST_FULFILLED = 'POST_REQUEST_FULFILLED' as const;
export const POST_REQUEST_REJECTED =  'POST_REQUEST_REJECTED' as const;

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
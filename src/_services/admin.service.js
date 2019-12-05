import axios from '../_util/axios-api';
import { authHeader } from '../_util/auth/auth-header';

export const adminService = {
    refresh,
    clear
};

function clear() {
    localStorage.removeItem('admin')
}

function refresh(username) {
    const requestOptions = {
        url: `/admins`,
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };
    return axios(requestOptions).then((response)=>{
            const admins = response.data;
            const admin = admins.find((el)=>{
                return el.userName.toLowerCase() === username.toLowerCase()
            });
            localStorage.setItem('admin', admin)
            return admin;
        }).catch(handleBadResponse)
}

function handleBadResponse(error) {
    if (error.response.status >= 400) {
        return Promise.reject(error.response.data || error.response.statusText)
    }
    return Promise.resolve(error.response);

}

import config from '../config.json';
import jwtDecode from 'jwt-decode';
import http from './httpService';

const tokenKey = "token";

export async function login ( email, password ){
    // const { data: jwt } = await http.post( config.apiAuthEndPoint, { email, password });
    localStorage.setItem(tokenKey, email);
}

export function logout() {
    localStorage.removeItem(tokenKey);    
}

export function loginWithJwt( jwt ){
    localStorage.setItem( tokenKey, jwt );
}

export function getCurrentUser (){
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export function getJwt (){
    return localStorage.getItem( tokenKey );
}

export default {
    login : login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    loginWithJwt: loginWithJwt,
    getJwt: getJwt
}
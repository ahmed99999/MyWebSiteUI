import Http from './httpService';
import config from '../config.json';
import jwtDecode from 'jwt-decode';


export async function login ( email, password ){
    const { data: jwt } = await Http.post( config.apiAuthEndPoint, { email, password });
    localStorage.setItem('token', jwt);
}

export function logout() {
    localStorage.removeItem('token');    
}

export function loginWithJwt( jwt ){
    localStorage.setItem( 'token', jwt );
}

export function getCurrentUser (){
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    } catch (error) {
        return null;
    }
}

export default {
    login : login,
    Logout: logout,
    getCurrentUser: getCurrentUser,
    loginWithJwt: loginWithJwt
}
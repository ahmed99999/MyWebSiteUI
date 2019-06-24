import Http from './httpService';
import config from '../config.json';


export async function login ( email, password ){
    const { data: jwt } = await Http.post( config.apiAuthEndPoint, { email, password });
    localStorage.setItem('token', jwt);
}

export function logout() {
    localStorage.removeItem('token');    
}

export default {
    login : login,
    Logout: logout
}
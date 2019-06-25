import Http from './httpService';
import config from '../config.json';

// const config,apiAuthEndPoint

export async function login ( email, password ){
    const { data: jwt } = await Http.post( config.apiAuthEndPoint, { email, password });
    localStorage.setItem('token', jwt);
}
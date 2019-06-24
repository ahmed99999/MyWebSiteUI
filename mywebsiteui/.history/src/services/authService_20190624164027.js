import Http from './httpService';
import config from '../config.json';

// const config,apiAuthEndPoint

export function login ( email, password ){
    return Http.post( config.apiAuthEndPoint, {
        email,
        password
    });
}
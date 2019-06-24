import Http from './httpService';
import config from '../config.json';

export async function register ( user ){
    const newUser = await Http.post( config.apiUsersEndPoint, user );
    return newUser;
}
import axios from 'axios';
import { toast } from 'react-toastify';
import auth from './authService';
// axios.defaults.headers.common['x-auth-token'] = auth.getJwt();
import logService from './logService';

console.log( logService );
console.log( auth );

axios.interceptors.response.use( null, err =>{
    const expectedError = err.response && err.response.status >= 400 && err.response.status < 500;
    if ( ! expectedError ){
        console.log( 'SOMETHIMG UNXPECTED HAPPEND' );
        toast.error("An unexpected error occurred");
    }
    return Promise.reject( err );
});

export default {
    get     : axios.get,
    post    : axios.post,
    put     : axios.put,
    delete  : axios.delete
};
import axios from 'axios';
import { toast } from 'react-toastify';
import auth from './authService';

// axios.defaults.headers.common['x-auth-token'] = getJwt();

const authS = new auth();
console.log( authS );

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
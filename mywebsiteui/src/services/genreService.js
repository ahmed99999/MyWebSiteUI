import Http from './httpService';
import config from '../config.json';

export async function getGenres(){
    const allGenres = await Http.get( config.apiGengesEndPoint );
    return allGenres;
}
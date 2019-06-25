import Http from './httpService';
const apiGengesEndPoint = 'http://localhost:3900/api/genres';

export async function getGenres(){
    const allGenres = await Http.get( apiGengesEndPoint );
    return allGenres.data.filer( g => g);
}
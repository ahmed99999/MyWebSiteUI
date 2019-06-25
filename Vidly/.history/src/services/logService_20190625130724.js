import Http from './httpService';


function init(){
    console.log( Http );
}

function log( error ){
    console.error( error );
}

export default {
    init : init,
    log : log
}
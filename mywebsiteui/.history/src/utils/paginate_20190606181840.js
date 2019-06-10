

export function paginae (items, pageNumber, pageSiye){

    if (!Array.isArray(items)) throw new Error ('first argument in paginate must an Array(List)');
    if ( typeof pageNumber !== 'number' || typeof pageSiye !== 'number') throw new Error ('second and third aguments must be of type Numbers');

    return items.filter( ( items, index )=>{
        return Math.ceil(index / pageSiye) === pageNumber;
    });
}
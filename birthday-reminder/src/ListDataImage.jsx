 export function getImageUrl(person) {
    return(
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/' + 
        person.imageId + 
        '.jpg'
    );
}
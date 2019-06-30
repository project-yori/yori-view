
export default function getDummyPhoto(photoName) {

    photoData = localStorage.getItem(photoName);
    return JSON.parse(photoData);
    }
    
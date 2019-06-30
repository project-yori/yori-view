
export default function getDummyPhoto(photoName) {
    const photoData = localStorage.getItem(photoName);
    return JSON.parse(photoData);
}
    
export const editPhoto = (photos, photoToEdit) => {
  const restPhotos = photos.filter(
    photo =>
      photo.photo_member !== photoToEdit.photo_member ||
      photo.photo_costume !== photoToEdit.photo_costume ||
      photo.photo_type !== photoToEdit.photo_type
  );
  const payload = [...restPhotos];
  const insOfPhotoToEdit = photos.find(
    photo =>
      photo.photo_member === photoToEdit.photo_member &&
      photo.photo_costume === photoToEdit.photo_costume &&
      photo.photo_type === photoToEdit.photo_type
  );
  const update_time = new Date().getTime();
  for (let i = 0; i < photoToEdit.photo_number; i++) {
    payload.push({ ...insOfPhotoToEdit, photo_update_time: update_time });
  }
  return [...payload];
};

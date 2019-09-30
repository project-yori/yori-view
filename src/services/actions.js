import "whatwg-fetch";
import { END_POINTS, ACTION_TYPES } from "./types";
import { isProduction } from "./utils";

// TODO: Make this configurable and automatically switch between local and production environment
const API_HOST = isProduction()
  ? "https://yori-server.appspot.com"
  : `http://${process.env.HOST || "localhost"}:5000`;

export const getPhotos = () => dispatch => {
  // const headers = new Headers();
  // headers.append("Access-Control-Allow-Origin", API_HOST);

  // return new Promise((resolve, reject) => {
  //   window
  //     .fetch(`${API_HOST}${END_POINTS.PHOTO}`, {
  //       mode: "cors",
  //       cache: "no-cache",
  //       headers: headers
  //     })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       console.warn(`${res.statusText} from ${API_HOST}${END_POINTS.PHOTO}`);
  //       return;
  //     })
  //     .then(data => {
  //       dispatch({
  //         type: ACTION_TYPES.GET_PHOTOS,
  //         data
  //       });
  //       resolve(data);
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
  const photos = JSON.parse(localStorage.getItem("yori-photo"));
  if (photos !== null) {
    dispatch({
      type: ACTION_TYPES.GET_PHOTOS,
      data: photos
    });
  }
};

export const createPhotosGroup = group => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_GROUP,
    data: group
  });
};

export const createPhotosCostume = costume => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_COSTUME,
    data: costume
  });
};

export const createPhotosAddMember = member => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_ADD_MEMBER,
    data: member
  });
};

export const createPhotosDelMember = member => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_DEL_MEMBER,
    data: member
  });
};

export const createPhotoTypeNum = (member, type, number) => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_TYPE_NUMBER,
    data: { photo_member: member, photo_type: type, photo_number: number }
  });
};

export const createPhotoInstance = photos => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_INSTANCE,
    data: photos
  });
};

export const createClear = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_CLEAR,
    data: null
  });
};

export const displayPhotoModal = (member, costume, type) => dispatch => {
  dispatch({
    type: ACTION_TYPES.DISPLAY_PHOTO_MODAL,
    data: { photo_member: member, photo_costume: costume, photo_type: type }
  });
};

export const hidePhotoModal = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.HIDE_PHOTO_MODAL,
    data: null
  });
};

export const editPhotoNumber = photoToEdit => dispatch => {
  dispatch({
    type: ACTION_TYPES.EDIT_PHOTO_NUMBER,
    data: photoToEdit
  });
};

export const changeSortType = sortType => dispatch => {
  dispatch({
    type: ACTION_TYPES.CHANGE_SORT_TYPE,
    data: sortType
  });
};

export const searchPhoto = keywordSearch => dispatch => {
  dispatch({
    type: ACTION_TYPES.SEARCH_PHOTO,
    data: keywordSearch
  });
};

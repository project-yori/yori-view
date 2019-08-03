import "whatwg-fetch";
import { END_POINTS, ACTION_TYPES } from "./types";
import { isProduction } from "./utils";

// TODO: Make this configurable and automatically switch between local and production environment
const API_HOST = isProduction()
  ? "https://yori-server.appspot.com"
  : `http://${process.env.HOST || "localhost"}:5000`;

export const getPhotos = () => dispatch => {
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", API_HOST);

  return new Promise((resolve, reject) => {
    window
      .fetch(`${API_HOST}${END_POINTS.PHOTO}`, {
        mode: "cors",
        cache: "no-cache",
        headers: headers
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(data => {
        dispatch({
          type: ACTION_TYPES.GET_PHOTOS,
          data
        });
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
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

export const createPhotoTypeSelMemType = (member, type) => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_TYPE_CURR_SELECTED_MEM_TYPE,
    data: { member: member, type: type }
  });
};

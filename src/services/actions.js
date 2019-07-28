import 'whatwg-fetch';
import { END_POINTS, ACTION_TYPES } from './types';
import { isProduction } from './utils';

// TODO: Make this configurable and automatically switch between local and production environment
const API_HOST = isProduction()
  ? 'https://yori-server.appspot.com'
  : `http://${process.env.HOST || 'localhost'}:5000`;

export const getPhotos = () => dispatch => {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', API_HOST);

  return new Promise((resolve, reject) => {
    window
      .fetch(`${API_HOST}${END_POINTS.PHOTO}`, {
        mode: 'cors',
        cache: 'no-cache',
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

export const createPhotosGroup = (group) => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_GROUP,
    data: group
  });
};

export const createPhotosCostume = (costume) => dispatch => {
  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_COSTUME,
    data: costume
  })
};

export const createPhotosMember =  (members) => dispatch => {
  const memberData = members.map((member) => {
    return {

    }
  });

  dispatch({
    type: ACTION_TYPES.CREATE_PHOTO_MEMBER,
    memberData
  });
};

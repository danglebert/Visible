import { SET_MEDIA, SELECT_MEDIA } from './actionTypes';
import axios from 'axios';

const getMedia = media => ({
  type: SET_MEDIA,
  payload: media
});

const selectMedia = media => ({
  type: SELECT_MEDIA,
  payload: media
});

export const fetchMedia = query => async dispatch => {
  const { data: media } = await axios.get();
  dispatch(getMedia(media));
};

export const selectMedia = query => async dispatch => {
  const { data: media } = await axios.get();
  dispatch(selectMedia(media));
};

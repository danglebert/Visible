import { SET_MEDIA, SELECT_MEDIA, SELECT_COUNTRY } from './actionTypes';
import axios from 'axios';
import { rapidKey } from '../../../secrets';
import { strToQuery } from '../../util';

const getMedia = media => ({
  type: SET_MEDIA,
  payload: media
});

export const selectMedia = media => ({
  type: SELECT_MEDIA,
  payload: media
});

export const selectCountry = country => ({
  type: SELECT_COUNTRY,
  payload: country
});

export const fetchMedia = (query, country) => async dispatch => {
  const filteredQuery = strToQuery(query);
  const { data: media } = await axios.get(
    `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${filteredQuery}&country=${country}`,
    {
      headers: {
        'X-RapidAPI-Host':
          'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'X-RapidAPI-Key': rapidKey
      }
    }
  );
  dispatch(getMedia(media.results));
};

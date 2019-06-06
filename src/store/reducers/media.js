import {
  SELECT_MEDIA,
  SET_MEDIA,
  SELECT_COUNTRY
} from '../actions/actionTypes';

const initialState = {
  media: [],
  selectedMedia: '',
  country: 'us'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, media: action.payload };
    case SELECT_MEDIA:
      return { ...state, selectedMedia: action.payload };
    case SELECT_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default reducer;

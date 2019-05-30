import { SELECT_MEDIA, SET_MEDIA } from '../actions/actionTypes';

const initialState = {
  media: [],
  selectedMedia: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDIA:
      return { ...state, media: action.payload };
    case SELECT_MEDIA:
      return { ...state, selectedMedia: action.payload };
    default:
      return state;
  }
};

export default reducer;

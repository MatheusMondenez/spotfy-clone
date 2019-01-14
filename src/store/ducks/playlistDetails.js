export const Types = {
  GET_REQUEST: "playlistDetails/GET_REQUEST",
  GET_SUCCESS: "playlistDetails/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: {
    "id": 0,
    "title": "Papercut",
    "author": "Linkin Park",
    "album": "Hybrid Theory",
    "file": "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3",
    "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    "playlistId": 1
  },
  loading: false
};

export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),
  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};

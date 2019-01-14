export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_SUCCESS: "playlists/GET_SUCCESS"
};

const INITIAL_STATE = {
  data: [
    {
      "id": 1,
      "title": "Saudade das antigas",
      "description": "Músicas antigas que vão te lembrar dos melhores momentos.",
      "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg"
    },
    {
      "id": 2,
      "title": "In Too Deep",
      "description": "As melhores músicas do POP clássico em uma única playlist.",
      "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg"
    },
    {
      "id": 3,
      "title": "Salad Days",
      "description": "Animar seu dia nunca foi tão fácil, ouça essas músicas e tenha um dia mais feliz!",
      "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg"
    },
    {
      "id": 4,
      "title": "Só elas",
      "description": "As melhores cantoras POP reunidas em uma playlist pra você.",
      "thumbnail": "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg"
    }
  ],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
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
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  })
};

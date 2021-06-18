import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEM_LOADING } from './../actions/type';

let initalState = {
  items: [],
  loading: false,
}

function itemReducer(state = initalState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(el => el._id !== action.payload)
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
}

export default itemReducer
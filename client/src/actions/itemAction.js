import { DELETE_ITEM, ADD_ITEM, GET_ITEMS, ITEM_LOADING } from './type';

import axios from 'axios'

export const getItems = () => {
  return function(dispatch) {
    dispatch(itemLoading());
    axios.get('/api/items')
    .then(response => {
      const items = response.data;
      dispatch({
        type: GET_ITEMS,
        payload: items
      });
    })
  }
}

export const addItem = (title) => {
  return function(dispatch) {
    dispatch(itemLoading());
    axios.post('/api/items/add', {title}).then(response => {
      console.log(response.data);
      dispatch({
        type: ADD_ITEM,
        payload: response.data
      })
    })
  }
}

export const deleteItem = (id) => {
  return function(dispatch) {
    dispatch(itemLoading());
    axios.delete(`/api/items/${id}`).then(response => {
      console.log(response);
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    })
  }
}

export const itemLoading = () => {
  return {
    type: ITEM_LOADING
  }
}
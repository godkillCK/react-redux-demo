import * as types from '../constants/ActionTypes';

const addItem = function addItem(text) {
  return {
    type: types.ADD_ITEM,
    text
  }
};

const updateItem = function updateItem(data) {
  return {
    type: types.UPDATE_ITEM,
    data
  }
};

const deleteItem = function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id
  }
};

const updateItems = function updateItems(data) {
  return {
    type: types.UPDATE_ITEMS,
    data
  }
};

const deleteItems = function deleteItems(query) {
  return {
    type: types.DELETE_ITEMS,
    query
  }
};

const activeFilter = function activeFilter(action) {
  return {
    type: types.FILTER_ITEMS,
    active: action
  }
};

export {addItem, updateItem, deleteItem, updateItems, deleteItems, activeFilter};

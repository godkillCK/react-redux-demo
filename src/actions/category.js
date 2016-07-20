import * as types from '../constants/CategoryTypes';

const addCategory = function addCategory(name) {
  return {
    type: types.ADD_CATEGORY,
    name
  }
};

export {addCategory};

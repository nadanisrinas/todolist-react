import { ADD_TODO } from "./actionTypes";

const initialState = {
  dataTodo: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { data } = action.payload;
      return [...state, data];
      break;

    default:
      return state;
  }
};

export default dataReducer;

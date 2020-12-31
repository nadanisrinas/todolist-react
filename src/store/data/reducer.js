import { ADD_TODO, EDIT_TODO } from "./actionTypes";
const initialState = {
  dataTodo: [],
};
const dataReducer = (state = initialState, action) => {
  console.log("action.payload", action.payload);
  switch (action.type) {
    case ADD_TODO:
      state = {
        ...state,
        dataTodo: [...state.dataTodo, action.payload.todos].flat(),
      };
      break;

    case EDIT_TODO:
      let dataEdit;
      state.dataTodo.map((todo) => (todo.id !== action.payload.todos.id ? (dataEdit = [action.payload.todos]) : (dataEdit = [])));
      state = {
        ...state,
        dataTodo: state.dataTodo.filter((data) => dataEdit.id !== data.id).concat(dataEdit),
      };
      break;

    default:
      return state;
  }
  return state;
};

export default dataReducer;

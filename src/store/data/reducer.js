import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actionTypes";
const initialState = {
  dataTodo: [],
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = {
        ...state,
        dataTodo: [...state.dataTodo, action.payload.todos].flat(),
      };
      break;

    case EDIT_TODO:
      let dataEdit = state.dataTodo.map((todo) => (todo.id == action.payload.todos.id ? action.payload.todos : todo));
      state = {
        ...state,
        dataTodo: dataEdit,
      };
      break;

    case DELETE_TODO:
      let dataDelete = state.dataTodo.filter((todo) => todo.id !== action.payload.todos.id && todo);
      state = {
        ...state,
        dataTodo: dataDelete,
      };
      break;

    default:
      return state;
  }
  return state;
};

export default dataReducer;

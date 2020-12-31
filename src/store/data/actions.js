import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actionTypes";
import axios from "axios";

let nextTodoId = 0;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//add item data todo
export const addDataTodo = (todos) => {
  return {
    type: ADD_TODO,
    payload: {
      todos,
    },
  };
};
//edit item data todo
export const editDataTodo = (todos) => {
  return {
    type: EDIT_TODO,
    payload: {
      todos,
    },
  };
};
//delete item data todo
export const deleteDataTodo = (todos) => {
  return {
    type: DELETE_TODO,
    payload: {
      todos,
    },
  };
};

export const getInitialTodo = () => {
  return async (dispatch) => {
    try {
      let posts = await axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list");
      dispatch(addDataTodo(posts.data));
    } catch (e) {
      console.log(e);
    }
  };
};

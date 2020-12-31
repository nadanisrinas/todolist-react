import { ADD_TODO } from "./actionTypes";

let nextTodoId = 0;
//add item data todo
export const addDataTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: 1,
      title: data.title,
      description: data.desc,
      status: data.status,
      createdAt: data.dateCreated,
    },
  };
};

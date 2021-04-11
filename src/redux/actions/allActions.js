import {
    FETCH_TASKS,
    ADD_TASKS,
    UPDATE_TASKS,
    DELETE_TASKS
} from '../types';

export const fetchAllTasks = () =>({
    type: FETCH_TASKS,
    payload: '',
  });

export const addTasks = (data) =>({ 
    type: ADD_TASKS,
    payload: data,
  });

export const editTasks = (data) =>({
    type: UPDATE_TASKS,
    payload: data,
  });

export const deleteTasks = (data) =>({
    type: DELETE_TASKS,
    payload: data,
  });
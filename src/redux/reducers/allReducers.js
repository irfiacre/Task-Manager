import {
  FETCH_TASKS,
  ADD_TASKS,
  UPDATE_TASKS,
  DELETE_TASKS
} from '../types';

const initialState = {
  loading: false,
  data: [{id:'1', text:"Hello" }],
  error: null,
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        data: state.data,
      };
      
    case ADD_TASKS:
    
       return {
         ...state,
         data: state.data.concat(action.payload),
       };
    case UPDATE_TASKS:
    
      return {
        ...state,
        data: state.data.map((elt, index) => {
            if (elt.id === action.payload.id) {
              return{
                id: elt.id,
                text: state.data[index] = action.payload.text,
              };
            }
          }),
      };
    case DELETE_TASKS:
      return {
        ...state,
        data: state.data.filter(elt => elt.id !== action.payload.id),
      };
    default:
      return state;
  }
};

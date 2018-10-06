import {
  CREATE_TASK,
  SET_ACTIVE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from './actions';

const ACTION_HANDLERS = {
  [CREATE_TASK]: (state) => {
    const id = Date.now();

    const task = {
      id,
      task: '',
      isCompleted: false,
    };

    return {
      list: {
        [task.id]: task,
        ...state.list,
      },
      activeTask: task.id,
    };
  },

  [SET_ACTIVE_TASK]: (state, action) => {
    return {
      ...state,
      activeTask: action.payload,
    };
  },

  [COMPLETE_TASK]: (state, action) => {
    const taskId = action.payload;

    const newList = {
      ...state.list,
    };

    if (newList[taskId]) {
      delete newList[taskId];
    }

    return {
      ...state,
      list: newList,
    };
  },

  [EDIT_TASK]: (state, action) => {
    const { taskId, value } = action.payload;
    const task = state.list[taskId];

    if (task) {
      const newTask = {
        ...task,
        task: value,
      };

      const newList = {
        ...state.list,
        [newTask.id]: newTask,
      };

      return {
        ...state,
        list: newList,
      };
    } else {
      return state;
    }
  },
};

const initialState = {
  list: {},
  activeTask: null,
};

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

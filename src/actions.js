export const CREATE_TASK = 'CREATE_TASK';
export const SET_ACTIVE_TASK = 'SET_ACTIVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export function createTask() {
  return {
    type: CREATE_TASK,
  };
}

export function setActiveTask(taskId) {
  return {
    type: SET_ACTIVE_TASK,
    payload: taskId,
  };
}

export function completeTask(taskId) {
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
}

export function editTask(taskId, value) {
  return {
    type: EDIT_TASK,
    payload: {
      taskId,
      value,
    },
  };
}

export default {
  createTask,
  setActiveTask,
  completeTask,
  editTask,
};

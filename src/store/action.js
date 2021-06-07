export const setTasks = payload => {
  return { type: 'task/setTask', payload }
}

export const deleteTask = payload => {
  return { type: 'task/deleteTask', payload }
}

export const updateTaskStatus = payload => {
  return { type: 'task/updateStatusTask', payload }
}

export const setUser = payload => {
  return { type: 'currentUser/setCurrentUser', payload }
}

export const clearCompletedTask = payload => {
  return { type: 'task/clearCompletedTask', payload }
}

export const resetState = payload => {
  return { type: 'state/setState', payload }
}
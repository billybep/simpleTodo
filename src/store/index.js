import { createStore } from 'redux'

const initialState = {
  currentUser: {},
  tasks : []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'task/setTask':
      return { ...state, tasks: [ ...state.tasks, { ...payload } ] }
    case 'task/deleteTask':
      return { ...state, tasks: [ ...payload ] }
    case 'task/updateStatusTask':
      return { ...state, tasks: [ ...payload ] }
    case 'currentUser/setCurrentUser':
      return { ...state, currentUser:  { ...payload }}
    case 'task/clearCompletedTask':
      return { ...state, tasks: [ ...payload ] }
    case 'state/setState':
      return { ...state, currentUser: { ...payload.currentUser }, tasks: [ ...payload.tasks ] }
    default:
      return state
  }
}

const store =  createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
import { createStore } from 'redux';
// initial state
const initialState = {
  loading: false,
  projects: [],
  msg: ''
}
// Actions
const projectRequestStart = 'PROJECT_REQUEST_START'
const projectRequestSuccess = 'PROJECT_REQUEST_SUCCESS'
const projectRequestFail = 'PROJECT_REQUEST_FAIL'
// Actions generators
export const requestStart = () => {
  return {
    type: projectRequestStart
  }
}

export const requestSuccess = (data) => {
  return {
    type: projectRequestSuccess,
    payload: data
  }
}

export const requestFail = (error) => {
  return {
    type: projectRequestFail,
    payload: error
  }
}

// const projectRequestSuccess = 'PROJECT_REQUEST_SUCCESS'
// reducer needs state and action
const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case projectRequestStart:
      return {
        ...state,
        loading: true
      }
    case projectRequestSuccess:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, ...action.payload ],
        msg: ''
      }
    case projectRequestFail:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}
// create store needs the reducer
export let store = createStore(projectsReducer)
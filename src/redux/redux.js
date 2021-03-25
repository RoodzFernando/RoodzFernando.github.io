// import { createStore } from 'redux';
// initial state
// const initialState = {
//   loading: false,
//   projects: [],
//   msg: ''
// }
// Actions
// const projectRequestStart = 'PROJECT_REQUEST_START'
// const projectRequestSuccess = 'PROJECT_REQUEST_SUCCESS'
// const projectRequestFail = 'PROJECT_REQUEST_FAIL'
// const projectDelete = 'DELETE_PROJECT'
// Actions generators
/*
export const requestStart = () => {
  return {
    type: projectRequestStart
  }
}

export const requestSuccess = data => {
  return {
    type: projectRequestSuccess,
    payload: data,
  }
}

export const requestFail = (error) => {
  return {
    type: projectRequestFail,
    payload: error
  }
}

export const deleteProject = msg => {
  return {
    type: projectDelete,
    payload: msg
  }
}


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
    case projectDelete:
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state
  }
}
*/
// create store needs the reducer
// export let store = createStore(projectsReducer)
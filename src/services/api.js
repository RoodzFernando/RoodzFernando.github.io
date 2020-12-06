import { requestStart, requestSuccess, requestFail, store } from '../redux/redux';


// Fetch the projects
export const getProjects = () => {
    fetch('http://localhost:3001/projects').then(
      response => {
        store.dispatch(requestStart())
        response.json()
      }).then(data => {
        store.dispatch(requestSuccess(data))
      })
}
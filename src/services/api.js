import axios from 'axios';
import { requestStart, requestSuccess, requestFail, store } from '../redux/redux';


// Fetch the projects
export const getProjects = () => {
    axios.get('http://localhost:3001/projects').then(
      response => {
        store.dispatch(requestStart())
        return response
      }).then(data => {
        store.dispatch(requestSuccess(data.data.projects))
      })
}
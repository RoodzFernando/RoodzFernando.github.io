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

// Login User
export const loginUser = ({ username, password, history }) => {
  axios.post('http://localhost:3001/login', {
    username,
    password
  }).then(response => {
    localStorage.setItem('token', response.data.token)
    history.push('/dashboard')
  }).catch(err => {
    if (err.response) {
      store.dispatch(requestFail(err.response.data.message))
    }
  })
}
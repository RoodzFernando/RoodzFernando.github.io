import axios from 'axios';
import {
  requestStart,
  requestSuccess,
  requestFail,
  deleteProject,
  store
} from '../redux/redux';

const BASE_URL = 'http://localhost:3001'
// Fetch the projects
export const getProjects = () => {
  axios.get(`${BASE_URL}/projects`).then(
    response => {
      store.dispatch(requestStart())
      return response
    }).then(responseData => {
      // console.log(responseData.data);
    store.dispatch(requestSuccess(responseData.data))
    // setProjects((responseData.data))
    // store.dispatch(requestSuccess())
  })
}

// Login User
export const loginUser = ({
  username,
  password,
  history
}) => {
  axios.post(`${BASE_URL}/login`, {
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

// Create new Project

export const createNewProject = (projectData, headers, history) => {
  // console.log(projectData.image.files[0])
  const { title, description, live_version, source_code } = projectData
  const { files } = projectData.image

  const project = new FormData()
  // append the title
  project.append('title', title)

  // append the description
  project.append('description', description)
  
  // append the live_version
  project.append('live_version', live_version)
  
  // append the source_code
  project.append('source_code', source_code)
  
  // append the image
  project.append('image', files[0])



  // Object.keys(projectData).forEach((key, value) => {
  //     project.append(key, projectData[key])
  // });

  axios.post(`${BASE_URL}/projects`, project, {headers,})
    .then(response => {
      console.log(response)
      history.push('/dashboard')
    })
}

// delete a project

export const projectDeletion = id => {
  axios.delete(`${BASE_URL}/projects/${id}`)
  .then(response => {
    store.dispatch(deleteProject(response.data.message))
  })
}

// update a project

export const projectUpdate = (projectData, headers, id) => {
  const project = new FormData()
  const { title, description, live_version, source_code } = projectData
  const { files } = projectData.image

  project.append('title', title)

  // append the description
  project.append('description', description)
  
  // append the live_version
  project.append('live_version', live_version)
  
  // append the source_code
  project.append('source_code', source_code)
  
  // append the image
  project.append('image', files[0])

  axios.put(`${BASE_URL}/projects/${id}`, project, {headers})
  .then(response => console.log(response))
}

// fetch a single project

export const fetchproject = (id, setProject) => {
  axios.get(`${BASE_URL}/projects/${id}`)
  .then(response => {
    setProject(response.data.data)
    })
}
import axios from 'axios';
import {
  requestStart,
  requestSuccess,
  requestFail,
  store
} from '../redux/redux';


// Fetch the projects
export const getProjects = () => {
  axios.get('http://localhost:3001/projects').then(
    response => {
      store.dispatch(requestStart())
      return response
    }).then(responseData => {
      // console.log(responseData.data);
    store.dispatch(requestSuccess(responseData.data))
    // store.dispatch(requestSuccess())
  })
}

// Login User
export const loginUser = ({
  username,
  password,
  history
}) => {
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

// Create new Project

export const createNewProject = (projectData, headers) => {
  // console.log(projectData.image.files[0])
  const { title, description, live_version, source_code } = projectData
  const { files } = projectData.image
  
  // const imageLoader = new FormData()
  // imageLoader.append("image", files[0])

  // console.log(projectData)

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

  axios.post('http://localhost:3001/projects', project, {headers,})
    .then(response => {
      console.log(response)
    })
}
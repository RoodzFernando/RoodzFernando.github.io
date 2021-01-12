import axios from 'axios';
import {
  requestStart,
  requestFail,
  deleteProject,
  store
} from '../redux/redux';

// const BASE_URL = 'http://localhost:3001'
const BASE_URL = 'https://api-frf-portfolio.herokuapp.com'
// Fetch the projects
export const getProjects = (setProjects) => {
  axios.get(`${BASE_URL}/projects`).then(
    response => {
      store.dispatch(requestStart())
      return response
    }).then(responseData => {
    setProjects((responseData.data))
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

const arrayToHash = (arr, id) => {
  const elements = [];
  arr.map(item => (elements.push({'tag': item, project_id: id})));
  const tagElements = {
      technology: elements
  }
  return tagElements;
}

export const createNewProject = (projectData, headers, history, tags) => {
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
  
  axios.post(`${BASE_URL}/projects`, project, {headers,})
    .then(response => {
      const projectId = response.data.data.id
      const projElements = arrayToHash(tags, projectId)
        axios.post(`${BASE_URL}/technologies`, projElements)
      .then(answer => {
        history.push('/dashboard')
      })
    }).catch(err => console.log(err))
}

// delete a project

export const projectDeletion = id => {
  axios.delete(`${BASE_URL}/projects/${id}`)
  .then(response => {
    store.dispatch(deleteProject(response.data.message))
  })
}

// update a project

export const projectUpdate = (projectData, headers, id, history) => {
  const project = new FormData()

  Object.keys(projectData).forEach((key, value) => {
    if (key === 'image') {
      project.append('image',projectData['image'].files[0])
    }else {
      project.append(key, projectData[key])
    }
  });
  console.log(projectData['tags'])
  axios.put(`${BASE_URL}/projects/${id}`, project, {headers})
  .then(response => {
    history.push('/dashboard')
  })
}

// fetch a single project

export const fetchproject = (id, setProject) => {
  axios.get(`${BASE_URL}/projects/${id}`)
  .then(response => {
    const tagValue = []
response.data.data.tags.map(tag =>(tagValue.push(tag.tag)))
    setProject({
      ...response.data.data,
      tags: tagValue.join(',')
    })
    })
}
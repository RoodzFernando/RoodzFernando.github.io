import React, { useState } from 'react'
import { createNewProject } from '../services/api'
import Form from './Form'

function ProjectCreate({ history }) {
  const [projetInfo, setProjectInfo] = useState({
    title: '',
    description: '',
    live_version: '',
    source_code: '',
    image: {}
  })
  const handleChange = event => {
    const { name, value, files } = event.target
      setProjectInfo({
        ...projetInfo,
        [name]: value,
        image: { ...projetInfo.image , files}
      })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const headers = {
    Authorization: `Bearer ${token}`,
  };
    createNewProject(projetInfo, headers, history)
    // console.log(projetInfo)
  }
  return (
    <div className="new-project">
      <h1>Add a new Project</h1>
      <Form text='Save' handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default ProjectCreate

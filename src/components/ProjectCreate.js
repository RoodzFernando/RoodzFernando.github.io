import React, { useState } from 'react'
import { createNewProject } from '../services/api'

function ProjectCreate() {
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
    createNewProject(projetInfo, headers)
    // console.log(projetInfo)
  }
  return (
    <div className="new-project">
      <form encType="multipart/form-data" method="post">
      <h1>Add a new Project</h1>
        <input type="text" name="title" onChange={handleChange} placeholder="Title"/>
        <textarea name="description" onChange={handleChange} id="" cols="30" rows="10" placeholder="Description"></textarea>
        <input type="text" onChange={handleChange} name="live_version" placeholder="Live Version"/>
        <input type="text" onChange={handleChange} name="source_code" placeholder="Source Code"/>
        <input type="file" name="image" onChange={handleChange} accept="image/png, image/jpeg"/>
        <input type="submit" onClick={handleSubmit} value="Save"/>
      </form>
    </div>
  )
}

export default ProjectCreate

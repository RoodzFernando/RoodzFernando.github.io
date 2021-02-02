import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import { projectUpdate, fetchproject } from '../services/api'

function ProjectUpdate({ history, match }) {
  const { id } = match.params
   const [project, setProject] = useState({
    title: '',
    description: '',
    live_version: '',
    source_code: '',
    image: {},
    tags: '',
  })

  useEffect(() => {
    fetchproject(id, setProject)
  }, [id])

  const handleChange = event => {
    const { name, value, files } = event.target
      setProject({
        ...project,
        [name]: value,
        image: { files },
      })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const headers = {
    Authorization: `Bearer ${token}`,
  };
  projectUpdate(project, headers, id, history)
}

  return (
    <div className="update-page">
      <h1>Update Project</h1>
      <Form
        title={project.title}
        description={project.description}
        live_version={project.live_version}
        source_code={project.source_code}
        tags={project.tags}
        text='Update'
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  )
}

export default ProjectUpdate

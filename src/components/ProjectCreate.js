import React from 'react'

function ProjectCreate() {
  return (
    <div className="new-project">
      <form>
      <h1>Add a new Project</h1>
        <input type="text" name="title" placeholder="Title"/>
        <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
        <input type="text" name="live_version" placeholder="Live Version"/>
        <input type="text" name="source_code" placeholder="Source Code"/>
        <input type="submit" value="Save"/>
      </form>
    </div>
  )
}

export default ProjectCreate

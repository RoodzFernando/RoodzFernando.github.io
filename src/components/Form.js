import React from 'react'

function Form({handleChange, handleSubmit}) {
  return (
    <div className="form">
      <form>
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

export default Form

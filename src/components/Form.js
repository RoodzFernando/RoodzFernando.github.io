import React from 'react'

function Form(
  {
    handleChange, 
    handleSubmit, 
    text, 
    title,
    description,
    live_version,
    source_code
  }
) {
  return (
    <div className="form">
      <form>
        <input type="text" name="title" onChange={handleChange} placeholder="Title" value={ title } />
        <textarea name="description" onChange={handleChange} id="" cols="30" rows="10" placeholder="Description" value={ description }></textarea>
        <input type="text" onChange={handleChange} name="live_version" placeholder="Live Version" value = { live_version } />
        <input type="text" onChange={handleChange} name="source_code" placeholder="Source Code" value ={ source_code } />
        <input type="text" placeholder="tags" name="tags" onChange={handleChange}/>
        <input type="file" name="image" onChange={handleChange} accept="image/png, image/jpeg" required/>
        <input type="submit" onClick={handleSubmit} value={ text } />
      </form>
    </div>
  )
}

export default Form

import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='/new-project'>New Project</Link>
    </div>
  )
}

export default Dashboard
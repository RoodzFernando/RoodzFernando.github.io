import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../services/api'

function Login(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const changehandle = (event) => {
    const { name, value} = event.target
    setCredentials({
      ...credentials,
      [name]: value,
      history: props.history
    })
  }

  const handleClick = (event) => {
    event.preventDefault()
    loginUser(credentials)
  }
    return (
        <div className="login-page">
            <form>
                <h2>Login</h2>
            <div className="error-msg">
              <span>{props.message}</span>
            </div>
                <input type="text" placeholder="Username" name="username"  onChange={changehandle} />
                <input type="password" placeholder="Password" name="password" onChange={changehandle}/>
                <input type="submit" value="Login" onClick={handleClick} />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    message: state.msg
  }
}

export default connect(mapStateToProps)(Login)

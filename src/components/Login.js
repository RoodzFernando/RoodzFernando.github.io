import React from 'react'

function Login() {
    return (
        <div className="login-page">
            <form>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact';
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import ProjectCreate from '../components/ProjectCreate'
import ProjectUpdate from '../components/ProjectUpdate'

function AppRoutes() {
    return (
        <div className="app-routes">
            <Router>
                <App />
                <About />
                <Contact />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/new-project" component={ProjectCreate} />
                    <Route path="/update/:id" component={ProjectUpdate} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default AppRoutes

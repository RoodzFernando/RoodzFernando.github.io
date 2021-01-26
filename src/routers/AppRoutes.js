import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact';
import Navigation from '../components/Navigation'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import ProjectCreate from '../components/ProjectCreate'
import ProjectUpdate from '../components/ProjectUpdate'
import Skills from '../components/Skills'

function AppRoutes() {
    return (
        <div className="app-routes">
            <Router>
                <Navigation />
                <App />
                <Projects />
                <About />
                <Skills />
                <Contact />
                <Switch>
                    {/* <Route path="/" component={App} exact={true} /> */}
                    <Route path="/about" component={About} />
                    {/* <Route path="/projects" component={Projects} /> */}
                    {/* <Route path="/contact" component={Contact} /> */}
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

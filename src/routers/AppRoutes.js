import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import AsidePage from '../components/AsidePage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact';
import AsideNav from '../components/AsideNav'
import Login from '../components/Login'

function AppRoutes() {
    return (
        <div className="app-routes">
            <Router>
                <AsidePage />
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                </Switch>
                <AsideNav />
            </Router>
        </div>
    )
}

export default AppRoutes

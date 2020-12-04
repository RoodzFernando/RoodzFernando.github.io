import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import AsidePage from '../components/AsidePage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact';
import AsideNav from '../components/AsideNav'

function AppRoutes() {
    return (
        <div>
            <Router>
                <AsidePage />
                <Switch>
                    <Route path="/" component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <AsideNav />
            </Router>
        </div>
    )
}

export default AppRoutes

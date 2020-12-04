import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../components/App'
import AsidePage from '../components/AsidePage'

function AppRoutes() {
    return (
        <Router>
            <AsidePage />
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    )
}

export default AppRoutes

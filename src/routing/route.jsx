import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Layout from '../layout/layout'
import Home from '../home'
import About from '../about'
import Page404 from '../404'

const Route = () => (
  <Router>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout path="/about" component={About} />
      <Layout path="/404" component={Page404} />
      <Redirect to="/404" />
    </Switch>
  </Router>
)
export default Route


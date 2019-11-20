import { Waypoint } from 'react-waypoint'
import Helmet from 'react-helmet'
import React from 'react'

import AboutUs from '../components/AboutUs'
import Coaching from '../components/Coaching'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Quote from '../components/Quote'
import Testimonials from '../components/Testimonials'
import Workshops from '../components/Workshops'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Goldline Negotiations" />
        <Header />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <div id="main">
          <AboutUs />
          <Workshops />
          <Coaching />
          <Testimonials />
          <Quote />
        </div>
      </Layout>
    )
  }
}

export default Index

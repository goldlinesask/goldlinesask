import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Goldline Negotiations</h1>
    <p>Salary Negotiation Workshops & Coaching for Software Engineers</p>
  </header>
)

export default Header

import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="who-we-are">
          <a href="#">Who We Are</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="workshops">
          <a href="#">Workshops</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="coaching">
          <a href="#">Coaching</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="testimonials">
          <a href="#">Testimonials</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="request">
          <a href="#">Request a Quote</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav

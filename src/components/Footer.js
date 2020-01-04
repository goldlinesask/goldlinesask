import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>"Negotiate hard and know your worth."</h2>
      <p>
        - Michelle Obama, <i>Becoming</i>
      </p>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:goldlinesask@gmail.com">goldlinesask@gmail.com</a>
        </dd>
        <dt>LinkedIn</dt>
        <dd>
          <a href="https://www.linkedin.com/in/gandrade/" target="_blank">
            Gaby Andrade
          </a>
          ,&nbsp;
          <a href="https://www.linkedin.com/in/thesselgrave/" target="_blank">
            Taylor Hesselgrave
          </a>
        </dd>
      </dl>
    </section>
  </footer>
)

export default Footer

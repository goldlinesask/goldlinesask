import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>"I increased my salary by 38%!"</h2>
      <p>
        "Taylor & Gaby were harder on me than the actual recruiter, so by the
        time I had the conversation I was so nervous about, I was so ready." -
        Yanare Ku, Software Engineer at MailChimp
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
        </dd>
        <dd>
          <a href="https://www.linkedin.com/in/thesselgrave/" target="_blank">
            Taylor Hesselgrave
          </a>
        </dd>
      </dl>
    </section>
  </footer>
)

export default Footer

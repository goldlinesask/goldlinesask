import { Link } from 'gatsby'
import React from 'react'

const Testimonials = props => (
  <section id="testimonials" className="main special">
    <header className="major">
      <h2>Testimonials</h2>
    </header>
    <ul className="features">
      <li>
        <span className="icon major style1 fa-code"></span>
        <h3>Why Its Important, Even If You're Not Successful</h3>
        <p>
          We help engineers understand why its important to negotiate
          their offers whether or not they end up increasing their
          initial offer. We illustrating the compounding effects that
          negotiating early on in your career can have on your lifetime
          earnings, and review what other benefits can come of
          negotiating.
        </p>
      </li>
      <li>
        <span className="icon major style3 fa-copy"></span>
        <h3>How to Assess Your Offer </h3>
        <p>
          Two offers can offer the same salary but but wildly different
          in terms of total compensation. We help engineers understand
          the different components of an offer and come up with an ask
          that is beneficial to their unique situation.
        </p>
      </li>
      <li>
        <span className="icon major style5 fa-diamond"></span>
        <h3>Stragies for Negotiating</h3>
        <p>
          We equip engineers with strategies for how to approach every
          step of the negotiation process, which can start before any
          formal "negotation" conversations begin.
        </p>
      </li>
    </ul>
    <footer className="major">
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </footer>
  </section>
)

export default Testimonials

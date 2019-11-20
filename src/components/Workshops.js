import { Link } from 'gatsby'
import React from 'react'

const Header = props => (
  <section id="workshops" className="main special">
    <header className="major">
      <h2>Workshop Structure</h2>
    </header>
    <ul className="features">
      <li>
        <span className="icon major style1 fa-code"></span>
        <h3>Tailored to your audience</h3>
        <p>
        We specialize in negotiation coaching for women, members of underrepresented 
        groups, self taught engineers, and bootcamp graduates. However, our workshops 
        are relevant to all and are specifically tailored to the audience they are for.
        </p>
      </li>
      <li>
        <span className="icon major style3 fa-copy"></span>
        <h3>Strategies</h3>
        <p>
        We give attendees a framework for assessing their offer and outline strategies 
        for negotiating the compensation package that fits their goals. We cover all steps
         of the negotiation process: from salary research, to initial talks with the recruiter, 
         to actually negotiating the offer, making sure attendees are prepared for each step.
        </p>
      </li>
      <li>
        <span className="icon major style5 fa-diamond"></span>
        <h3>Role Playing</h3>
        <p>
        We believe that the best way to prepare for this process is through practicing! 
        Our workshops are interactive - we cover different role playing scenarios that 
        students are likely to come across in their own negotiations. We also provide 
        scripts and tips on how attendees can tailor their scripts for their goals.
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

export default Header

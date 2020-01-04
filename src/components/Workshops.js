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
        <h3>Tailored to Your Audience</h3>
        <p>
          Our workshops are relevant to people of all backgrounds, and are
          tailored to your specific audience. We specialize in negotiation
          coaching for coding bootcamp graduates, self taught engineers, members
          of underrepresented groups, and women. Attendees will leave the
          workshop ready to take on their negotiation conversations and
          motivated to make powerful asks.
        </p>
      </li>
      <li>
        <span className="icon major style3 fa-copy"></span>
        <h3>Strategies</h3>
        <p>
          We give attendees a framework for assessing their offer and outline
          strategies for negotiating a compensation package that fits their
          goals. We cover all steps of the negotiation process: from salary
          research and initial talks with recruiters to actually negotiating the
          offer. It is our goal to ensure our attendees are prepared for each
          step of the process.
        </p>
      </li>
      <li>
        <span className="icon major style5 fa-diamond"></span>
        <h3>Role Playing</h3>
        <p>
          Practice! Practice! Practice! We believe that the best way to prepare
          for what can be an intimidating conversation is to rehearse. Our
          workshops are interactive - we cover different role playing scenarios
          that students are likely to come across in their own negotiations. We
          also provide starter scripts and tips on how attendees can customize
          their scripts to reflect their individual goals.
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

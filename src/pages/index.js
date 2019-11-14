import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

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
    // TODO: change buttons to email buttons
    // e.g. <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>
    return (
      <Layout>
        <Helmet title="Goldline Negotiations" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="who-we-are" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who We Are</h2>
                </header>
                <p>
                  Gaby Andrade and Taylor Hesselgrave are software engineers in
                  San Francisco, CA who started Gold Lines Ask in 2019. After
                  successfully negotiating multiple engineering offers in 2018,
                  Gaby and Taylor felt inspired to help other engineers advocate
                  for themselves in salary negotiations. Since then, they have
                  taught negotiation workshops at multiple Bay Area coding
                  bootcamps, including Hackbright Academy and Techtonica, and
                  individually coached engineers in the Bay Area and remotely
                  through their salary negotiation processes.
                  <br />
                  <br /> They are passionate about closing the wage gap in tech
                  that disproportionaly and negatively affects women, people of
                  color, and other underrepresented folks.
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="workshops" className="main special">
            <header className="major">
              <h2>Workshop Structure</h2>
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

          <section id="coaching" className="main special">
            <header className="major">
              <h2>Coaching</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
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
        

          <section id="request" className="main special">
            <header className="major">
              <h2>Request a Quote</h2>
              <p>
                We offer custom workshops tailored to your audience and we offer
                individual coaching. Because our offerings are so customized, we
                encourage you to email us to request a personalized quote for
                your specific needs.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    I'm interested in a Workshop!
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    I'm interested in Indivudal Coaching!
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

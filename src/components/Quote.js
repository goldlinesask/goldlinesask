import React from 'react'

// TODO: change buttons to email buttons
// e.g. <a href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com, another@thatsite.com, me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>

const Quote = props => (
  <section id="request" className="main special">
    <header className="major">
      <h2>Request a Quote</h2>
      <p>
        We offer negotiation workshops and individual coaching. Because our
        offerings are so customized, we encourage you to contact us directly to
        request a quote for your specific needs.
      </p>
    </header>
    <footer className="major">
      <ul className="actions">
        <li>
          <a
            className="button"
            href="mailto:goldlinesask@gmail.com?subject=Workshop Quote Reqesut"
          >
            I'm interested in a Workshop!
          </a>
        </li>
        <li>
          <a
            className="button"
            href="mailto:goldlinesask@gmail.com?subject=Coaching Quote Reqesut"
          >
            I'm interested in Individual Coaching!
          </a>
        </li>
      </ul>
    </footer>
  </section>
)

export default Quote

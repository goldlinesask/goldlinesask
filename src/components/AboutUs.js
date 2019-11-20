import React from 'react'

import pic01 from '../assets/images/pic01.jpg'

const AboutUs = props => (
  <section id="who-we-are" className="main special">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Who We Are</h2>
        </header>
        <p>
          Gaby Andrade and Taylor Hesselgrave are software engineers in
          San Francisco who started Goldline Negotiations in 2019. After
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
)

export default AboutUs

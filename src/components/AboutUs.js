import React from 'react'

import pic01 from '../assets/images/pic01.jpg'

const AboutUs = props => (
  <section id="who-we-are" className="main special about">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Who We Are</h2>
        </header>
        <p>
          Hi! We’re Gaby and Taylor, software engineers in San Francisco who
          originally got our start in tech after attending a bootcamp together.
          We started Goldline Negotiations in 2018 after completing our second
          round of job searching, where we found ourselves comparing notes and
          strategies while negotiating multiple engineering offers. Delighted
          with our own success and after speaking with our peers about their
          compensation, we were inspired to help other underrepresented
          engineers advocate for themselves in salary negotiations. Since then,
          we've both individually coached engineers in the Bay Area and remotely
          through their respective salary negotiation processes.
        </p>
        <p>
          In 2019, we consolidated our strategies and advice into a streamlined,
          presentable format, and began teaching negotiation workshops at
          multiple Bay Area coding bootcamps, including &nbsp;
          <a href="https://hackbrightacademy.com/" target="_blank">
            Hackbright Academy
          </a>
          &nbsp; and &nbsp;
          <a href="https://techtonica.org/" target="_blank">
            Techtonica
          </a>
          .
        </p>
        <p>
          We are passionate about closing the wage gap in tech that
          disproportionately and negatively affects women, people of color, and
          other underrepresented folks.
        </p>
      </div>
      <span className="image">
        <img src={pic01} alt="" />
      </span>
    </div>
  </section>
)

export default AboutUs

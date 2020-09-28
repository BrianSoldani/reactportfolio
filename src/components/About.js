import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://briansoldani.github.io/images/profile.jpg"
              alt="Brian Soldani"
              className="myself"
            />

            <div className="banner-text">
              <h1>Brian Soldani</h1>

              <hr />

              <p>Full Stack Web Developer | Account Manager | Operations Expert</p>

              <p>Laughter triggers the release of endorphins, the body's natural feel good chemicals. I bring a healthy dose of "feel good" with me to the office everyday. We all should! We should all love what we do and keep searching until we find it. I've been fortunate enough to find roles that are meaningful and that I truly enjoy.</p>

              <p>I'm a business professional with extensive sales operations and business development experience. I take a hands on approach to solve issues, drive efficiency, and develop strong sales organizations. I have strength in building long term strategic partnerships and establishing rapport with industry professionals. I have a diverse background and experience with a wide range of skills evolved from owning a business and leading startups to growth. I try my best to create a fun working experience for each person I come into contact with and bring some joy to people's lives each day.</p>


              <p>I've spent the last several years developing and building out processes to grow online ad revenue. As a trusted advisor and partner integration expert, I've built relationships that lead to long term partnerships and successfully on-boarded partners across all industries.</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/brian-soldani/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/BrianSoldani" rel="noopener noreferrer" target="_blank">
                  <i className="fa fab fa-github-square" aria-hidden="true" />
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
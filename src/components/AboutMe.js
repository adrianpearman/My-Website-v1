import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class AboutMe extends Component {
  render(){
    return (
      <div className='about-me'>
        <h1 className='about-me-title'>
          Hello, I'm Adrian<span className='emphasize'>.</span>
        </h1>
        <div className='about-me-container'>
          <div className='about-me-photo'>
            <img src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' alt=''/>
          </div>

          <div className='about-me-description'>
            <p>
              I’m a Full-Stack Web Developer based in Toronto, Ontario, Canada. Creating the best possible product is my goal as a developer; and with that in mind, my objective is to help <span className='emphasize'>YOU</span> create the best product possible for any and all of <span className='emphasize'>YOUR</span> needs!
              <br/>
              When it comes to your needs, deadlines and working hours are pliable as needed. I’m also flexible when it comes to working arrangements whether its solo or in a working group environment.
            </p>

            <div className='about-me-contact-container'>
              <p><span className='emphasize'>Socials:</span>
                <a href='https://www.linkedin.com/in/adrian-pearman/' target='_blank'>
                  <Ionicon icon='logo-linkedin'></Ionicon>
                </a>
                <a href='https://github.com/adrianpearman/' target='_blank'>
                  <Ionicon icon='logo-github'></Ionicon>
                </a>
                <a href='mailto:adrianpearman12@gmail.com?Subject=HI&body=Thank%20You%20for%20visting%20my%20site!%0A%0AFeel%20free%20to%20let%20me%20know%20how%20I%20can%20help%20you!%0A%0A%0A%0AThanks!' target='_blank'>
                  <Ionicon icon='md-mail'></Ionicon>
                </a>
              </p>
            </div>

            <Link
              activeClass="active"
              className="test1"
              to="Footer"
              spy={true}
              smooth={true}
              duration={500} >
              <button id='contact'> Contact Me </button>
            </Link>
            <button> Download CV </button>
          </div>
          <hr />
          <div className='traits'>
            <div className='traits-skills'>
              <h3>Skills<span className='emphasize'>.</span></h3>
              <p>
                I'm interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you're like, 'Wow, how did that even happen? How is that possible?' - <span className='emphasize'>Elon Musk</span>
              </p>
              <p>
                I am inspired by creating great work with people who are as passionate as I am about building something awesome.
              </p>
              <ul></ul>
            </div>

            <div className='traits-experience'>
              <h3>Experience<span className='emphasize'>.</span></h3>
              <p>
                I've learned from experience that if you work harder at it, and apply more energy and time to it, and more consistency, you get a better result. It comes from the work. <span className='emphasize'>Louis C. K.</span>
              </p>
              <p>
                Along with my knowledge in web design, I have a diverse background encompassing finance, business administration, human resource management, banking and customer relations.
              </p>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutMe

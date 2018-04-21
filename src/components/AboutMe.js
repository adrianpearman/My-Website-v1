import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import profilePhoto from '../../images/profilePhoto.jpg'

class AboutMe extends Component {
  render(){
    return (
      <div className='about-me'>
        <h1 className='about-me-title'>
          Hello, I'm Adrian<span className='emphasize'>.</span>
        </h1>
        <div className='about-me-container'>
          <div className='about-me-photo'>
            <img src={profilePhoto} alt=''/>
          </div>

          <div className='about-me-description'>
            <p>
              I’m a Full-Stack Web Developer based in Toronto, Ontario, Canada. Creating the best possible product is my goal as a developer; and with that in mind, my objective is to help <span className='emphasize'>YOU</span> create the best product possible for any and all of <span className='emphasize'>YOUR</span> needs!
              <br/>
              When it comes to your needs, deadlines and working hours are pliable as needed. I’m also flexible when it comes to working arrangements whether its solo or in a working group environment.
            </p>

            <div className='about-me-contact-container'>
              <p className='emphasize'>Socials:
                <a
                  href='https://www.linkedin.com/in/adrian-pearman/'
                  target='_blank'
                  id='linkedin'>
                  <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                </a>
                 |
                <a
                  href='https://github.com/adrianpearman/'
                  target='_blank'
                  id='github'>
                  <FontAwesomeIcon icon={["fab", "github"]}/>
                </a>
                 |
                <a
                  href='mailto:adrianpearman12@gmail.com?Subject=HI&body=Thank%20You%20for%20visting%20my%20site!%0A%0AFeel%20free%20to%20let%20me%20know%20how%20I%20can%20help%20you!%0A%0A%0A%0AThanks!'
                  target='_blank'
                  id='email'>
                  <FontAwesomeIcon icon={["fas", "envelope"]}/>
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

          <div className='divider'></div>

          <div className='traits'>
            <div className='traits-skills'>
              <div className='traits-decription'>
                <h3>Skills<span className='emphasize'>.</span></h3>
                <p>
                  "I'm interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you're like, 'Wow, how did that even happen? How is that possible?'" - <span className='emphasize'>Elon Musk</span>
                </p>
                <p>
                  I am inspired by creating great work with people who are as passionate as I am about building something awesome.
                </p>
              </div>

              <div className='traits-skills-container'>
                <b className='emphasize'>UI / Frontend Development</b>
                <ul className='skills-list'>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                  <li>SASS</li>
                  <li>jQuery</li>
                  <li>React</li>
                </ul>
              </div>
              <div className='traits-skills-container'>
                <b className='emphasize'>Web Development</b>
                <ul className='skills-list'>
                  <li>JavaScript (ES5, ES6, ES2016 & ES2017)</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>

            <div className='traits-experience'>
              <div className='traits-decription'>
                <h3>Experience<span className='emphasize'>.</span></h3>
                <p>
                  "I've learned from experience that if you work harder at it, and apply more energy and time to it, and more consistency, you get a better result. It comes from the work." <span className='emphasize'>Louis C. K.</span>
                </p>
                <p>
                  Along with my knowledge in web design, I have a diverse background encompassing finance, business administration, human resource management, banking and customer relations.
                </p>
              </div>

              <div className='traits-experience-container'>
                <b><span className='emphasize'>Assistant Instructor : </span> University of Toronto | March 2018 - Present Date </b>
                <p>
                  With this role of Assistant Instructor, my main responsibilities included facilitating in the teaching of web technologies including HTML5, CSS3, JavaScript, jQuery, Node.js, React, Firebase and Java
                </p>
              </div>

              <div className='traits-experience-container'>
                <b> <span className='emphasize'>Freelance Web Developer :</span>  Self Employed | May 2017 - Present Date </b>
                <p>
                  Assist clients with reaching their website goals by creating websites and applications with modern frameworks and technologies. Client first approach by using modern software to collaborate both ideas and content designs and page components.
                </p>
              </div>

              <div className='traits-experience-container'>
                <b className='emphasize'>Financial Services Representative</b>:
                <b>CIBC | April 2014 - March 2017 </b>
                <p>
                  Assist clients with up to date account information on various products and services including deposit accounts, credit cards, lending and investments. Provide clients with current information and changes within the financial industry (i.e. interest rate change notice, amendments in cardholder agreements).
                </p>
              </div>

              <div className='traits-experience-container'>
                <b className='emphasize'>Customer Services Representative</b>
                <b>Eastlink Communications | August 2012 - April 2014</b>
                <p>
                  Performing customer care services such as: informing customers of new product and services, collecting monthly payments for wireline and wireless services. Handling account maintenance activities including: processing and servicing device activations and deactivations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutMe

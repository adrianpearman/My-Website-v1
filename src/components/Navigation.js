import React from 'react'
import * as Scroll from 'react-scroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='navigation-list-item'>
          <Link
            activeClass="active"
            className="navigation-text"
            to="AboutMe"
            spy={true}
            smooth={true}
            duration={500} >
            About Me
          </Link>
        </li>
        <li className='navigation-list-item'>
          <Link
            activeClass="active"
            className="navigation-text"
            to="Services"
            spy={true}
            smooth={true}
            duration={500} >
            Services
          </Link>
        </li>
        <li className='navigation-list-item'>
          <Link
            activeClass="active"
            className="navigation-text"
            to="Projects"
            spy={true}
            smooth={true}
            duration={500} >
            Projects
          </Link>
        </li>
        <li className='navigation-list-item'>
          <Link
            activeClass="active"
            className="navigation-text"
            to="Footer"
            spy={true}
            smooth={true}
            duration={500} >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

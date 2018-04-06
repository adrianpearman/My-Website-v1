import React from 'react'
import * as Scroll from 'react-scroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {
  return (

    <div className='header'>
      <div className='header-content'>
        <h1 className='header-title'>
          Welcome
        </h1>
        <h2 className='header-subtitle'>
          <Link
            activeClass="active"
            className="subtitle-text"
            to="AboutMe"
            spy={true}
            smooth={true}
            duration={500} >
            Let's collaborate
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default Header

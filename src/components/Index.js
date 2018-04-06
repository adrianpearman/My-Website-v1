// MODULES
import React, { Component } from 'react'
import * as Scroll from 'react-scroll'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// COMPONENTS
import Header from './Header'
import Services from './Services'
import AboutMe from './AboutMe'
import Navigation from './Navigation'
import EmailSender from './EmailSender'
import ProjectList from './ProjectList'
import ProjectHeader from './ProjectHeader'
import Footer from './Footer'
import LoadingComponent from './LoadingComponent'


const duration = 250
const durationTop = 800

class Index extends Component{
  state = {
    projects:[
      {
        title: 'Project 1',
        description: 'Test application description',
        stack: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
        img: 'http://lorempicsum.com/simpsons/350/200/1'
      },
      {
        title: 'Project 1',
        description: 'Test application description',
        stack: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
        img: 'http://lorempicsum.com/simpsons/350/200/1'
      },
      {
        title: 'Project 1',
        description: 'Test application description',
        stack: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
        img: 'http://lorempicsum.com/simpsons/350/200/1'
      },
      {
        title: 'Project 1',
        description: 'Test application description',
        stack: ['HTML5', 'CSS3', 'Javascript', 'Bootstrap'],
        img: 'http://lorempicsum.com/simpsons/350/200/1'
      }
    ],
    navigation:[
      'About Me', 'Projects', 'Contact Information'
    ]
  }

  componentDidMount(){
    Events.scrollEvent.register('begin', () => {
      console.log('begin', arguments);
    })
    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    })
  }

  scrollToTop(){
    scroll.scrollToTop()
  }

  scrollTo(){
    scroller.scrollTo('scroll-to-element',{
      duration: durationTop,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer(){
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve()
        Events.scrollEvent.remove('end')
      })
      scroller.scrollTo('scroll-container-second-element', {
        duration: durationTop,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      })
    })
  }

  componentWillUnmount(){
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  render(){
    const projects = (
      this.state.projects ? <ProjectList project={this.state.projects} projects={this.state.projects} /> : <LoadingComponent />
    )
    return(
      <div>
        <Header />
        <Navigation />

        <Element
          name='AboutMe'
          className='element row'>
          <AboutMe />
        </Element>

        <Element
          name='Services'
          className='element row'>
          <Services />
        </Element>

        <Element
          name='Projects'
          className='element row'>
          <ProjectHeader />
          { projects }
        </Element>

        <Element
          name='Footer'
          className='element'>
          <Footer />
        </Element>
      </div>
    )
  }
}

export default Index

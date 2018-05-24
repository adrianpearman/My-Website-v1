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
import ProjectContent from "./ProjectContent";
import LoadingComponent from './LoadingComponent'


const duration = 250
const durationTop = 800

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
       projects: [
      {
        title: "Project 1",
        description: "Test application description",
        stack: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
        img: "http://lorempicsum.com/futurama/350/200/1"
      },
      {
        title: "Project 1",
        description: "Test application description",
        stack: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
        img: "http://lorempicsum.com/futurama/350/200/1"
      },
      {
        title: "Project 1",
        description: "Test application description",
        stack: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
        img: "http://lorempicsum.com/futurama/350/200/1"
      },
      {
        title: "Project 1",
        description: "Test application description",
        stack: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
        img: "http://lorempicsum.com/futurama/350/200/1"
      }
    ],
    navigation: ["About Me", "Projects", "Contact Information"],
    showNavigation: false
    }
    this.onScroll = this.onScroll.bind(this)
  }
 
  componentDidMount() {
    Events.scrollEvent.register("begin", () => {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", () => {
      console.log("end", arguments);
    });
    window.addEventListener("scroll", this.onScroll);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: durationTop,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });
      scroller.scrollTo("scroll-container-second-element", {
        duration: durationTop,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      });
    });
  }

  onScroll() {
    // records the height of where the setstate will change
    const headerHeight = window.innerHeight - 75;
    // records the current y position on the page
    const userWindow = window.pageYOffset;

    // triggers the function to change the navigation bar
    if (userWindow > headerHeight) {
      console.log('changed')
      this.setState({ showNavigation: true})
    } 
    
    if (userWindow < headerHeight) {
      console.log('unchanged')
      this.setState({ showNavigation: false})
    }
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const projects = this.state.projects ? (
      <ProjectList
        project={this.state.projects}
        projects={this.state.projects}
      />
      ) : (
      <LoadingComponent />
    );
    
    const showNavigation = this.state.showNavigation ? 'navigation' : 'none'

    return (
      <div>
        <Header />
        <Navigation showNavigation={showNavigation}/>
        <Element name="AboutMe" className="element row">
          <AboutMe />
        </Element>

        <Element name="Services" className="element row">
          <Services />
        </Element>

        <Element name="Projects" className="element row">
          <ProjectHeader />
          <ProjectContent />
          {projects}
        </Element>

        <Element name="Footer" className="element">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default Index

import React, { Component } from 'react'
import Project from './Project'

class ProjectList extends Component{
  render(){
  let projectList =  this.props.projects.map((project, index) =>  {
    return(
        <Project
          key={index}
          title={ project.title }
          description={ project.description }
          img={ project.img }
          stack={ project.stack }
        />
      )
    })

  return(
       <div className='projects-container'>
        { projectList }
       </div>
      )
  }
}


export default ProjectList

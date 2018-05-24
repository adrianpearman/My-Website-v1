import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'

class Project extends Component{
  state = {
    showModal: false,
    showOverlay: false
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }

  showOverlayHandler = () => {
    this.setState({ showOverlay: true })
  }

  closeOverlayHandler = () => {
    this.setState({ showOverlay: false })
  }

  render(){
    let stack = this.props.stack.map((language, index) => {
      return <li key={index}>{ language }</li>
    })

    let cardTitleStyle = this.state.showOverlay === false ? 'project-close' : 'project-open'

    let titleStyle = {
      fontSize: '24px' ,
      color: '#ffffff' ,
      display: 'block' ,
      lineHeight: '36px' ,
      fontFamily: 'Rock Salt'
    }

    let overlayStyle = this.state.showOverlay === false ? { backgroundColor: '#00000062'} : {}

    let overlayContentStyle = { backgroundColor: '#0c2461bb'}

    // Flat ButtonUI and Styling
    // let flatButton = {}

    let actions = [
      <FlatButton
        label='View Source Code'
        primary={false}
        onClick={this.closeModalHandler}
      />,
      <FlatButton
        label='Close [x]'
        primary={true}
        style={{color: '#0c2461'}}
        onClick={this.closeModalHandler}
      />
    ]

    return(
      <div className='project'>
        <Card 
          className='card' 
          onClick={this.openModalHandler}
        >
          <CardMedia
            onMouseEnter={this.showOverlayHandler}
            onMouseLeave={this.closeOverlayHandler}
            overlayStyle={overlayStyle}
            overlayContentStyle={overlayContentStyle}
            overlay={
              <CardTitle 
                className={cardTitleStyle}
                titleStyle={titleStyle}
                title={ this.props.title }
              />
            }
          >
           <img className='project-image' src={ this.props.img }/>
          </CardMedia>
        </Card>

        <Dialog
          modal={true}
          autoScrollBodyContent={true}
          open={this.state.showModal}
          actions={actions}
        >
          <div className='dialog'>
            <h1>{this.props.title} </h1>
            <img src={this.props.img} />
            <div className='dialog-description'>
              <h2>Description</h2>
              {this.props.description}
            </div>
            <div className='dialog-stack'>
              <h3> Technologies Used: </h3>
              <ul>
                {stack}
              </ul>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default Project

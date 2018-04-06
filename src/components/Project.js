import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardMedia, CardTitle } from 'material-ui/Card'

class Project extends Component{
  state = {
    showModal: false
  }

  openModalHandler = () => {
    this.setState({ showModal: true })
  }

  closeModalHandler = () => {
    this.setState({ showModal: false })
  }


  render(){
    let stack = this.props.stack.map((language, index) => {
      return <li key={index}>{ language }</li>
    })

    let actions = [
      <FlatButton
        label='View Source Code'
        primary={false}
        onClick={this.closeModalHandler}
      />,
      <FlatButton
        label='View Source Code'
        primary={false}
        onClick={this.closeModalHandler}
      />,
      <FlatButton
        label='View Source Code'
        primary={false}
        onClick={this.closeModalHandler}
      />,
      <FlatButton
        label='Close [x]'
        primary={true}
        onClick={this.closeModalHandler}
      />
    ]

    return(
      <div className='project'>
        <Card onClick={this.openModalHandler}>
          <CardMedia
            overlay={<CardTitle title={ this.props.title }
            subtitle="Overlay subtitle" />}
          >
           <img src={ this.props.img }/>
          </CardMedia>
        </Card>

        <Dialog
          modal={true}
          autoScrollBodyContent={true}
          open={this.state.showModal}
          actions={actions}
        >

           <img src={ this.props.img }/>
           <h1>{this.props.title} </h1>
           <h2>Description</h2>
            {this.props.description}
            <h3> Technologies Used: </h3>
            <ul>
              { stack }
            </ul>
        </Dialog>
      </div>
    )
  }
}

export default Project

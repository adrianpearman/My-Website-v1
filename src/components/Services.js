import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Services extends Component {

  render(){
    return(
      <div className='services'>
        <h1 className='services-title'>
          You've read a little about me,<br/> but what can I offer you?
        </h1>

        <div className="services-container">
          <div className="services-details">
            <span className='services-icon'><FontAwesomeIcon icon={["fas", "chart-bar"]}/></span>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
          <div className="services-details">
            <span className='services-icon'><FontAwesomeIcon icon={["fas", "keyboard"]}/>  </span>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
          <div className="services-details">
            <span className='services-icon'><FontAwesomeIcon className='services-icon' icon={["fas", "address-card"]}/>  </span>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
      </div>
    </div>

    )
  }
}

export default Services

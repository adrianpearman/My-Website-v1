import React, { Component } from 'react';
import Ionicon from 'react-ionicons'

class Services extends Component {

  render(){
    return(
      <div className='services'>
        <h1 className='services-title'>
          You've read a little about me,<br/> but what can I offer you?
        </h1>

        <div className="services-container">
          <div className="services-details">
            <Ionicon icon='ios-contacts' fontSize = '35px' classNameName='center'></Ionicon>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
          <div className="services-details">
            <Ionicon icon='md-flash' fontSize = '35px' classNameName='center'></Ionicon>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
          <div className="services-details">
            <Ionicon icon='ios-podium' fontSize = '35px' classNameName='center'></Ionicon>
            <br/>
            The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.
          </div>
      </div>
    </div>

    )
  }
}

export default Services

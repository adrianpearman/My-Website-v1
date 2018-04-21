import React, { Component } from 'react'

class EmailSender extends Component {
  render() {
    return (
      <div className='email-sender'>
        <div className='email-statement'>
          <p>
            Starting a new project? Exploring options for a current project? Looking to add a new member to your team? Contact me and lets collaborate!
            <br />
            <br />
            I look forward to hearing from you!
          </p>
        </div>

        <form className='email-form'>
          <div className='email-inputs'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='email' placeholder='Email'/>
          </div>

          <div className='email-textarea'>
            <textarea placeholder='Message'>
            </textarea>
          </div>

          <button className='email-button'>
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default EmailSender

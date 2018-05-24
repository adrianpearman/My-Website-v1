import React from 'react'
import EmailSender from './EmailSender'

const Footer = () => {
  const copyright = `Created by Adrian Pearman - © ${new Date().getFullYear()}`
  return(
    <div className="footer">
      <div className="footer-content">
        <h1 className="footer-title">
          Contact<span className="emphasize">.</span>
        </h1>
        <div className="footer-description">
          <EmailSender />
        </div>
      </div>
      <div className="footer-sub">
        <p>{copyright}</p>
      </div>
    </div>
  )
}

export default Footer

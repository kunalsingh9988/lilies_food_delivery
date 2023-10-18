import React from 'react'
import './Footer.css'
import {AiFillGithub,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <p>© 2023 Lilies, Kunal Singh All right reserved.</p>
        <div className="footerIcons">
            <div className="icon">
                <Link to="https://github.com/kunalsingh9988/" target="_blank">
                <AiFillGithub className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link to="https://www.linkedin.com/in/kunal-singh-2724571b2/" target="_blank">
                <AiOutlineLinkedin className='subIcon'/>
                </Link>
            </div>
            <div className="icon">
                <Link to="https://x.com/kunalsi29219184?s=09" target="_blank">
                <AiOutlineTwitter className='subIcon'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
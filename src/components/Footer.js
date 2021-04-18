import React from 'react'
import './footer.css'
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='about'>
                Kadek Surya Mahardika - Batch 2021
            </div>
            
            <ul className='social-media'>
                <li className='sm-items'><a className='sm-links' href="https://www.linkedin.com/in/kadeksuryam/" target="_blank" rel="noreferrer" ><FaLinkedinIn/></a></li>
                <li className='sm-items'><a className='sm-links' href="https://www.instagram.com/suryam1729/" target="_blank" rel="noreferrer" ><FaInstagram/></a></li>
            </ul>
        </div>
    )
}


export default Footer
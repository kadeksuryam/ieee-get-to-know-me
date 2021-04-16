import React from 'react'
import './footer.css'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='about'>
                Kadek Surya Mahardika - Batch 2021
            </div>
            
            <ul className='social-media'>
                <li className='sm-items'><a className='sm-links' href="https://www.linkedin.com/in/kadeksuryam/" target="_blank" rel="noreferrer" >LinkedIn</a></li>
                <li className='sm-items'><a className='sm-links' href="https://www.instagram.com/suryam1729/" target="_blank" rel="noreferrer" >Instagram</a></li>
            </ul>
        </div>
    )
}


export default Footer
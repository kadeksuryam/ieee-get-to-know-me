import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='about'>
                Kadek Surya Mahardika - Batch 2021
            </div>
            
            <ul className='social-media'>
                <li className='sm-items'><Link className='sm-links' to="/">LinkedIn</Link></li>
                <li className='sm-items'><Link className='sm-links' to="/">Instagram</Link></li>
            </ul>
        </div>
    )
}


export default Footer
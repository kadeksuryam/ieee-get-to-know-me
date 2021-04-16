import React from 'react'
import './about.css'
import pfp from '../assets/pfp.jpg'

const About = () => {

    const content = 
    "Hello my name is Kadek Surya Mahardika. I am 2nd year Informatics student at Bandung Institute of Technology"

    return(
        <div className="about-container">
            <div className='title'>About Me</div>
            <img className='profile-pic' src={pfp} alt="my-pfp" />
            <div className="about-content">
                {content}
            </div>
        </div> 
    )
}


export default About
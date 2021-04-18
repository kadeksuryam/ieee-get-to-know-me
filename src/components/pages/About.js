import React from 'react'
import './about.css'
import pfp from '../assets/pfp.jpg'


const About = () => {

    const strengths = 
    "I'm quite good at learning new things and solving algorithms problems, I also really passionate at Web Development especially building the backend system."

    const weakness =
    "I'm lacking of softskills in general, that is i often struggling when people asked me to speak up about something like giving my opinion. I also often not use my time wisely and becomes unproductive state."

    const opportunities =
    "There are many side projects and internship that i can take this summer that is can improve both of my technical and my soft skills."

    const threats = 
    "Computer games and social media is always threats for me."

    const organizationalExp = 
    "As an introvert person, I don't have much organizational experience. Nevertheless, after 1st year of my studies at ITB, I've joined a couple of organization that is member of HMIF (Himpunan Mahasiswa Informatika) in departement of tech career and development and DSC (Developer Student Club) ITB."

    const peopleDesc =
    "People often describe me as shy, quiet person in real life and pretty passionate about my studies."

    return(
        <div className="about-container">
            <div className='title'>About Me</div>
            <img className='profile-pic' src={pfp} alt="my-pfp" />
            <br/>
            <div className="content">
                <div className="swot">
                    <h2><strong>SWOT</strong></h2>
                    <h3>Strengths</h3>
                    <div>{strengths}</div>
                    <br/>
                    <h3>Weaknesses</h3>
                    <div>{weakness}</div>
                    <br/>
                    <h3>Opportunities</h3>
                    <div>{opportunities}</div>
                    <br/>
                    <h3>Threats</h3>
                    <div>{threats}</div>
                    <br/>
                </div>
                <div className="organizational-exp">
                    <h2><strong>Organizational Experiences</strong></h2>
                    <div>{organizationalExp}</div>
                    <br/>
                </div>
                <div className="how-people-describe-me">
                    <h2><strong>How People Describe Me</strong></h2>
                    <div>{peopleDesc}</div>
                    
                </div>
            </div>
        </div> 
    )
}


export default About
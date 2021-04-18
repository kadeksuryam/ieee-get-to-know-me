import React from 'react'
import './reason.css'

const Reason = () => {

    const content = 
    "My reason upon joining IEEE SB that is I want to improve my soft skills and technical skills. I realized that I'm lacking work on team experience. I want to improve my soft skills, my communication skills and most importantly I want to contribute to IEEE itself. My expectation upon joining IEEE SB is that my soft and technical skills have improved and more importantly, I’ve contributed to IEEE in many ways. My “dream team” of course Information & Technology especially, I want to work at backend, but I can also work on both sides."

    return(
        <div className="reason-container">
            <div className='title'>My Reason</div>
            <div className="content">
                {content}
            </div>
        </div> 
    )
}


export default Reason
import React from 'react'
import './reason.css'

const Reason = () => {

    const content = 
    "My reason upon joining IEEE SB is ..."

    return(
        <div className="reason-container">
            <div className='title'>My Reason</div>
            <div className="reason-content">
                {content}
            </div>
        </div> 
    )
}


export default Reason
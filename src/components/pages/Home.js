import React from 'react'
import './home.css'

const Home = () => {

    const content = 
    "Hello my name is Kadek Surya Mahardika. I am 2nd year Informatics student at Bandung Institute of Technology"

    return(
        <div className="home-container">
            <div className='title'>Home</div>
            <div className="home-content">
                {content}
            </div>
        </div> 
    )
}


export default Home 
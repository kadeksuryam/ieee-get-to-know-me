import React from 'react'
import './home.css'

const Home = () => {

    const content = 
    "Kadek Surya Mahardika is an Informatics student at Bandung Institute of Technology. He was born in Bali and finished his high school in 2019. Right now, he want to improve his soft and technical skills by joining IEEE Student Branch, Batch 2021."

    return(
        <div className="home-container">
            <div className='title'>Home</div>
            <div className="content">
                {content}
            </div>
        </div> 
    )
}


export default Home 
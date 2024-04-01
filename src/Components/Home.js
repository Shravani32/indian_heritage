
import React from "react";
const Home=()=>{
    return(
       <div className='home-page'>
        <marquee>
           <h1 className='home-head'>Sampurn Bharat</h1>
        </marquee>

        <div className='home-div'>
            <h2 className='home-text'>Voyage to the golden era of incredible nation...😍</h2>
        </div>

        <a className="home-para" href="/about">
            <img src='https://cdn.pixabay.com/photo/2017/08/11/19/41/right-arrow-2632513_1280.png' alt="" className="home-img"/>
        </a>
           
       </div>
    );
}

export default Home;
import React from 'react';
//import backgroundVideo from '../videos/video-1.mp4'
import { Link } from 'react-router-dom';

//here we are going to have a button that when you click it it's going to take you to the nasa photo component. 
export default function Home() {
    return(
        <div className='home'>
            <Link className='home-link' to="/nasaphoto">Escape to the Stars!</Link>
            <video autoPlay loop muted id='video'>
                <source src="./videos/video-1.mp4" type='video/mp4' />
            </video>
        </div>
    );
}
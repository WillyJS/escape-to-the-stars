import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
//const apikey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){
    
    const [photoData, setPhotoData] = useState(null);

    useEffect(()=> {

        //calls the function we built that grabs the API from NASA and run it. 
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=3yqThNlfdR6mWKnhL3dRXuhP8yxmcp1BZkwbscgz'
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    //if no data is found return nothing and not break our app!
    if (!photoData) return <div />;
    
    //Here we will tag our NavBar component which is a link back to Home.  By adding <> and </> before and after <div> we are creating a parent div 
    //here we will be doing a ternary operation if the file type is image, show image if it's a video show iframe instead.  
    return(
        <>
        <NavBar />
        <div className='nasa-photo'>
            {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className='photo'/>
            ) : (
                <iframe
                    title="space-video"
                    src="{photoData.url}"
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            
                <div>
                    <h1>{photoData.title}</h1>
                    <p className='date'>{photoData.date}</p>
                    <p className='explanation'>{photoData.explanation}</p>
                    <p>Come back soon!</p>
                </div>
        </div>
        </>
    )
}
/* This component will help render the images generated by the Image generator model */

import { useEffect, useState } from 'react'
import axios from 'axios'
import { ImageList, ImageListItem, colors } from '@mui/material'
import {LinearProgress } from '@mui/material'
// import lottie from 'lottie-web';
// import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
// defineElement(lottie.loadAnimation);


const Photos = ({ prompt }) => {
    const [photos, setPhotos] = useState([])

    /* This hook will send a POST request to Image generator which will respond with the images */
    useEffect(() => {
        const fetchImages = () => {
            axios
                .post('Imagen Api url', { prompt })
                .then((response) => setPhotos(response.data.photos))
                .catch((error) =>
                    console.error('Error fetching images: ', error)
                )
        }

        fetchImages()
        const interval = setInterval(fetchImages, 15000)

        return () => clearInterval(interval)
    }, [prompt])

    return (
        <div className='photo-container'>
            
            <ImageList sx={{ height: 350 }}>
                {photos.map((photo, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={photo.url}
                            
                            alt={photo.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                    
                ))}
            </ImageList>
           
            <LinearProgress id ="progressbar2"  color="secondary" style={{ top: "99%" , borderRadius: 3 , width: "99.7%" , left: "0.3%",borderRadius:"5px"}} />  
        </div>
        
        
    )
}

export default Photos
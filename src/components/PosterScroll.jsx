import React, { useEffect, useState } from 'react'
import './PosterScroll.css';





const PosterScroll = () => {
    const images = ["/poster1.webp","/poster2.webp","/poster3.webp"];
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % images.length)
        },3000);

        return () => clearInterval(interval);
    },[images.length])
  return (
    <div className='poster-scroll slider-container'>
      <img key = {index} src={images[index]} alt=""  className='fade-image'/>
    </div>
  )
}

export default PosterScroll

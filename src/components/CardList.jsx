import React from 'react'
import './CardList.css';
import Card from './Card';
import Monitors from '../assets/monitors.webp';
import Projector from '../assets/projector.webp';
import Speaker from '../assets/speaker.webp';
import watch from '../assets/watch.webp';
import cam from '../assets/cam.webp';
import buds from '../assets/buds.webp';
import Printers from '../assets/printers.webp';


const CardList = ({title, data}) => {
  return (
    <div className='cardList'
      style={{
        width : '78vw'
      }}
    >
     
     <div className="title">
        <h2>{title}</h2>
     </div>

     <div className="cards">
          
       {
         data.map((item)=>(
            <Card image={item.image} pName={item.name} pPrice={item.price}/> 
        ))
       }
     </div>

    </div>
  )
}

export default CardList

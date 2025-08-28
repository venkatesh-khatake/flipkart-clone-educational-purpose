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


const CardList = ({title}) => {
  return (
    <div className='cardList'>
     
     <div className="title">
        <h2>{title}</h2>
     </div>

     <div className="cards">
        <Card image = {Monitors} pName = "Monotors" pPrice = "6999"/>
        <Card image = {Speaker} pName = "Speakers" pPrice = "6999"/>
        <Card image = {buds} pName = "Buds" pPrice = "6999"/>
        <Card image = {watch} pName = "Watch" pPrice = "6999"/>
        <Card image = {cam} pName = "Camera" pPrice = "6999"/>
        <Card image = {Printers} pName = "Printers" pPrice = "6999"/>
        <Card image = {Projector} pName = "Projector" pPrice = "6999"/>

     </div>

    </div>
  )
}

export default CardList

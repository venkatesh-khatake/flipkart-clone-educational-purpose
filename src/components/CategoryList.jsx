import React from 'react'
import './CategoryList.css';
import Category from './Category';

const CategoryList = () => {
  return (
    <div className='categoryList'>
      <Category image={"./src/assets/minutes.webp"} name= "Minutes"/>
      <Category image={"./src/assets/topOffers.webp"} name= "Top Offers"/>
      <Category image={"./src/assets/mobiles.webp"} name= "Mobiles & Tablets"/>
      <Category image={"./src/assets/tv.webp"} name= "TVs & Appliances"/>
      <Category image={"./src/assets/electronics.webp"} name= "Electronics"/>
      <Category image={"./src/assets/Fashion.webp"} name= "Fashion"/>
      <Category image={"./src/assets/home$kitchen.webp"} name= "Homes & Kitechen"/>
      <Category image={"./src/assets/toys.webp"} name= "Beauty & Toys"/>
      <Category image={"./src/assets/furniture.webp"} name= "Furniture"/>
      <Category image={"./src/assets/flightbook.webp"} name= "Flight Bookings"/>
      <Category image={"./src/assets/grocery.webp"} name= "Grocery"/>
    </div>
  )
}

export default CategoryList

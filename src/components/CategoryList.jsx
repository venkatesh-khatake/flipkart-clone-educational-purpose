import React from 'react'
import './CategoryList.css';
import Category from './Category';

const CategoryList = () => {
  return (
    <div className='categoryList'>
      <Category image={"./minutes.webp"} name= "Minutes"/>
      <Category image={"/topOffers.webp"} name= "Top Offers"/>
      <Category image={"/mobiles.webp"} name= "Mobiles & Tablets"/>
      <Category image={"/tv.webp"} name= "TVs & Appliances"/>
      <Category image={"/electronics.webp"} name= "Electronics"/>
      <Category image={"/fashion.webp"} name= "Fashion"/>
      <Category image={"/homeKitchen.webp"} name= "Homes & Kitechen"/>
      <Category image={"/toys.webp"} name= "Beauty & Toys"/>
      <Category image={"/furniture.webp"} name= "Furniture"/>
      <Category image={"/flightbook.webp"} name= "Flight Bookings"/>
      <Category image={"/grocery.webp"} name= "Grocery"/>
    </div>
  )
}

export default CategoryList;

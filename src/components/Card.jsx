import React from 'react'
import { useParams } from 'react-router';

const Card = ({color, price, name, gender, image, categories,productType}) => {

  const isJordanPage = categories.includes('jordanPage');

  
  if (isJordanPage) {
    return (
      <div className="w-full bg-[#1F1F21] text-white">
        <div className="rounded-t-md">
          <img 
            src={image} 
            alt={name} 
            className="object-cover object-center w-full h-auto" 
          />
        </div>
        <div className="p-4">
          <h3 className='text-lg font-[helveticaNow] mb-1'>{name}</h3>
          <p className='text-gray-400 text-sm mb-4'>{gender}'s Shoes</p>
          <span className='text-lg font-[helveticaNow]'>${price}</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full rounded-md dark:bg-gray-50 dark:text-gray-800">

      <img src={image} alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-500" />
      
      <div className="flex flex-col justify-between p-3 space-y-8">
        <div className=" flex flex-col">
          <h3 className='text-sm sm:text-lg font-[helveticaNow]'>{name}</h3>
          <p className=' text-xs sm:text-sm'>{gender}{gender != 'Unisex' ? "'s" : ' '} {productType}</p>
          <p className={`text-xs sm:text-sm`}>{color.length} Color</p>
          <span className='my-2 font-[helveticaNow]'>${price}</span>
          <span className='text-[#007D48] font-[helveticaNow]'>See Price in Bag</span>
        </div>
      </div>
    </div>
  )
}

export default Card
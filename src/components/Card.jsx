import React from 'react'

const Card = ({color,price,name,gender,image}) => {
  return (
    <div className="w-full rounded-md  dark:bg-gray-50 dark:text-gray-800">
	    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-500" />
	    <div className="flex flex-col justify-between p-3 space-y-8">
	    	<div className=" flex flex-col">
                <h3 className='text-sm sm:text-lg font-[helveticaNow]'>{name}</h3>
                <p className=' text-xs sm:text-sm'>{gender}'s Shoes</p>
                <p className='text-xs sm:text-sm'>{color.length} Color</p>
                <span className='my-2 font-[helveticaNow]'>{price}</span>
                <span className='text-[#007D48] font-[helveticaNow]'>See Price in Bag</span>
	    	</div>
	    </div>
    </div>
  )
}

export default Card
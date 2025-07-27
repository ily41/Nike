import React from 'react'

const Card = () => {
  return (
    <div className="w-full rounded-md  dark:bg-gray-50 dark:text-gray-800">
	    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-500" />
	    <div className="flex flex-col justify-between p-3 space-y-8">
	    	<div className=" flex flex-col">
                <h3 className='text-sm sm:text-lg font-[helveticaNow]'>Nike Field general</h3>
                <p className=' text-xs sm:text-sm'>Women's Shoes</p>
                <p className='text-xs sm:text-sm'>1 Color</p>
                <span className='my-2 font-[helveticaNow]'>$115</span>
                <span className='text-[#007D48] font-[helveticaNow]'>See Price in Bag</span>
	    	</div>
	    </div>
    </div>
  )
}

export default Card
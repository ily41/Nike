import React from 'react'
import ScrollToTop from './ScrollToTop'
import { Link } from 'react-router'

const BagNotification = ({setBagNotification,product,sizeChosen,isAddBag}) => {
  
  return (
    <>
        <div
          className="fixed top-28 left-0 w-screen h-screen bg-black opacity-55 z-40 pointer-events-auto"
          onClick={() => setBagNotification(false)} 
          
        ><ScrollToTop /></div>

        <div className="fixed bottom-0 w-full p-4 h-fit bg-white rounded-xl z-50 lg:w-auto lg:right-10 lg:top-26">
            <div className=' flex justify-between'>
                <div className='flex gap-3'>
                    <svg aria-hidden="true" class="text-color-success mr3-sm" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path fill="#138F47" d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zm-1.06 14l-3.18-3.18 1.06-1.06 2.12 2.12 4.24-4.24 1.06 1.06-5.3 5.3z"/>
                    </svg>
                    <span className='font-[helveticaNow]'>Added to {isAddBag ? 'Favorites' : 'bag'}</span>
                </div>
                <svg onClick={() => setBagNotification(false)} className="p-2 cursor-pointer bg-[#f5f5f5] rounded-full"  aria-hidden="true"  focusable="false"  viewBox="0 0 24 24"  role="img"  width="40px"  height="40px"  fill="none">  <path    stroke="#1c1c1c"    strokeWidth="1.5"    d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"  /></svg>
            </div>

            <div className='w-full h-[100px]  flex gap-4'>
                <img className='' src= {product.image} alt="" />
                <div className='flex flex-col '>
                    <h3 className='font-[helveticaNow] text-md'>{product.name}</h3>
                    <p className='text-[#878787]'>{product.genders}'s Shoes</p>
                    <p className='text-[#878787]'>{sizeChosen} Size </p>
                    <p className='font-[helveticaNow]'>${product.price}</p>
                </div>
            </div>

            <div className='mt-4'>
                {isAddBag ? 
                    <Link to='/favorites' ><button className="w-full mt-4 min-w-[300px] cursor-pointer  py-4 rounded-4xl bg-black text-white font-[helveticaNow]">View Favorites</button></Link>
                      :
                    <>
                      <Link onClick={() => setBagNotification(false)} to='/cart' ><button  className="w-full cursor-pointer min-w-[300px] py-3 rounded-4xl text-black border-2 mb-2 border-[#d7d7d7] font-[helveticaNow]"> View Bag (3) </button></Link>
                      <button className="w-full cursor-pointer  py-3 rounded-4xl bg-black text-white font-[helveticaNow]"> Go to Checkout</button>
                    </>
                }
                
            </div>
        </div>
    </>
  )
}

export default BagNotification
import React from 'react'

const BagNotification = ({setBagNotification}) => {
  return (
    <>
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000] opacity-55 hidden lg:block z-40'></div>
        <div className="fixed bottom-0 w-full p-4 h-[310px] bg-white rounded-xl z-50 lg:w-auto lg:right-10 lg:top-26">
            <div className=' flex justify-between'>
                <div className='flex gap-3'>
                    <svg aria-hidden="true" class="text-color-success mr3-sm" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path fill="#138F47" d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zm-1.06 14l-3.18-3.18 1.06-1.06 2.12 2.12 4.24-4.24 1.06 1.06-5.3 5.3z"/>
                    </svg>
                    <span className='font-[helveticaNow]'>Added to bag</span>
                </div>
                <svg onClick={() => setBagNotification(false)} className="p-2 cursor-pointer bg-[#f5f5f5] rounded-full"  aria-hidden="true"  focusable="false"  viewBox="0 0 24 24"  role="img"  width="40px"  height="40px"  fill="none">  <path    stroke="#1c1c1c"    strokeWidth="1.5"    d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"  /></svg>
            </div>

            <div className='w-full h-[100px]  flex gap-4'>
                <img className='' src= "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aaebfafa-c137-495e-acd3-223be66de75b/NIKE+C1TY.png" alt="" />
                <div className='flex flex-col '>
                    <h3 className='font-[helveticaNow] text-md'>Nike Fiel General Leather</h3>
                    <p className='text-[#878787]'>Men's Shoes</p>
                    <p className='text-[#878787]'>Size M 11.5 / W 13</p>
                    <p className='font-[helveticaNow]'>$115</p>
                </div>
            </div>

            <div className='mt-4'>
                <button className="w-full cursor-pointer min-w-[300px] py-3 rounded-4xl text-black border-2 mb-2 border-[#d7d7d7] font-[helveticaNow]"> View Bag (3) </button>
                <button className="w-full cursor-pointer  py-3 rounded-4xl bg-black text-white font-[helveticaNow]"> Add to Bag</button>

            </div>
        </div>
    </>
  )
}

export default BagNotification
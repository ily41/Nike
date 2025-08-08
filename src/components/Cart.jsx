import React from 'react'

const Cart = () => {
  return (
    <div className='mt-4'>
        
        <div className='relative  w-full flex justify-center'>
            <div className='w-11/12'>

                <input type="text" className='bg-[#f5f5f5]  placeholder:pl-9 w-full hover:bg-[#e5e5e5] rounded-4xl p-2' placeholder='Search' />

                <div className='absolute top-0 p-2 rounded-[50%]  bg-[#f5f5f5]'>
                  <img src="/Icons/Search-icon.svg" alt="Search" />
                </div>

            </div>
        </div>
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>



        <div className='flex flex-col justify-center items-center '>
            <h3 className='text-2xl'>Bag</h3>
            <span><span className='text-[#979797]'>5 Items</span> | $725.00</span>
        </div>

        <hr className="px-4 my-4 text-[#b3b3b3]" />
        {/* cart element */}
        <div className='mx-5'>
            <div className='w-full h-[150px]  flex gap-4'>
                <img className='' src= "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e97f83f-cc3c-48e3-8cfa-03da70ec460e/NIKE+C1TY+PRM.png" alt="" />
                <div className='flex flex-col '>
                    <p className='font-[helveticaNow]'>$145 </p>
                    <h3 className='font-[helveticaNow] text-md'>Nike</h3>
                    <p className='text-[#878787]'>Men's Shoes</p>
                    <p className='text-[#878787]'>Size 46 </p>
                </div>
            </div>

            <div className='flex gap-4 mt-4'>
                <div className="inline-flex rounded-4xl p-2 border-1  border-[#d7d7d7] items-center gap-3">
                  <button
                    aria-label="Decrement quantity"
                    type="button"
                    className="nds-btn nds-button--icon-only btn-tertiary-dark btn-responsive"
                  >
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" > <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M13.75 10v7m-3.5-7v7m-3.5-8.5V17c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25V7.75h2.25m-10-3h3.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4.5" /></svg>
                  </button>

                  <div aria-label="Quantity" className="css-827vyq e5w47t81">
                    1
                  </div>

                  <button
                    aria-label="Increment quantity"
                    type="button"
                    className="nds-btn nds-button--icon-only btn-tertiary-dark btn-responsive"
                    data-automation="increment-quantity-button"
                  >
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" > <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M18 12H6m6 6V6" /></svg>
                  </button>
                </div>


                <div className='p-2 border-1 border-[#d7d7d7] inline-flex rounded-[50%]'>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.566 5.75c.984 0 1.91.385 2.606 1.082a3.707 3.707 0 010 5.228L12 18.25l-6.172-6.19a3.707 3.707 0 010-5.227A3.656 3.656 0 018.434 5.75c.985 0 1.91.385 2.606 1.082l.565.567.395.396.394-.396.566-.567a3.658 3.658 0 012.606-1.082"></path></svg> 
                </div>
            </div>
            <div className='flex flex-col gap-3 mt-4'>
                <div>
                    <h3 className='font-[helveticaNow]'>Shipping</h3>
                    <p>Arrives by Thu, Aug 14</p>
                </div>

                <div>
                    <h3 className='font-[helveticaNow]'>Free Pickup</h3>
                    <p>Unavailable at Nike Fashion Valley</p>
                </div>
            </div>
        </div>


       
        <div className='mx-5 mt-4'>
            <h3 className='text-2xl font-[helveticaNow]'>Summary</h3>
            
            <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>$725.00</span>
            </div>

            <div className='flex justify-between'>
                <span>Estimated Shipping & Handling</span>
                <span>Free</span>
            </div>

            <div className='flex justify-between'>
                <span>Estimated Tax</span>
                <span>---</span>
            </div>

            <div className='flex justify-between font-[helveticaNow]'>
                <span>Total</span>
                <span>$725</span>
            </div>

            
        </div>
    </div>
  )
}

export default Cart
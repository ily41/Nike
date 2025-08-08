import React from 'react'

const Cart = ({basket,setBasket}) => {

  const changeQuan = (ch,idx) => {
      setBasket(prev =>
                     prev.map((el,elemIdx) =>
                      elemIdx === idx
                        ? { ...el, quantity: el.quantity + ch }
                        : el
      ))

      
  }

  const deleteFromBasket = (idx) => {
    setBasket(prev => prev.filter(el => el != basket[idx] ))
  }





  return (

    

    <div className='mt-4 lg:mt-0'>
        
        <div className='relative  w-full flex justify-center'>
            <div className='w-11/12 lg:hidden '>

                <input type="text" className='bg-[#f5f5f5] placeholder:pl-9 w-full hover:bg-[#e5e5e5] rounded-4xl p-2' placeholder='Search' />

                <div className='absolute top-0 p-2 rounded-[50%]  bg-[#f5f5f5]'>
                  <img src="/Icons/Search-icon.svg" alt="Search" />
                </div>

            </div>
        </div>
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>

        <section className=' lg:w-3/5 lg:mx-auto lg:flex  '>
          <div className='w-full'>
            <div className='flex flex-col  lg:items-start items-center '>
                <h3 className='text-2xl font-[helveticaNow] lg:mb-4'>Bag</h3>
                <span className='font-[helveticaNow] text-[#4a4a4a] lg:hidden'><span className='text-[#979797] '>5 Items</span> | $725.00</span>
            </div>

            <hr className="px-4 my-4 lg:hidden text-[#b3b3b3]" />
            {/* cart element */}
            {
              basket.length > 0 ? 
            basket.map((el,idx) => (
              
                <div key={idx} className='mx-5 lg:mx-0 lg:w-full'>
                  <div className='w-full h-[150px]  flex gap-4'>
                      <img className='' src= {el.image} alt="" />
                      <div className='flex w-full flex-col '>
                          <p className='font-[helveticaNow] lg:hidden'>${el.price * el.quantity}.00 </p>
                          <h3 className='font-[helveticaNow]  lg:flex lg:justify-between lg:order-0 text-md'>{el.name}  <p className='hidden lg:block font-[helveticaNow]'>${el.price * el.quantity}.00 </p></h3>
                          <p className='text-[#878787]'>{el.gender}'s Shoes</p>
                          <p className='text-[#878787]'>Size {el.size} </p>
                      </div>
                  </div>

                  <div className='flex gap-4 mt-4'>
                      <div className="inline-flex rounded-4xl p-2 border-1  border-[#d7d7d7] items-center gap-3">
                        <button
                            onClick={() => {
                                if (el.quantity === 1) {
                                  deleteFromBasket(idx);
                                } else {
                                  changeQuan(-1, idx);
                                }
                              }}                          aria-label="Decrement quantity"
                          type="button"
                          className="nds-btn nds-button--icon-only btn-tertiary-dark btn-responsive"
                        >
                          {el.quantity == 1 ? 
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" > <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M13.75 10v7m-3.5-7v7m-3.5-8.5V17c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25V7.75h2.25m-10-3h3.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4.5" /></svg>
                                 :
                          <svg   className='cursor-pointer' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M18 12H6"></path></svg>
                          }

                        </button>

                        <div aria-label="Quantity" className="css-827vyq e5w47t81">
                          {el.quantity}
                        </div>

                        <button
                          onClick={() => changeQuan(1,idx)}
                          aria-label="Increment quantity"
                          type="button"
                          className="nds-btn nds-button--icon-only btn-tertiary-dark btn-responsive"
                          data-automation="increment-quantity-button"
                        >
                          
                        <svg  className='cursor-pointer' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" > <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M18 12H6m6 6V6" /></svg>
                       
                        </button>
                      </div>


                      <div className='p-2 border-1 border-[#d7d7d7] inline-flex rounded-[50%]'>
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.566 5.75c.984 0 1.91.385 2.606 1.082a3.707 3.707 0 010 5.228L12 18.25l-6.172-6.19a3.707 3.707 0 010-5.227A3.656 3.656 0 018.434 5.75c.985 0 1.91.385 2.606 1.082l.565.567.395.396.394-.396.566-.567a3.658 3.658 0 012.606-1.082"></path></svg> 
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
                  <hr className=" hidden lg:block px-4 my-4  text-[#b3b3b3]" />
                </div>
                
            )) : <h3>No items found</h3>
            
            }
            
            
            
          </div>



          <div className='mx-5 flex lg:min-w-[300px] flex-col gap-2 mt-4'>
            <h3 className='text-2xl font-[helveticaNow]'>Summary</h3>
            
            <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>${basket.reduce((total, item) => total + item.price * item.quantity, 0)}.00</span>
            </div>

            <div className='flex justify-between'>
                <span>Estimated Shipping & Handling</span>
                <span>Free</span>
            </div>

            <div className='flex justify-between'>
                <span>Estimated Tax</span>
                <span>---</span>
            </div>

            
            <hr className=" hidden lg:block px-4 my-4  text-[#b3b3b3]" />

            <div className='flex justify-between font-[helveticaNow]'>
                <span>Total</span>
                <span>${basket.reduce((total, item) => total + item.price * item.quantity, 0)}.00</span>
            </div>

            <hr className=" hidden lg:block px-4 my-4  text-[#b3b3b3]" />

            <span className='text-md'>You qualify for <b>Free Shipping</b>  as a Member! <u>Join us</u> or  <u>Sign in</u></span>
            <div className='flex gap-2 items-center '>
              <div className='bg-[#007D48] w-4/5 h-[6px] rounded-xl'></div>
              <span>$50</span>
            </div>

            <div>
            <button className="w-full py-4 flex gap-3 justify-center cursor-pointer items-center rounded-4xl bg-black text-white border-2 mt-2   font-[helveticaNow]"> Checkout</button>
            <button className="w-full py-2 flex gap-3 justify-center cursor-pointer items-center rounded-4xl text-black border-2 mt-2  border-[#d7d7d7] font-[helveticaNow]"> <img className='h-[25px]' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" alt="" /></button>

            </div>

            

            
          </div>
        </section>
    </div>
  )
}

export default Cart
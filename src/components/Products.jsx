import React, { useState } from 'react'
import Card from './Card'
import { Link } from 'react-router'

const Products = () => {

    const [showFilter, setShowFilter] = useState(true)
  return (
    <>
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>
        <div className='mx-6 lg:mx-10'>
            <h2 className='font-[helveticaNow] lg:hidden text-xl my-6'>Mens Shoes & Sneakers</h2>
            <div>
                <ul className='flex gap-5 overflow-x-scroll lg:hidden whitespace-nowrap scrollbar-hide text-black text-lg  shrink-0 font-[helveticaNow]'>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                    <li>Something long</li>
                </ul>
                <hr className='px-4 mt-4 lg:hidden text-[#b3b3b3]'/>

                <div className='flex my-5 justify-between'>
                    <span className='lg:hidden'>80 results</span>
                    <h2 className='font-[helveticaNow] hidden lg:block text-2xl'>Picante Red</h2>

                    <div className='flex'>
                        <button 
                            onClick={() => {
                                if (window.innerWidth < 1024) {
                                  console.log("Mobile action");
                                } else {
                                    setShowFilter(prev => !prev)
                                    console.log(showFilter)
                                }
                                                }}
                            className='flex gap-3 font-[helveticaNow] rounded-2xl px-4 py-1 border-1 lg:border-0'>
                              <div>
                                <span className='hidden mr-2 font-[helveticaNow] lg:inline'>Show Filters</span>
                                <span className="lg:hidden">Filter</span>
                              </div>
                              <svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path>
                              </svg>
                        </button>

                        <button className='flex gap-3 font-[helveticaNow] rounded-2xl px-4 py-1 border-1 lg:border-0'>Sort By <img src="../public/Icons/down-arrow.svg" alt="" /></button>
                    </div>
                </div>
            </div> 
        </div>
        <section className='flex  lg:mx-10'>
            {showFilter && <div className=' hidden lg:flex lg:flex-col mr-18'>
                <ul className='font-[helveticaNow] text-lg flex flex-col gap-2'>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                </ul>

                <hr className='px-4 my-4  text-[#b3b3b3]'/>

                <div className='flex w-38 cursor-pointer justify-between'>
                    <span>Sale & Offers</span>
                    <img  className ="w-8" src="../public/Icons/down-arrow.svg" alt="" />
                </div>

                <hr className='px-4  my-4 text-[#b3b3b3]'/>





            </div> }
            

            <div className='grid grid-cols-2 lg:grid-cols-3  items-center justify-center gap-4'>
                <Link className='cursor-pointer' to="/details"><Card /></Link>
                
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    </>
  )
}

export default Products
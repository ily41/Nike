import React from 'react'
import { Link } from 'react-router'

const MainPageUI = ({cardInfo}) => {
  console.log("info",cardInfo.components.length)
  return (
     <div className='mt-8'>
            
              <div className="hidden sm:flex  justify-between items-center mx-5">
                <h2 className="text-2xl px-8 font-thin font-[helveticaNow]">{cardInfo.title}</h2>
                {cardInfo.title == "Gear up by Sport" ? <></> : 
                <div className="flex gap-3">
                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                  </div>

                  <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#CACACB]">
                    <img src="../public/Icons/right-arrow.svg" alt="" />
                  </div>

                </div>
                }

              </div>
            
            
            
            <section className="flex w-full p-8  text-lg font-semibold overflow-x-scroll  scrollbar-hide  gap-5 ">

                {cardInfo.components.map((item,idx) => (
                          <Link to={`/products/${item.slug}`} state={{title:item.buttonTitle}} key={idx} className={` relative min-w-[40%] max-w-[70%] lg:flex-1 ${cardInfo.components.length <=  3 ? 'lg:max-w-none lg:min-w-0' : '' }  flex-shrink-0`}> 
                            <img className = " h-auto w-full object-cover" src={item.imageURL} alt="" />
                            {cardInfo.title === "Shop by Collection" ? (
                              <>
                                <h3 className="mt-2 text-sm sm:text-lg">{item.secondTitle}</h3>
                                <h3 className="mt-2 text-lg sm:text-xl  ">{item.buttonTitle}</h3> 
                              </>
                            ) : (
                              <>
                                <h3 className="mt-5 sm:hidden">{item.buttonTitle}</h3>
                                <button className="hidden sm:block absolute bg-white text-black rounded-3xl font-medium px-[14px] py-[3px] tracking-tighter text-sm bottom-3 left-3 lg:bottom-9 lg:left-9 lg:text-lg lg:px-[16px] lg:py-[5px]">
                                  {item.buttonTitle}
                                </button>
                              </>
                            )}

                          
                          </Link>
                )

                )}
              
             
            </section>
        </div>
  )
}

export default MainPageUI
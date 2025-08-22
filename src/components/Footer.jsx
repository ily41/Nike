import React, { useContext, useEffect, useState } from 'react'
import { JordanContext } from '../provider/context';
import { Link } from 'react-router';

const Footer = () => {

    const {jordanState} = useContext(JordanContext)
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
      const checkSize = () => setIsLarge(window.innerWidth >= 640);
      checkSize();
      window.addEventListener("resize", checkSize);
      return () => window.removeEventListener("resize", checkSize);
    }, []);
    
  return (
    <footer className={`${jordanState ? 'dark bg-[#1F1F21] text-white' : 'bg-white text-black'}`}>
        <div className='py-10 flex justify-center flex-col gap-8 items-center'>
            {jordanState ? 
                <svg aria-hidden="true" className="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="78px" height="78px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                :
                <img src="../public/Icons/Logo.svg" alt="" />
            }
            <ul className='flex items-center gap-3 text-base font-semibold'>
                <li className=' pr-2'>Find a Store</li>
                <li className=' pr-2'>Help</li>
                <li className=' pr-2'>Join Us</li>
                <li>Sign In</li>
            </ul>
        </div>

        <div className='px-4 font-[helveticaNow]'>

            <div className='flex flex-col sm:flex-row sm:justify-between lg:mx-15 my-18 gap-4'>

            <div>
              <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer font-semibold text-[#707072]">
                  <h4 className={`text-xl mb-5 text-black ${jordanState && 'text-white'}`}>Featured</h4>
                </summary>
                <ul className="mt-3 flex flex-col gap-3 pl-10  sm:pl-0 font-semibold text-[#8f8f8f]">
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`}><Link to="/products/airforce" state={{title: "Air Force 1 Products"}}>Air Force 1</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/jordan" state={{title: "Jordan Products"}}>Jordan 1</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/airmax" state={{title: "Air Max Dn Products"}}>Air Max Dn</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/vomero" state={{title: "Vomero Products"}}>Vomero</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/metcon" state={{title: "Metcon Products"}}>Metcon</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/city" state={{title: "City Products"}}>City</Link></li>
                </ul>
              </details>
            </div>
            <div>
              <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer font-semibold text-[#707072]">
                  <h4 className={`text-xl mb-5 text-black ${jordanState && 'text-white'}`}>Shoes</h4>
                </summary>
                <ul className="mt-3 flex flex-col cursor-pointer gap-3 pl-10 sm:pl-0 font-semibold text-[#707072]">
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes" state={{title: "All Shoes Products"}}>All Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/jordan" state={{title: "Jordan Shoes Products"}}>Jordan Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/running" state={{title: "Running Shoes Products"}}>Running Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/basketball" state={{title: "Basketball Shoes Products"}}>Basketball Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/training" state={{title: "Training Shoes Products"}}>Training Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/soccer" state={{title: "Soccer Shoes Products"}}>Soccer Shoes</Link></li>
                </ul>
              </details>
            </div>
            <div>
              <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer font-semibold text-[#707072]">
                  <h4 className={`text-xl mb-5 text-black ${jordanState && 'text-white'}`}>Clothing</h4>
                </summary>
                <ul className="mt-3 flex flex-col gap-3 font-semibold text-[#707072]">
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-clothing" state={{title: "All Clothing Products"}}>All Clothing</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/hoodies" state={{title: "Hoodies & Sweatshirts Products"}}>Hoodies & Sweatshirts</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/skirts-dresses" state={{title: "Skirts & Dresses Products"}}>Skirts & Dresses</Link></li>
                </ul>
              </details>
            </div>
            <div>
              <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer font-semibold text-[#707072]">
                  <h4 className={`text-xl mb-5 text-black ${jordanState && 'text-white'}`}>Kids</h4>
                </summary>
                <ul className="mt-3 flex flex-col gap-3 pl-10 sm:pl-0 font-semibold text-[#707072]">
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/toddlers" state={{title: "Infant & Toddler Shoes Products"}}>Infant & Toddler Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-shoes/kids" state={{title: "Kids Shoes Products"}}>Kids Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/basketball/kids" state={{title: "Kids Basketball Products"}}>Kids Basketball Products</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/jordan-kids-shoes" state={{title: "Kids Jordan Shoes Products"}}>Kids Jordan Shoes</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/all-clothing/kids" state={{title: "Kids Clothing Products"}}>Kids Clothing</Link></li>
                  <li className={`hover:text-black ${jordanState && 'hover:text-white'}`} ><Link to="/products/backpack/kids" state={{title: "Kids Backpacks Products"}}>Kids Backpacks</Link></li>
                </ul>
                
              </details>
            </div>


            

            </div>

            <hr className={`px-4 ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>
            
            <div className='block lg:flex justify-between lg:mx-15 mb-15'>
                <div>
        <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer font-semibold text-[#707072]">
                <div className='flex lg:flex-col justify-between mt-10'>
                    <p className={`${jordanState && 'text-white'}`}>Resources</p>
                    {jordanState ? 
                        <svg className='lg:hidden' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25L12 12l3.75-3.75"></path>
                        </svg>
                        :
                        <img className='lg:hidden' src="./Icons/down-arrow.svg" alt="" />
                    }
                </div>
            </summary>
            <ul className='mt-7 flex flex-col gap-3 text-sm text-[#707072] pl-10 sm:pl-0'>
                <li>Gift Cards</li>
                <li>Find a Store</li>
                <li>Membership</li>
                <li>Nike Journal</li>
                <li>Site Feedback</li>
            </ul>
        </details>
                </div>

                <hr className={`px-4 mt-4 lg:hidden ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>

                <div>
        <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer font-semibold text-[#707072]">
                <div className='flex lg:flex-col justify-between mt-10'>
                    <p className={`${jordanState && 'text-white'}`}>Help</p>
                    {jordanState ? 
                        <svg className='lg:hidden' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25L12 12l3.75-3.75"></path>
                        </svg>
                        :
                        <img className='lg:hidden' src="./Icons/down-arrow.svg" alt="" />
                    }
                </div>
            </summary>
            <ul className='mt-7 flex flex-col gap-3 text-sm text-[#707072] pl-10 sm:pl-0'>
                <li>Get Help</li>
                <li>Order Status</li>
                <li>Shipping and Delivery</li>
                <li>Returns</li>
                <li>Order Cancellation</li>
                <li>Payment Options</li>
                <li>Gift Card Balance</li>
                <li>Contact Us</li>
            </ul>
        </details>
                </div>

                <hr className={`px-4 mt-4 lg:hidden ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>

                <div>
        <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer font-semibold text-[#707072]">
                <div className='flex lg:flex-col justify-between mt-10'>
                    <p className={`${jordanState && 'text-white'}`} >Company</p>
                    {jordanState ? 
                        <svg className='lg:hidden' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25L12 12l3.75-3.75"></path>
                        </svg>
                        :
                        <img className='lg:hidden' src="./Icons/down-arrow.svg" alt="" />
                    }
                </div>
            </summary>
            <ul className='mt-7 flex flex-col gap-3 text-sm text-[#707072] pl-10 sm:pl-0'>
                <li>About Nike</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Purpose</li>
                <li>Sustainability</li>
            </ul>
        </details>
                </div>

                <hr className={`px-4 mt-4 lg:hidden ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>

                <div>
        <details open={isLarge} className="[&>summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer font-semibold text-[#707072]">
                <div className='flex lg:flex-col justify-between mt-10'>
                    <p className={`${jordanState && 'text-white'}`} >Promotions and Discounts</p>
                    {jordanState ? 
                        <svg className='lg:hidden' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25L12 12l3.75-3.75"></path>
                        </svg>
                        :
                        <img className='lg:hidden' src="./Icons/down-arrow.svg" alt="" />
                    }
                </div>
            </summary>
            <ul className='mt-7 flex flex-col gap-3 text-sm text-[#707072] pl-10 sm:pl-0'>
                <li>Student</li>
                <li>Military</li>
                <li>Teacher</li>
                <li>First Responders & Medical Professionals</li>
                <li>Birthday</li>
            </ul>
        </details>
                </div>

                <hr className={`px-4 mt-4 lg:hidden ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>

                <div className='flex flex-col justify-between mt-10 text-[#707072]'>
        <p className='flex gap-3 items-center text-sm'>
            <svg aria-hidden="true" className="css-npy3on" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
            United States
        </p>
                </div>

                <hr className={`px-4 mt-4 lg:hidden ${jordanState ? 'border-[#39393B]' : 'border-[#b3b3b3]'}`}/>
            </div>
            
            <p className='text-[#7e7e7e] my-4 lg:mx-15'>&copy; 2025  Nike, Inc. All Rights Reserved</p>

            <ul className='text-[#7e7e7e] text-sm lg:mx-15 flex flex-col lg:flex-row mb-20 gap-2'>
                <li className='flex gap-1'>
                    Guides 
                    {jordanState ? 
                        <svg className="w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" fill="none">
                            <path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25L12 12l3.75-3.75"></path>
                        </svg>
                        :
                        <img className="w-4 h-4" src="/Icons/down-arrow.svg" alt="" />
                    }
                </li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>
                <li className='flex gap-2'>
                    <img src="../public/Icons/privacy-icon.png" alt="" />
                    Your Privacy Choices
                </li>
                <li>Ca Supply Chains Act</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
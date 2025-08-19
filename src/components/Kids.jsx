import React from 'react'
import Main from './Main'
import MainPageUI from './MainPageUI'
import cardInfo from '../provider/cardInfo.json'
import Classics from './Classics'
import { Link } from 'react-router'

const Kids = () => {
  return (
    <div >
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>

        <section>
            <div className='font-[helveticaNow]  p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:justify-between gap-3'>
                <span className='text-2xl'>Kids</span>
                <div className='flex gap-6'>
                    <Link to="/products/kids/all-shoes" state={{title: "Kids Shoes"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Shoes</span>
                    </Link>
                    <Link to="/products/kids/all-clothing" state={{title: "Kids Clothing"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Clothing</span>
                    </Link>
                    <Link to="/products/kids" state={{title: "Kids Accessories"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Accessories</span>
                    </Link>
                </div>
                <div className='hidden lg:block'></div>
            </div>
        </section>

        <section >
            <Link to="/products/kids" state={{title: "Kids Back to School"}} className='relative cursor-pointer'>
                <img className='h-[70vh] w-full object-cover sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_576,c_limit/a0520c4f-d7ab-437c-9450-bcf360b5543d/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
                <img className='h-[45vh] w-full object-cover hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_576,c_limit/a0520c4f-d7ab-437c-9450-bcf360b5543d/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
                <div className='font-[helveticaNow] absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center  gap-2 p-8 text-center '>
                    <div>
                        <h1 className='font-[helveticaNowBold] leading-9  uppercase [@media(min-width:435px)]:whitespace-nowrap tracking-tighter text-3xl sm:text-4xl lg:text-5xl  text-white'>Study Hard.</h1>
                        <h1 className='font-[helveticaNowBold]   uppercase [@media(min-width:435px)]:whitespace-nowrap tracking-tighter text-3xl sm:text-4xl lg:text-5xl   text-white'>Play Harder.</h1>
                    </div>
                    <p className='lg:text-xl text-white'>Get back to class and back to sport.</p>
                    <button className='bg-white text-black rounded-4xl p-2 px-4 flex-none hover:bg-[#707072] cursor-pointer'>Shop</button>
                </div>
            </Link>
        </section >

        <section className='mt-14 ml-6'>
            <div className="hidden sm:flex justify-between items-center mx-5">
              <h2 className="text-2xl px-8 font-thin font-[helveticaNow]">The Latest</h2>
              <div className="flex gap-3">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]">
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                </div>

                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#CACACB]">
                  <img src="../public/Icons/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>

            <div className='flex overflow-x-scroll pb-4 mt-5 gap-3 '>
                <Link to="/products/kids/new-arrivals" state={{title: "Kids' New Arrivals"}} className='min-w-[80%] sm:min-w-[30%]'>
                    <img className='w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_668,c_limit/bf0082c0-19e7-40e9-8ed2-04aa634b9d25/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                </Link>
                <Link to="/products/kids/best-sellers" state={{title: "Kids' Best Sellers"}}  className='min-w-[80%] sm:min-w-[30%]'>
                    <img className='w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_668,c_limit/83feb045-1516-4e92-b3cf-7674f401fe07/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                </Link>
                <Link to="/products/kids/running" state={{title: "Kids' Retro Running Shoes"}} className='min-w-[80%] sm:min-w-[30%]'>
                    <img className='w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_668,c_limit/510b61d1-11f3-4359-973c-1e1f083e046d/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                </Link>
                <Link to="/products/kids/running" state={{title: "Teen Running Shoes"}} className='min-w-[80%] sm:min-w-[30%]'>
                    <img className='w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_399,c_limit/fa8c9fb9-4667-4bd2-b801-8e5211e1760c/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                </Link>
                <Link to="/products/kids/jordan" state={{title: "Kids' Jordan Products"}} className='min-w-[80%] sm:min-w-[30%]'>
                    <img className='w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_668,c_limit/27cbc5e2-323a-45ef-aec1-3cff689571ad/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                </Link>
            </div>
        </section>


        <section className='mt-19 mx-14 sm:mx-20'>
            <span className='font-[helveticaNow] text-2xl'>First Day Flex</span>
            <div className='flex gap-3 mt-3 overflow-x-scroll scrollbar-hide'>
                <Link  to="/products/kids/all-clothing" state={{title: "Kids Back to School Clothing"}} className='min-w-[60%] sm:min-w-0'>
                    <img className='mb-4' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/20e4ad85-017c-43f5-ba4f-402a804ed008/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                    <span className=' text-xl font-[helveticaNow]'>Day-One Essentials</span>
                </Link >  
                <Link  to="/products/kids/all-shoes" state={{title: "Kids Back to School Shoes"}} className='min-w-[60%] sm:min-w-0'>
                    <img className='mb-4' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/364b91d6-b683-4da1-9390-1dcc28c1bd58/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                    <span className=' text-xl font-[helveticaNow]'>Top Kicks: Featuring V5 RNR</span>
                </Link>
                <Link to="/products/kids/all-shoes" state={{title: "Kids Back to School Shoes"}} className='min-w-[60%] sm:min-w-0'>
                    <img className='mb-4' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/7e321b73-60e3-4f5f-8448-12098b48e2dd/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
                    <span className=' text-xl font-[helveticaNow]'>Bags and Backpacks</span>
                </Link>
            </div>
        </section>

        <section className='mt-19 mx-10'>
            <span className='text-3xl font-[helveticaNow]'>Coming Soon</span>
            <img className='mt-5 lg:hidden w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_870,c_limit/1ea01aab-4cd7-4a51-bb50-c6a41b2f2cad/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
            <img className='mt-5 hidden lg:block w-full object-cover' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1714,c_limit/777a9e03-f231-4646-b4f8-70625893879d/nike-kids-shoes-clothing-and-accessories-nike-com.png" alt="" />
            <div className='flex mt-10 flex-col gap-4 sm:items-center font-[helveticaNow]'>
                <span className='text-2xl'>Dunk Low x LEGO® Collection</span>
                <h3 className='font-[helveticaNowBold] uppercase text-5xl sm:text-7xl tracking-[-0.2rem]'>Primed to Shine</h3>
                <div className='flex gap-3 mt-4'>
                    <button className='text-white bg-black p-3 px-6 text-2xl lg:text-lg lg:p-3 lg:px-4  rounded-4xl'>Get Notified</button>
                    <button className='text-white bg-black p-3 px-6 text-2xl lg:text-lg lg:p-3 lg:px-4  rounded-4xl'>Explore</button>
                </div>  
            </div>

        </section>

        <section className='mt-19 mx-10'>
            <MainPageUI cardInfo={cardInfo[3]}/>
        </section>


        <section className='mt-19 mx-20 font-[helveticaNow]'>
            <span className=' text-2xl'>Shop By Age</span>
            <div className='flex mt-5 overflow-x-scroll scrollbar-hide gap-4'>
                <Link to="/products/toddlers" state={{title: "Babies & Toddlers (0-3 yrs)"}} className='mt-3 min-w-[70%] cursor-pointer lg:min-w-[35%] flex flex-col '>
                    <img className='w-full max-h-[400px] lg:max-h-[550px] items-start object-cover' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_500,c_limit/c059b149-cc3f-4aae-98d5-4109c7eeee0c/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
                    <div className='mt-3 mb-6 flex flex-col gap-3'>
                        <h3 className='text-xl'>Babies and Toddlers</h3>
                        <span className='text-[#767676]'>Explore apparel (0M–4T) and shoes (0C–10C).</span>
                    </div>
                    <button className='text-white hover:bg-[#707072]  self-start bg-black p-2 px-4 text-;g rounded-4xl'>Shop</button>
                </Link>

                <Link to="/products/little-kids" state={{title: "Little Kids' Products"}} className='mt-3 min-w-[70%] cursor-pointer lg:min-w-[35%] flex flex-col '>
                    <img className='w-full max-h-[400px] lg:max-h-[550px] items-start object-cover' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_569,c_limit/ebab8a51-30a6-4808-ad0f-8a833081bb7a/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
                    <div className='mt-3 mb-6 flex flex-col gap-3'>
                        <h3 className='text-xl'>Little Kids</h3>
                        <span className='text-[#767676]'>Explore apparel (4–7) and shoes (10.5C–3Y).</span>
                    </div>
                    <button className='text-white hover:bg-[#707072] self-start bg-black p-2 px-4 text-;g rounded-4xl'>Shop</button>
                </Link>

                <Link to="/products/big-kids" state={{title: "Big Kids' Products"}} className='mt-3 min-w-[70%] cursor-pointer lg:min-w-[35%] flex flex-col '>
                    <img className='w-full max-h-[400px] lg:max-h-[550px] items-start object-cover' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_569,c_limit/195b4bd3-811d-48f4-b3ed-7e78a1bf2090/nike-kids-shoes-clothing-and-accessories-nike-com.jpg" alt="" />
                    <div className='mt-3 mb-6 flex flex-col gap-3'>
                        <h3 className='text-xl'>Big Kids</h3>
                        <span className='text-[#767676]'>Explore apparel (XS–XL) and shoes (3.5–7Y).</span>
                    </div>
                    <button className='text-white hover:bg-[#707072] self-start bg-black p-2 px-4 text-;g rounded-4xl'>Shop</button>
                </Link>

            </div>
        </section>


        <section className='mt-20 '>
            <Classics />
        </section>
    </div>
  )
}

export default Kids
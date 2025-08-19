import React from 'react'
import MainPageUI from './MainPageUI'
import cardInfo from '../provider/cardInfo.json'
import Classics from './Classics'
import { Link } from 'react-router'

const Women = () => {
  return (
    
    <>
        <section>
            <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>
            <div className='font-[helveticaNow] items-center p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between gap-3'>
                <span className='text-2xl flex-1'>Women</span>
                <div className='flex gap-6 flex-1 justify-center whitespace-nowrap'>

                    <Link to="/products/women/all-shoes" state={{title: "Women Shoes"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Shoes</span>
                    </Link>
                    <Link to="/products/women/all-clothing" state={{title: "Women Clothing"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Clothing</span>
                    </Link>
                    <Link to="/products/women/skirts-dresses" state={{title: "Skirts & Dresses"}}>
                        <span className='cursor-pointer hover:text-[#949494] text-base'>Skirts Dresses</span>
                    </Link>
                </div>
                <div className='hidden flex-1 lg:block'></div>
            </div>
        
            <Link to="/products/women/metcon" state={{title: "Women metcon 10 Shoes"}} className='relative cursor-pointer'>
                <img className='h-[70vh] w-full object-cover sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_630,c_limit/6656d535-1da1-4414-94f9-cd63dba83591/women-s-shoes-clothing-accessories.jpg" alt="" />
                <img className=' w-full object-cover hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1424,c_limit/5b524e82-9edc-412d-8414-07161916541d/women-s-shoes-clothing-accessories.jpg" alt="" />
                <div className='font-[helveticaNow] absolute  bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center  gap-2 p-8 text-center '>
                    <h1 className='font-[helveticaNowBold]  uppercase [@media(min-width:435px)]:whitespace-nowrap tracking-tighter text-3xl sm:text-4xl lg:text-6xl text-white'>Strength Starts Here</h1>
                    <p className='lg:text-xl text-white'>Power your potential with the metcon 10.</p>
                    <button className='bg-white text-black rounded-4xl p-2 px-4 flex-none hover:bg-[#707072] cursor-pointer'>Shop</button>
                </div>
            </Link>
        </section>


        <section className="mt-15">
          <div className="p-4 pl-8">
            <span className="text-2xl font-[helveticaNow]">Trending Now</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <Link
              to="/products/airmax"
              state={{ title: "Air Max Shoes" }}
              className="relative aspect-[3/4] sm:aspect-[4/3] bg-cover bg-center 
                         bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_473,c_limit/d211b867-bd89-4362-bc86-de050e1b0067/women-s-shoes-clothing-accessories.jpg')]
                         sm:bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_786,c_limit/d9325456-fb63-4cb5-92db-307a489802c0/women-s-shoes-clothing-accessories.jpg') ]"
            >
              <div className="absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col gap-3 font-[helveticaNow] text-white">
                <span className="text-xl">Air Max Muse</span>
                <span className="text-2xl">Leaders of the Pack</span>
                <button className="bg-white w-fit hover:bg-[#707072] text-black rounded-3xl font-medium px-4 py-1 text-[17px] lg:text-base">
                  Shop
                </button>
              </div>
            </Link>

            <Link
              to="/products/women/sport"
              state={{ title: "Women Sport shoes" }}
              className="relative aspect-[3/4] sm:aspect-[4/3] bg-cover bg-center 
                         bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_324,c_limit/d1740536-0be1-4563-9b69-495c3cd025a6/nike-just-do-it.jpg')]
                         sm:bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_786,c_limit/beac877c-9523-4408-a9eb-8663e041e727/women-s-shoes-clothing-accessories.jpg')]"
            >
              <div className="absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col gap-3 font-[helveticaNow] text-white">
                <span className="text-xl">Back to Sport</span>
                <button className="bg-white w-fit hover:bg-[#707072] text-black rounded-3xl font-medium px-4 py-1 text-[17px] lg:text-base">
                  Shop
                </button>
              </div>
            </Link>
          </div>
        </section>



        <section className='mx-10'>
            <MainPageUI cardInfo={cardInfo[2]}/>
        </section>
        

        <section className="p-8">

            <div className=' pb-4  '>
                <span className='text-2xl  font-[helveticaNow] '>Fresh Fall Gear</span>
            </div>

            <div className='flex flex-col cursor-pointer sm:flex-row  text-lg font-semibold   gap-5'>
                <Link  to="/products/women/best-sellers" state={{title: "Best sellers"}} className=" relative"> 
                    <img className = "h-auto w-full object-cover" src='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_437,c_limit/91977081-4a6c-4c6f-8ad8-d0eea0f1dc3a/women-s-shoes-clothing-accessories.jpg' alt="" />
                    <div className='absolute ml-5 bottom-3 left-3 lg:bottom-9 lg:left-9'>
                        <h3 className="mt-5 text-2xl text-white">Best Sellers</h3>
                        <button className="mb-4 mt-6 hover:bg-[#707072]  bg-white w-fit text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </Link>

                <Link to="/products/women/lifestyle" state={{title: "Lifestyle Collection"}} className="relative cursor-pointer "> 
                    <img className = "h-auto w-full  object-cover" src='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_437,c_limit/b762f630-b22c-461f-86c5-71045c46aa2e/women-s-shoes-clothing-accessories.jpg' alt="" />
                    <div className='absolute ml-5 bottom-3 left-3 lg:bottom-9 lg:left-9'>
                        <h3 className="mt-5 text-2xl text-white">Lifestyle Collection</h3>
                        <button class="mb-4 mt-6 hover:bg-[#707072]  bg-white w-fit text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </Link>
            </div>

              
        </section>

        <Classics />
        
    </>
    
  )
}

export default Women
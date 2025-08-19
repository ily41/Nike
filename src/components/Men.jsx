import React from 'react'
import MainPageUI from './MainPageUI'
import cardInfo from '../provider/cardInfo.json'
import Classics from './Classics'
import { Link } from 'react-router'

const Men = () => {

    
    
  return (
    <div >
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>
        <div className='font-[helveticaNow]  p-6 lg:p-8 flex flex-col items-center lg:flex-row lg:justify-between gap-3'>
            <span className='text-2xl'>Men</span>
            <div className='flex gap-6'>
                <Link to="/products/men/all-shoes" state={{title: "Men Shoes"}}>
                    <span className='cursor-pointer hover:text-[#949494] text-base'>Shoes</span>
                </Link>
                <Link to="/products/men/all-clothing" state={{title: "Men Clothing"}}>
                    <span className='cursor-pointer hover:text-[#949494] text-base'>Clothing</span>
                </Link>
                <span className='hover:text-[#949494]'>Accessories</span>
            </div>
            <div className='hidden lg:block'></div>
        </div>

        <div >
            <img className='h-[70vh] w-full object-cover sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1004,c_limit/aa3b1391-2163-4a5b-ae62-8aa681c507b3/men-s-shoes-clothing-accessories.jpg" alt="" />
            <img className=' w-full object-cover hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_981,c_limit/7db553f6-f9cb-40bb-81fc-29369512ef9f/men-s-shoes-clothing-accessories.jpg" alt="" />
            <div className='font-[helveticaNow] flex flex-col items-center  gap-2 p-8 text-center '>
                <h1 className='font-[helveticaNowBold]  uppercase whitespace-nowrap tracking-tighter text-3xl sm:text-4xl lg:text-6xl'>Vomero plus</h1>
                <p className='lg:text-xl sm:whitespace-nowrap'>More cushioning, more performance, more running</p>
                <Link to="/products/men/vomero" state={{title:"Running shoes"}}>
                    <button className='bg-black text-white  rounded-4xl p-2 px-4 flex-none hover:bg-[#707072] cursor-pointer'>Shop All</button>
                </Link>
            </div>
        </div>

        <section className="flex w-full p-8 text-lg font-semibold  scrollbar-hide  gap-5 ">
            <MainPageUI cardInfo={cardInfo[1]}/>
        </section>

        <section>
            <div className='p-8 '>
                <span className='text-2xl  font-[helveticaNow] '>Trending Now</span>
            </div>


            <div className='sm:grid sm:grid-cols-2'>
                <Link to = "/products/men/city" state={{title:"Men's City shoes"}} className="h-[50vh] relative  sm:h-[50vh] bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_878,c_limit/e1571378-d9be-42c5-8d08-1735121db22f/men-s-shoes-clothing-accessories.jpg')] bg-cover">
                    <div className='text-white absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col gap-3 font-[helveticaNow]'>
                        <span className='text-[17px]'>Designed for the City</span>
                        <span className='text-2xl'>Nike Ava Rover</span>
                        <button className="  bg-white cursor-pointer hover:bg-[#CACACB] w-fit text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </Link>
                <Link to = "/products/men/metcon" state={{title:"Metcon 10 Men shoes"}} className="h-[60vh] relative sm:h-[50vh] bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_878,c_limit/1796a684-2715-4c74-bdeb-6acc6f89d120/men-s-shoes-clothing-accessories.jpg')] bg-cover">
                    <div className='text-white absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col gap-3 font-[helveticaNow]'>
                        <span className='text-[17px]'>Metcon 10</span>
                        <span className='text-2xl'>Strength Starts Here</span>
                        <button className="  bg-white w-fit cursor-pointer hover:bg-[#CACACB] text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </Link>
                <Link to = "/products/kids/big-kids"state={{title: "Get back to school"}} className="h-[60vh] relative sm:h-[50vh] col-span-2 hidden sm:block bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1741,c_limit/668ab031-70be-4b19-8da9-fb26ab5ecd07/men-s-shoes-clothing-accessories.jpg')] bg-cover">
                    <div className='text-white absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col gap-3 font-[helveticaNow]'>
                        <span className='font-[helveticaNowBold] tracking-tighter uppercase text-6xl'>Study hard</span>
                        <span className=' font-[helveticaNowBold] tracking-tighter uppercase  text-6xl'>play harder</span>
                        <p className='font-[helveticaNow] text-lg mb-3'>Get back to class and back to sport.</p>
                        <button className="  bg-white w-fit cursor-pointer hover:bg-[#CACACB] text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </Link>

                <div className="h-[60vh] relative  col-span-2 sm:hidden bg-[url('https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_710,c_limit/70d1b452-f3e2-4dce-abb8-b2a8594d49a9/men-s-shoes-clothing-accessories.jpg')] bg-cover">
                    <div className='text-white absolute bottom-5 left-5 lg:bottom-9 lg:left-9 flex flex-col  font-[helveticaNow]'>
                        <span className='font-[helveticaNowBold]  tracking-tighter  uppercase text-5xl '>Study hard</span>
                        <span className=' font-[helveticaNowBold] tracking-tighter mb-4 uppercase text-5xl '>play harder</span>
                        <p className='font-[helveticaNow] text-lg mb-3'>Get back to class and back to sport.</p>
                        <button className="  bg-white w-fit text-black rounded-3xl font-medium px-[16px] py-[4px] tracking-tighter text-[17px]  lg:text-base lg:px-[16px] lg:py-[5px]">Shop</button>
                    </div>
                </div>
            </div>
        </section>


        <section className=' p-8 px-4 '>
                <section className=" w-10/12 font-[helveticaNow] text-2xl  mx-auto">
                            <span>Shop by Category</span>

                            <div className='flex gap-5 mt-5 text-lg overflow-x-scroll scrollbar-hide'>

                                <div  className="relative min-w-[290px] max-w-[70%] flex-shrink-0 lg:min-w-0 lg:max-w-none lg:w-1/3"> 
                                    <img className = "h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/ccca6ce7-d335-4886-bbb9-60ea6d0c77d3/men-s-shoes-clothing-accessories.jpg" alt="" />
                                    <h3 className="mt-5 ">Accessories</h3>
                                </div>



                                <Link to="/products/men/all-shoes" state={{title: "Men Shoes"}} className="relative min-w-[290px] max-w-[70%] flex-shrink-0 lg:min-w-0 lg:max-w-none lg:w-1/3"> 
                                    <img className = " h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/aad0465a-fbd4-4b70-9b66-bc0949886c1a/men-s-shoes-clothing-accessories.jpg" alt="" />
                                    <h3 className="mt-5 ">Shoes</h3>
                                </Link>

                                <Link  to="/products/men/all-clothing" state={{title: "Men Clothing"}} className="relative min-w-[290px] max-w-[70%] flex-shrink-0 lg:min-w-0 lg:max-w-none lg:w-1/3"> 
                                    <img className = " h-auto w-full object-cover" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_456,c_limit/0352e817-9aed-43f8-95e0-f51058414bea/men-s-shoes-clothing-accessories.jpg" alt="" />
                                    <h3 className="mt-5 ">Clothing</h3>
                                </Link >

                            </div>
                </section>
        </section>

        <Classics />





    </div>
  )
}

export default Men
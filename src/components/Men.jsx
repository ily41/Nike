import React from 'react'

const Men = () => {
  return (
    <div >
        <div className='w-full font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>
        <div className='font-[helveticaNow]  p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between gap-3'>
            <span className='text-2xl'>Men</span>
            <div className='flex gap-6'>
                <span className='text-base'>Shoes</span>
                <span>Clothing</span>
                <span>Accessories</span>
            </div>
            <div className='hidden lg:block'></div>
        </div>

        <div className=''>
            <img className='h-[70vh] w-full object-cover sm:hidden' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_556,c_limit/16dd7e82-b5e6-45c8-a72c-fa6ded23a161/nike-just-do-it.jpg" alt="" />
            <img className=' w-full object-cover hidden sm:block' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1186,c_limit/57a95c2a-b2b9-4089-bc80-c581a6fae0cc/nike-just-do-it.jpg" alt="" />
            <div className='font-[helveticaNow] flex flex-col items-center  gap-2 p-8 text-center '>
                <p>Nike Running</p>
                <h1 className='font-[helveticaNowBold]  uppercase whitespace-nowrap text-4xl lg:text-6xl'>more choice.</h1>
                <h1 className='font-[helveticaNowBold]  uppercase whitespace-nowrap text-4xl lg:text-6xl'>more running.</h1>
                <p className='lg:text-xl'>Pegasus. Vomero. Structure</p>
                <p className='lg:text-xl whitespace-nowrap'>More cushioning, more performance, more running</p>
                <button className='bg-black text-white rounded-4xl p-2 px-4 flex-none'>Shop All</button>
            </div>
        </div>




    </div>
  )
}

export default Men
import React from 'react'

const Main = () => {
  return (
    <main className='sm:flex h-[50vh] lg:h-[86vh]'>
        <div className='relative sm:w-2/4'>
            <img className=' lg:hidden  object-cover object-top  h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_746,c_limit/1aef9127-19f1-4479-b239-e1611b21503f/nike-just-do-it.jpg" alt="" />
            <img className='hidden  lg:block object-cover h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1213,c_limit/a62593d2-39e1-4289-bf04-c0cad4195521/nike-just-do-it.jpg" alt="" />

            <div className='absolute bottom-20 left-5'>
              <p className='text-white  text-xl'>Back to sport</p>
              <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>practice like a pro</h1>

              <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
            </div>
        </div>
        <div className='relative sm:w-2/4 '>
            <img className=' object-cover h-full w-full' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_788,c_limit/2942b327-3555-43cb-8dad-a4b0d7443ce1/nike-just-do-it.jpg" alt="" />
            {/* <img className=' object-cover h-full w-full ' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1213,c_limit/880caa52-33aa-469a-a95b-4785a784f90b/nike-just-do-it.jpg" alt="" /> */}
            <div className='absolute bottom-20 left-5'>
              <p className='text-white  text-xl'>Women's Air Jordan 3 'Starfish'</p>
              <h1 className='font-[helveticaNow] mt-2 mb-5 tracking-tighter text-white  text-2xl capitalize '>Light Work, Heavy Hitter</h1>
              <button className=' bg-white text-black rounded-3xl font-medium px-[16px] py-[6px]'>Shop</button>
            </div>
        </div>

        <div className='h-screen'></div>
    </main>
  )
}

export default Main
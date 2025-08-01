import Slider from "./Slider"


const Details = () => {

    const headerText = () => {
        return  <div className="m-5 ">
                <h3  className="font-[helveticaNow] text-xl">Air Jordan 1 Retro High OG "Black and Muslin"</h3>
                <p className="text-[#818181] font-[helveticaNow] mb-4">Men's Shoes</p>

                <span className="font-[helveticaNow] ">$185</span>
            </div>
    }

  return (
    <div>
        <div className='w-full col-span-2 font-[helveticaNow] h-[7vh] bg-[#F7F7F7] text-[#090909] text-[12px] my-2 lg:text-sm underline flex justify-center items-center'>Up to 50% Off Select Styles: Use code SPORT</div>
            
            <div className="lg:hidden">
                {headerText()}
            </div>
            

            <Slider header={false} />

            <div className="grid grid-cols-6">
                <div className="col-span-1"></div>

                <div className="inline-flex overflow-x-scroll col-span-2  max-h-[550px] w-full">
                    <div className="order-2 hidden lg:block  ">
                        <img className="  object-cover h-full  w-full rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                    </div>
                    <div className="order-1 overflow-y-scroll flex lg:flex-col  ">
                        <img className="w-30 my-8 object-cover h-30 mx-1 rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                        <img className="w-30 my-8 object-cover h-30 mx-1 rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                        <img className="w-30 my-8 object-cover h-30 mx-1 rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                        <img className="w-30 my-8 object-cover h-30 mx-1 rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                        <img className="w-30 my-8 object-cover h-30 mx-1 rounded-sm" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/556c6810-ed4f-4702-bb78-79e276fde8d2/W+NIKE+AIR+SUPERFLY.png" alt="" />
                    </div>
                </div>

                <div className="mx-5 mt-7 col-span-2">
                    <div className="hdiden lg:block">
                        {headerText()}
                    </div>
                <div className="flex justify-between w-full ">
                    <h5>Select Size</h5>
                    <h5 className="flex"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path><path stroke="currentColor" stroke-width="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path></svg> 
                        Size Guide
                    </h5>
                </div>

                <div className="custom-size-grid my-5 gap-2">
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] rounded-sm ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                    <div className="w-full py-4 bg-white border-1 flex justify-center items-center border-[#d7d7d7] ">
                        <span className="font-[helveticaNow]" >M 3.5 / W 5</span>
                    </div>
                 
                </div>

                <button className="w-full py-4 rounded-4xl bg-black text-white font-[helveticaNow]"> Add to Bag</button>
                <button className="w-full py-4 flex gap-3 justify-center items-center rounded-4xl text-black border-2 mt-2 mb-10 border-[#d7d7d7] font-[helveticaNow]"> Favorite <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path><title>non-filled</title></svg></button>
            
                <div className="mb-7">
                    <h3 className="font-[helveticaNow]">Shipping</h3>
                    <p>You'll see our shipping options at checkout</p>
                </div>

                <div className="mb-9">
                    <h3 className="font-[helveticaNow]">Free Pickup</h3>
                    <p className="pb-3 border-b-1 inline">Find a Store</p>
                </div>

                <div className="mb-5">
                    <p className="mb-5">Familiar yet fresh, the Air Max Moto 2K is ready to go for a ride. Metallic accents compliment performance-inspired details and Max Air cushioning.</p>

                    <ul className="list-disc ml-8">
                        <li>Shown: White/Metallic Silver/Black/Pink Spell</li>
                        <li>Style: HQ2056-101</li>
                    </ul>
                </div>

                <h3 className="font-[helveticaNow] text-base border-b-1 pb-1 inline">View product Details</h3>

                <button className="w-full py-3 border-b-2 mt-5 border-[#d7d7d7]">
                    <div className="flex justify-between">
                        <h3 className="font-[helveticaNow] text-lg">Shiping & Returns</h3>
                        <img className="w-6 h-6 object-cover" src="../public/Icons/down-arrow.svg" alt="" />
                    </div>

                </button>

                <button className="w-full py-3 border-b-2 mt-5 border-[#d7d7d7]">
                    <div className="flex justify-between">
                        <h3 className="font-[helveticaNow] text-lg">Reviews(4)</h3>
                        <img className="w-6 h-6 object-cover" src="../public/Icons/down-arrow.svg" alt="" />
                    </div>

                </button>
                </div>
            </div>




    
    </div>
  )
}

export default Details
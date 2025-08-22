import React from 'react'
import { Link } from 'react-router'

const Classics = () => {
  return (
     <section className="mt-5">
        <span className='p-3 font-[helveticaNow] text-2xl ml-10'>Shop the Classics</span>
        <div className="overflow-x-scroll scroll-on-hover p-3 flex gap-3">
          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to ='/products/all-shoes/air-jordan' state={{ title: "Air Jordan 1" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/6ec248e4-ed58-436a-a9cb-78f1c009b1df/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Jordan</h3>
          </Link>

          
          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to ='/products/all-shoes/dunk' state={{ title: "Air Force 1 Shoes" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/60ce51e6-ab01-46fd-a0d0-e1987fa52554/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Dunk</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to ='/products/all-shoes/field' state={{ title: "Nike Dunk Shoes" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/927d52e4-7593-40ef-ba4a-90685b225199/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Field General</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to ='/products/all-shoes/airforce' state={{ title: "Nike Field General" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/999d4075-e65c-4de9-8ad9-a54dddcc52ee/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Force 1</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to ='/products/all-shoes/airmax' state={{ title: "Nike Air Max" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/5fa3bdd7-062b-40b6-88a4-9d5802d2a6f8/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Air Max</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to='/products/all-shoes/vomero' state={{ title: "Nike Vomero Shoes" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_300,c_limit/537cf473-291c-48e9-bd29-5cb37ad013b1/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Vomero</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to='/products/cortez' state={{ title: "Nike Cortez Shoes" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/65805582-b64e-4b1d-83b8-49b69b34c41e/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">Cortez</h3>
          </Link>

          <Link className="max-w-[60%] cursor-pointer sm:max-w-[225px] flex-shrink-0" to='/products/city' state={{ title: "Nike City Shoes" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/290542af-0464-4c20-955e-4f34a697e097/nike-just-do-it.jpg" alt="" />
            <h3 className="mt-3 text-lg font-[helveticaNow]">City</h3>
          </Link>


        </div>
      </section>
  )
}

export default Classics
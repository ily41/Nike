import  { useEffect, useState } from 'react'
import Card from './Card'
import { Link, useParams } from 'react-router'
import collectionData from '../provider/collections.json'
import productData from '../provider/productsTest.json'
import Filter from './Filter'


const Products = () => {
    const [showFilter, setShowFilter] = useState(true)
    const {collectionId,gender} = useParams()
    const collections = collectionData.filter(el => el.id === Number(collectionId))[0]
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [open,setOpen] = useState(false)

   function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }



    useEffect(() => {
    const currentCollection = collectionData.find(
        el => el.id === Number(collectionId)
    );
    if (!currentCollection) return;

    


     const genderKey = gender?.toLowerCase()
     console.log(currentCollection.productIds[genderKey] )
     console.log("GENDER")
        console.log(gender)
     const genderCollectionIDs = currentCollection.productIds.genderKey ?? Object.values(currentCollection.productIds).flat()

    let filteredProducts = productData.filter(el =>
        genderCollectionIDs.includes(el.id)
    );

    setProducts(filteredProducts);
    setFiltered(filteredProducts);

}, [collectionId, gender]);


    





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
                    <div className='lg:flex items-center lg:font-[helveticaNow] lg:text-2xl'>
                            <h2 className='font-[helveticaNow] hidden lg:block text-2xl'>{collections.name}</h2>
                            <span className='lg:ml-4'>({filtered.length}) </span>
                            <span className='lg:hidden'>results</span>
                    </div>


                    <div className='flex'>
                        <button 
                            onClick={() => {
                                if (window.innerWidth < 1024) {
                                } else {
                                    setShowFilter(prev => !prev)
                                }
                                }}
                            className='flex gap-3 font-[helveticaNow] rounded-2xl px-4 py-1 border-1 lg:border-0'>
                              <div className='cursor-pointer'>
                                <span className='hidden mr-2cursor-pointer font-[helveticaNow] lg:inline'>Show Filters</span>
                                <span className="lg:hidden ">Filter</span>
                              </div>
                              <svg aria-hidden="true" className="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path>
                                <path stroke="currentColor" strokeWidth="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"></path>
                              </svg>
                        </button>

                        <button onClick={() => setOpen(!open)}  className='flex cursor-pointer relative gap-3 font-[helveticaNow] rounded-2xl px-4 py-1 border-1 lg:border-0 items-center'>Sort By
                             <img className='w-5 h-5' src="../public/Icons/down-arrow.svg" alt="" />
                                {open && 
                                <div className=' text-right p-5  absolute whitespace-nowrap flex flex-col gap-2 top-10 right-0 rounded-xl text-sm  bg-white shadow-amber-100 '>
                                    <span onClick={() => filtered.sort((a,b) => b.price - a.price)}>Price:Hig ht-Low</span>
                                    <span onClick={() => filtered.sort((a,b) => a.price - b.price)}>Price:Low-High</span>
                                </div>}
                                
                             
                             </button>
                    </div>
                </div>
            </div> 
        </div>

        
        <section className='flex  lg:mx-10'>
            <div className="hidden lg:block">
                <Filter showFilter={showFilter} setProducts={setProducts} products={products} filtered={filtered} setFiltered={setFiltered} />
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3  items-start justify-center gap-4'>
                
                {filtered.map((el,idx) => (
                    <Link key={idx} to={`/details/${el.id}`}><Card key={el.id} color={el.colors} price={el.price} name={el.name} gender={el.genders} image={el.image}/></Link>
                ))}
                
            </div>
        </section>

        
    </>
  )
}

export default Products
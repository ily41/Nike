import { useEffect, useState } from 'react'
import FIlterUi from './FIlterUi';

const Filter = ({showFilter,products,filtered,setFiltered}) => {
    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);
    const [unisex, setUnisex] = useState(false);
    const [twentyF, setTwentyF] = useState(false)
    const [fiftyH, setFiftyH] = useState(false)
    const [HundF, setHundF] = useState(false)
    const [overHf, setOverHf] = useState(false)
    const [bigKids,setBigKids] = useState(false)
    const [littleKids,setLittleKids] = useState(false)
    const [toddlers,setToddlers] = useState(false)



    useEffect(() => {
      setFiltered([...products])
        const gendersToFilter = []
      
        if (men) gendersToFilter.push("Men")
        if (women) gendersToFilter.push("Women")
        if (unisex) gendersToFilter.push("Unisex")
        if (bigKids) gendersToFilter.push("Big Kids")
        if (littleKids) gendersToFilter.push("Little Kids")
        if (toddlers) gendersToFilter.push("Baby/Toddler")

        if(gendersToFilter.length > 0) {
          setFiltered(prev => prev.filter(el => gendersToFilter.some(g => el.genders.includes(g))))
        }

        const pricesToFilter=[]
        if(twentyF) pricesToFilter.push("25")
        if(fiftyH) pricesToFilter.push("50")
        if(HundF) pricesToFilter.push("100")
        if(overHf) pricesToFilter.push("150")

        if (pricesToFilter.length > 0) {
            setFiltered(prev => {
              return prev.filter(el => {
                return (
                  (pricesToFilter.includes("25") && el.price >= 25 && el.price < 50) ||
                  (pricesToFilter.includes("50") && el.price >= 50 && el.price < 100) ||
                  (pricesToFilter.includes("100") && el.price >= 100 && el.price < 150) ||
                  (pricesToFilter.includes("150") && el.price >= 150)
                );
              });
            });
          }



        console.log("filter filtered")
        console.log(filtered)
    },[men,women,unisex,twentyF,fiftyH,HundF,overHf,bigKids,littleKids,toddlers])

    return (
        showFilter && <div className=' hidden sticky top-10 lg:flex lg:flex-col mr-18'>
                    <ul className='font-[helveticaNow] cursor-pointer text-lg flex flex-col gap-2'>
                        <li>Basketball</li>
                        <li>Lifestyle</li>
                        <li>Running</li>
                        <li>Jordan</li>
                    </ul>

                    <hr className='px-4 my-4  text-[#b3b3b3]'/>
                    <details className="group w-40" >
                      <summary className="flex cursor-pointer justify-between items-center">
                        <span>Gender</span>
                        <img className="w-4 transition-transform duration-300 group-open:rotate-180 origin-center" src="../public/Icons/down-arrow.svg" alt="arrow" />
                      </summary>

                      <div className="mt-2 space-y-1">
                        <FIlterUi state={men} setState={setMen} name="Men" />
                        <FIlterUi state={women} setState={setWomen} name="Women" />
                        <FIlterUi state={unisex} setState={setUnisex} name="Unisex" />
                      </div>
                    </details>


                    <hr className='px-4  my-4 text-[#b3b3b3]'/>


                   <details className="group" open>
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <span>Shop by Price</span>
                      <img
                        className="w-4 transition-transform duration-300 group-open:rotate-180 origin-center"
                        src="../public/Icons/down-arrow.svg"
                        alt=""
                      />
                    </summary>
                    <div className="mt-2">
                      <FIlterUi state={twentyF} setState={setTwentyF} name="$25 - $50" />
                      <FIlterUi state={fiftyH} setState={setFiftyH} name="$50 - $100" />
                      <FIlterUi state={HundF} setState={setHundF} name="$100 - $150" />
                      <FIlterUi state={overHf} setState={setOverHf} name="Over $150" />
                    </div>
                  </details>


                    <hr className="px-4 my-4 text-[#b3b3b3]" />

                    <details className="group" open>
                      <summary className="flex justify-between items-center cursor-pointer">
                        <span>Kids</span>
                        <img className="w-4 transition-transform duration-300 group-open:rotate-180 origin-center" src="../public/Icons/down-arrow.svg" alt="" />
                      </summary>
                      <div className="mt-2">
                        <FIlterUi state={bigKids} setState={setBigKids} name="Big Kids" />
                        <FIlterUi state={littleKids} setState={setLittleKids} name="Little Kids" />
                        <FIlterUi state={toddlers} setState={setToddlers} name="Baby/Toddlers" />
                      </div>
                    </details>


                    <hr className='px-4  my-4 text-[#b3b3b3]'/>

                  </div> 
    )
}

export default Filter
  import { useContext, useEffect, useState } from 'react'
  import FIlterUi from './FIlterUi';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { FilterContext } from '../provider/context';


  const Filter = () => {
      const {showFilter,products,setFiltered} = useContext(FilterContext)

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

      const [colorFilters,setColorFilters] = useState([
                    { name: "black", selected: false },
                    { name: "orange", selected: false },
                    { name: "white", selected: false },
                    { name: "blue", selected: false },
                    { name: "green", selected: false },
                    { name: "red", selected: false },
                    { name: "brown", selected: false },
                    { name: "yellow", selected: false },
                    { name: "pink", selected: false },
                    { name: "gray", selected: false },
                    { name: "purple", selected: false }
                  ])

      const colors = [
                        { name: "black", hex: "#000000" },
                        { name: "orange", hex: "#FFA500" },
                        { name: "white", hex: "#FFFFFF" },
                        { name: "blue", hex: "#0000FF" },
                        { name: "green", hex: "#008000" },
                        { name: "red", hex: "#FF0000" },
                        { name: "brown", hex: "#A52A2A" },
                        { name: "yellow", hex: "#FFFF00" },
                        { name: "pink", hex: "#FFC0CB" },
                        { name: "gray", hex: "#808080" },
                        { name: "purple", hex: "#800080" }
                      ]


      
      const toggleColor = (name) => {
        setColorFilters(prevColors =>
          prevColors.map(color =>
            color.name === name ? { ...color, selected: !color.selected } : color
          )
        );
      };


        const handleCollection = (slug) => {
          setFiltered(prev => prev.filter(el => el.categories.includes(slug)))
        }


      
      useEffect(() => {
        let result = [...products]
          const gendersToFilter = []
        
          if (men) gendersToFilter.push("Men")
          if (women) gendersToFilter.push("Women")
          if (unisex) gendersToFilter.push("Unisex")
          if (bigKids) gendersToFilter.push("Big Kids")
          if (littleKids) gendersToFilter.push("Little Kids")
          if (toddlers) gendersToFilter.push("Baby/Toddler")

          if(gendersToFilter.length > 0) {
            result = result.filter(el => gendersToFilter.some(g => el.genders.includes(g)))
          }

          const pricesToFilter=[]
          if(twentyF) pricesToFilter.push("25")
          if(fiftyH) pricesToFilter.push("50")
          if(HundF) pricesToFilter.push("100")
          if(overHf) pricesToFilter.push("150")

          if (pricesToFilter.length > 0) {
              result  = result.filter(el => {
                  return (
                    (pricesToFilter.includes("25") && el.price >= 25 && el.price < 50) ||
                    (pricesToFilter.includes("50") && el.price >= 50 && el.price < 100) ||
                    (pricesToFilter.includes("100") && el.price >= 100 && el.price < 150) ||
                    (pricesToFilter.includes("150") && el.price >= 150)
                  );
                });
              ;
            }
            const selectedColors = colorFilters.filter(el => el.selected).map(el => el.name)

            if(selectedColors.length > 0 ) { 
            result = result.filter(el => el.colors.some(g => selectedColors.includes(g.toLowerCase())))
            console.log(result)
            }
            
          setFiltered(result);

    },[men,women,unisex,twentyF,fiftyH,HundF,overHf,bigKids,littleKids,toddlers,colorFilters])

    

    return (
        showFilter && <div className=' hidden sticky top-10 lg:flex lg:flex-col mr-18'>
                    <ul className='font-[helveticaNow] cursor-pointer text-lg flex flex-col gap-2'>
                        <li onClick={() => handleCollection("basketball")}>Basketball</li>
                        <li onClick={() => handleCollection("lifestyle")}>Lifestyle</li>
                        <li onClick={() => handleCollection("running")}>Running</li>
                        <li onClick={() => handleCollection("jordan")}>Jordan</li>
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


                   <details className="group" >
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

                    <details className="group" >
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

                    <details className="group" >
                      <summary className="flex justify-between items-center cursor-pointer">
                        <span>Colors</span>
                        <img className="w-4 transition-transform duration-300 group-open:rotate-180 origin-center" src="../public/Icons/down-arrow.svg" alt="" />
                      </summary>
                      <div className="mt-2 grid grid-cols-3 gap-3">
                        {colors.map(({ name, hex }) => (
                          <div key={name} onClick={() => toggleColor(name)} className='cursor-pointer flex flex-col justify-center items-center'>
                            <div className='w-7 h-7 rounded-full flex justify-center items-center'  style={{ backgroundColor: hex, border: name === 'white' ? '1.5px solid #999999' : 'none',}}>
                              {colorFilters.find(el => el.name === name)?.selected ? (<FontAwesomeIcon  icon={faCheck}  style={{ color: '#FFFFFF', filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.7))',}}/>) : null}
                            </div>
                            <span className='text-sm'>{name}</span>
                          </div>
                        ))}
                      </div>
                    </details>


                    <hr className='px-4  my-4 text-[#b3b3b3]'/>

                  </div> 
    )
}

export default Filter
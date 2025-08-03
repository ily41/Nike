import React, { useState } from 'react'

const Filter = ({showFilter}) => {
    const [men, setMen] = useState(true);
    const [women, setWomen] = useState(false);
    const [unisex, setUnisex] = useState(false);

    return (
        showFilter && <div className=' hidden lg:flex lg:flex-col mr-18'>
                    <ul className='font-[helveticaNow] text-lg flex flex-col gap-2'>
                        <li>Basketball</li>
                        <li>Lifestyle</li>
                        <li>Running</li>
                        <li>Jordan</li>
                    </ul>

                    <hr className='px-4 my-4  text-[#b3b3b3]'/>
                    <div>
                        <div className='flex w-38 cursor-pointer justify-between'>
                            <span>Gender</span>
                            <img  className ="w-8" src="../public/Icons/down-arrow.svg" alt="" />
                        </div>
                        <div>
                            {/* Men Checkbox */}
                            <div>
                                <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={men}
                                      onChange={(e) => setMen(e.target.checked)}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                      men ? 'bg-black border-black' : 'bg-white border-gray-400'
                                    }`}>
                                      {men && (
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                <span className='ml-3'>Men</span>
                                </label>
                            </div>

                            {/* Women Checkbox */}
                            <div>
                                <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={women}
                                      onChange={(e) => setWomen(e.target.checked)}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                      women ? 'bg-black border-black' : 'bg-white border-gray-400'
                                    }`}>
                                      {women && (
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                  <span className="ml-3">Women</span>
                                </label>
                            </div>

                            {/* Unisex Checkbox */}
                            <div>
                                <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      checked={unisex}
                                      onChange={(e) => setUnisex(e.target.checked)}
                                      className="sr-only"
                                    />
                                    <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
                                      unisex ? 'bg-black border-black' : 'bg-white border-gray-400'
                                    }`}>
                                      {unisex && (
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                  <span className="ml-3">Unisex</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <hr className='px-4  my-4 text-[#b3b3b3]'/>
                </div> 
    )
}

export default Filter
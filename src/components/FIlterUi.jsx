

const FIlterUi = ({state,setState,name}) => {
  return (
   <div>
       <label className="flex items-center cursor-pointer">
         <div className="relative">
           <input
             type="checkbox"
             checked={state}
             onChange={(e) => setState(e.target.checked)}
             className="sr-only"
           />
           <div className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
             state ? 'bg-black border-black' : 'bg-white border-gray-400'
           }`}>
             {state && (
               <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
               </svg>
             )}
           </div>
         </div>
       <span className='ml-3 '>{name}</span>
       </label>
   </div>
  )
}

export default FIlterUi
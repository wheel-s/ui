'use client'
import {useEffect, useRef, useState } from "react";




const Load = ({children}:{children:React.ReactNode}) => {
  
  
 
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(()=>{
    
      const hasLoaded = sessionStorage.getItem("hasLoaded")
      if(hasLoaded){
        setLoading(false)
      }
      else{
         sessionStorage.setItem("loaded", "true")
        const timer = setTimeout(()=>{
        setLoading(false)  
      
        }, 4000)

      return ()=>clearTimeout(timer)  
    }
     
  
  },[])


  if(loading){
   
  return (
    <div className="w-full h-screen  flex justify-center  bgg">
       <div className="mt-50">
        <svg 
        className="svgg" 
        viewBox="0 0 300 300" 
        style={{ width: '100%', height: 'auto', maxWidth: '300px' }} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="transparent"/>
        
        <g
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="200"
          fontWeight="900"
          textAnchor="middle"
          strokeWidth="2" /* Adds thickness even if font falls back */
        >
          {/* Background layers */}
          <text x="128" y="166" fill="r">W</text>
          <text x="128" y="166" fill="">W</text>
          
          {/* Outline layer */}
          <text 
            x="132" 
            y="174" 
            fill="none" 
            stroke="hsl(198, 39%, 28%)" 
            strokeWidth="4"
          >W</text>

          {/* Top bright layer */}
          <text x="128" y="166" fill="hsl(220, 70%, 93%)">W</text>
        </g>
      </svg>
        <p className=" p mb-10 text-white text-2xl ml-20">wheels</p>

      </div>

      
    </div>
  )
}
  return <>{children}</>
}

export default Load

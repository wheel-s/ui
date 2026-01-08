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
        <svg className="svgg " width="300" height="300" viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg">


          <rect width="100%" height="100%"fill=""/>

            <g
              fontFamily="Arial Black, Impact, sans-serif"
              fontSize="200"
              fontWeight="900"
              textAnchor="middle"
              strokeLinejoin="round"  /* Fixes the weird corners */
              strokeLinecap="round"   /* Smooths the edges */
            >
              {/* The stroke layer should use paint-order to stay under the letter */}
              <text 
                x="132" 
                y="174" 
                fill="none" 
                stroke="hsl(198, 39%, 28%)" 
                strokeWidth="8" 
                style={{ paintOrder: 'stroke fill' }} 
              >
                W
              </text>

              {/* Top layer */}
              <text x="128" y="166" fill="hsl(226, 70%, 93%)">W</text>
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

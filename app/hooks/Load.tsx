'use client'
import {useEffect, useRef, useState } from "react";

import { Archivo_Black } from "next/font/google";


const archivo =Archivo_Black({
  weight:'400',
  subsets:['latin'],

})

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
        <svg viewBox="0 0 200 200" width="300" className="svgg -mb-4">
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="black"/>
              <text x="50%" y="60%"
                    textAnchor="middle"
                    fontSize="120"
                    className={`${archivo.className} font-sans`}
                    fill="white"
                    stroke="none"
                    strokeWidth="6"
                    transform="scale(1.3,1)"
                    transform-origin="center">
                W
              </text>
            </mask>
          </defs>

          <text x="50%" y="60%"
                textAnchor="middle"
                fontSize="120"
                className={`${archivo.className} font-sans`}
                fill="none"
                stroke="hsl(225,18%,61%)"
                strokeWidth="6"
                transform="scale(1.3,1)"
                transform-origin="center">
            W
          </text>

          <rect y="200" width="600" height="200"
                fill="#cad5e2 "
                mask="url(#text-mask)">
            <animate
              attributeName="y"
              from="120"
              to="0"
              dur="4s"
              repeatCount="indefinite" />
          </rect>
        </svg>
        <p className=" p mb-10 text-white text-2xl -mt-30  ml-25">wheels</p>

      </div>

      
    </div>
  )
}
  return <>{children}</>
}

export default Load

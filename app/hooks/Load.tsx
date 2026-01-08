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
        <svg className="svgg" viewBox="0 0 300 300" style={{width:'100%', height:'auto', maxWidth:'300px'}}
          xmlns="http://www.w3.org/2000/svg">


          <rect width="100%" height="100%"fill=""/>

          <g 
          fontFamily="Arial Black, Impact, sans-serif"
          fontSize="200"
          fontWeight="900"
          textAnchor="middle">

{/* 
          <text x="152" y="190">W</text>
          <text x="148" y="186">W</text>
          <text x="144" y="182">W</text> */}
          <text x="134" y="173"  stroke=" hsl(198, 39%, 28%)">W</text>

          <text x="132" y="174" stroke=" hsl(198, 39%, 28%)" >W</text>
          {/* <text x="132"y="170"  stroke="">W</text> */}


          <text x="128" y="166" fill="hsl(22q6, 70%, 93%)"stroke="ray"  >W</text>
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

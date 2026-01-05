'use client'
import { useRef } from 'react'
import type {ReactNode} from 'react'

type props ={
    children:ReactNode
}

export default  function Mouse({children}:props){

        
  const ref = useRef<HTMLDivElement>(null)


  const onMouse =(e:React.MouseEvent<HTMLDivElement>)=>{
    const a = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - a.left}px`)
    ref.current!.style.setProperty("--y", `${e.clientY - a.top}px`)
    
  }
  return (
    <div 
      ref={ref}
      onMouseMove={onMouse}
      className='hov'
    >
    {children}
    </div>
  )
}


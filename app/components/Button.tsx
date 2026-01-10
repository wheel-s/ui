import React from 'react'


interface props{
    text?:string 
}
const Button = ({text}:props) => {
  return (
    <div>
       <button  className="rounded-full  p-1 px-3.5 text-[#00fac0]  bg-[#143d4d]">{text||"JavaScript"}</button>
    </div>
  )
}

export default Button

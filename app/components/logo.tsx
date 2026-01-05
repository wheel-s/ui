import React from 'react'

const Logo = () => {
  return (
    <div className='bg'>
       <div className=" "> 
              <svg className="svg" width='120' height='120' viewBox="0 0 100 100">
                  <rect   
                  y='20'
                  x = '20'
                  width ='60'
                  height='60'
                  rx='4'
                  transform ='rotate(45 50 50)'
                  fill="none"
                  stroke="currentColor"
                  strokeWidth='4'/>

                  <text
                  x ='50'
                  y='60'
                  textAnchor="middle"
                  fontSize='32'
                  fontWeight='600'
                  fill = 'currentColor'>
                      G
                  </text>



              </svg>
        </div>

    </div>
  )
}

export default Logo

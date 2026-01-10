'use client'

import { useEffect, useState } from "react"
import {FaGithub, FaLinkedin, FaReddit, FaEnvelope} from 'react-icons/fa'
import { useBody } from "../hooks/BodyProvider";

const Header = () => {

  const {port, SetPort}=useBody()

  // const id2 = document.getElementById("id2")
  
  return (
    <div className="lg:fixed xl:p-10 " >
        <div className=" p-7 mt-5 lg:mt-0">
            <h1 className="text-5xl font-mono -ml-1 text-slate-300 font-black lg:text-6xl">George Ezra</h1>
            <h3 className="text-[1.19rem]  font-semibold text-[#d4daed] font-mono mt-3 p-">Software Engineer</h3>
            <p className="mt-3 md:w-[24rem] text-[1.07rem] font-mono  font-medium tracking-[-.03rem] text-[hsl(225,16%,61%)] ">I build accessible, digital experiences for the web.</p>
        </div>

        <div className="hidden  lg:block p-7 mt-5 ">
          <h3 className={port==1?"active font-bold font-mono text-xl":"font-bold text-[#8892b0] text-sm"}  id='id1'> <span className={port==1?"hidden":"mr-2 -ml-1 font-light"}> ——</span> ABOUT</h3>
           <h3 className={port==2?"active mt-7 font-mono font-bold ":"font-bold mt-7 text-[#8892b0] text-sm"}  id='id2'> <span className={port==2?"hidden":"mr-2 -ml-1 font-light"}> —— </span>EXPERIENCE</h3>
            <h3 className={port==3?"active mt-7 font-mono font-bold ":"font-bold mt-7 text-[#8892b0] text-sm"}  id='id3'> <span className={port==3?"hidden":"mr-2 -ml-1 font-light"}>—— </span>PROJECTS</h3>
        </div>
        {/* <div className="hidden xl:block">
          <Logo/>
        </div> */}
        
        <div className="lg:mt-60 ss p-7 -mt-8 text-slate-400 flex gap-5 text-2xl mb-8">
       <a target='_blank' href="https://github.com/wheel-s"> <FaGithub className="mr-3 cursor-pointer"/></a>
       <a  target='_blank' href="https://www.linkedin.com/in/ezra-george-0b5b062b3"> <FaLinkedin className="mr-3  cursor-pointer"/></a>
       <a  target='_blank' href="https://www.linkedin.com/in/ezra-george-0b5b062b3/"><FaReddit className="mr-3 cursor-pointer"/></a>
       <a  target='_blank' href="mailto:toshirou2002@gmail.com"><FaEnvelope className=" cursor-pointer"/></a>
        
        
      </div>
    </div>
  )
}

export default Header

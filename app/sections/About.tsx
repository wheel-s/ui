'use client'
import Image from "next/image"
import {FaGithub, FaLinkedin, FaReddit,} from 'react-icons/fa'
import { useEffect, useState,useRef } from "react"
import { useBody } from "../hooks/BodyProvider"
import Mouse from "../components/Mouse"



const About = () => {

  const {port, SetPort} = useBody()
  const ref = useRef(null)
  const[visible, setVisible] = useState<boolean>(false)
 

  useEffect(()=>{
    if(!ref.current) return

    const Element = document.getElementById('1')
    const observer = new IntersectionObserver(([entry]) =>{
     
        if(entry.isIntersecting){
          
          
          SetPort(1)
          
          setVisible(true)
        
        }
        else{
          setVisible(false)
        }

      },
      {
        threshold:0.1
      });
    observer.observe(ref.current);
    return ()=> observer.disconnect()
     
  },[])
     
  return (
    <div>
      <div className='px-7 lg:mt' >
        <h1 className='ss text-lg text-white font-bold mb-10 font-mono  lg:hidden tracking-wider'>ABOUT</h1>
  
   
    
        <div className='font-mono font-medium tracking-tighter md:text-[1.03rem]   text-[hsl(225,18%,61%)] '>
          
           <p className="ss">
             I’m a developer trying to make my workkflow and my software more solid everyday.
             I enjoy building performant projects, <span className="text-slate-200">understanding memory,</span> slowly getting better at writing code that is easy to maintain,
            and ultimately <span className="text-slate-200">crafting really awesome software.</span> 

           </p>

            <p className='mt-10 '>
              In the past, I've had the opportunity to develop software across a variety of settings — from large corporations and fast-pacced start-ups
                to digital agencies and small product teams. Currently I’m  building software i enjoy and exploring how things work.
            </p>
            <p className='mt-10' ref={ref}>
                These experiences have given me a  <span className="text-slate-200">strong understanding </span> of how to adapt to different workflows, collaborate effectively with diverse teams, 
                and <span className="text-slate-200">deliver software</span> that meet both business and user needs.
            </p>
            <p className='mt-10' id="1">
                In my spare time, <span className="text-slate-200">I’m usually reading,</span> listening to Music, <span className="text-slate-200">playing the bass,</span>  hanging out with my friends, or playing games ( Call Of Duty, Fc, Need For Speed, MortalCombat )            
            
            .
            </p>
        </div>
      </div>
    </div>
  )
}

export default About

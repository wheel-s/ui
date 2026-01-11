'use client'
import { useBody } from '../hooks/BodyProvider'
import { useState, useEffect, useRef } from 'react'
import { FaCode} from 'react-icons/fa'


const Skills = () => {

    const {port, SetPort} = useBody()
      const ref = useRef(null)
      const[visible, setVisible] = useState<boolean>(false)
     
    
      useEffect(()=>{
        if(!ref.current) return
    
        const Element = document.getElementById('1')
        const observer = new IntersectionObserver(([entry]) =>{
         
            if(entry.isIntersecting){
              
              
              SetPort(4)
              
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
        
        <div className='p-7 mb-3 rounded-md bg-[hsl(220,30%,11%)] '>
            <div className='flex gap-3'>
                <FaCode className='mt-1 text-slate-300'/>  
                <h1 className='text-xl man font-bold text-slate-300 tracking-wide'>Skills</h1>  
            </div>
            <p className='f mt-2 text-[hsl(220,15%,71%)]'>.......................</p>
            <hr  className='mt-4 text-[hsl(220,15%,41%)]'/>
            <div className='mt-6 man'>
                <div className='flex gap-2'>
                    <h1 className='text-[.87rem] text-slate-300 font-semibold'>Languages</h1>
                    
                </div>
               
                <p className='text-[hsl(220,15%,71%)] f  mt-2'>C/C++, Python, JavaScript / TypeScript, Java, Go, SQL, HTML, CSS.</p>
            
                <hr  className='mt-4 text-[hsl(220,15%,41%)]'/>
            </div>

             <div className='mt-6 f'>
                <div className='flex gap-2'>
                    <h1 className='text-[.86rem] font-semibold text-slate-300 man'>Frameworks & Libraries</h1>
                   
                </div>

                <div  className='flex mt-3 gap-1 '>
                    <h3 className='f text-slate-300'>Frontend / UI: </h3>
                    <p className='text-[hsl(220,15%,71%)]  text-[.77rem] '>React, Tailwind, Next.js, vue, Svelte</p>
                </div>

                <div className='flex mt-3 gap-1'>
                    <h3 className='f text-slate-300'>Backend(API): </h3>
                    <p className='text-[hsl(220,15%,71%)]  text-[.77rem] '>Express.js, FastAPI, Flask, Node.js, Django, Springboot</p>
                </div>

                <div className='flex mt-3 gap-1'>
                    <h3 className='f text-slate-300'>Graphics: </h3>
                    <p className='text-[hsl(220,15%,71%)]  text-[.77rem] '>raylib, SDL, OpenGL, Vulcan</p>
                </div>
                <div className='flex mt-3 gap-1'>
                    <h3 className='f text-slate-300'>Database: </h3>
                    <p className='text-[hsl(220,15%,71%)]  text-[.77rem] '>PostgreSQL, Mongodb, MySQL.</p>
                </div>
               
                <hr  className='mt-4 text-[hsl(220,15%,41%)]'/>
            </div>
             <div className='mt-6  man'>
                <div className='flex gap-2'>
                    <h1 className='text-[.86rem] font-semibold'>Tools & Platforms</h1>
                   
                </div>
                
               
                <p className='text-[hsl(220,15%,71%)] f text-[.77rem] mt-2'>Git, Github, Docker, Kafka, RabbitMQ, CI/CD, Redis, AWS, GCP, Postman, Azure, Figma,Vercel, Hostinger.</p>
               
                <hr ref={ref} className='mt-4  text-[hsl(220,15%,41%)] '/>
                
            </div>
            <p className='tracking-wider f mt-2 text-[hsl(220,15%,71%)] text-end'>......................</p>
        </div>


    </div>
  )
}

export default Skills

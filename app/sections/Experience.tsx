'use client'
import Link from "next/link"
import { useEffect, useRef,useState } from "react"
import { useBody } from "../hooks/BodyProvider"
import Button from "../components/Button"

const Experience = () => {

  const {port, SetPort} = useBody()
  const ref = useRef(null)
  const[visible, setVisible] = useState<boolean>(false)

  useEffect(()=>{
    if(!ref.current) return

    const Element = document.getElementById('1')
    const observer = new IntersectionObserver(([entry]) =>{
     
        if(entry.isIntersecting){
          
          SetPort(2)
          setVisible(true)
        
        }
        else{
          setVisible(false)
        }

      },
      {
        threshold:0.1
      }
    );
    observer.observe(ref.current);
    return ()=> observer.disconnect()
     
  },[])

  return (
    <div >
      <div className="p-7 man mt-16 lg:mt-23">
        <h1 className="mb-10 text-sm text-white font-bold lg:hidden" >EXPERIENCE</h1>

        <section className="sm:flex ">
            <div className="mb-4 w-full text-[#8892b0] ">2024 — present</div>
            <div className="">
                <h2 className="text-md text-white font-bold">Independent Senior Engineer  <span className="ml-2 mr-2">|</span>  Remote</h2>
                <p className=" text-[hsl(225,18%,61%)]  mt-4">
                
                    Build and maintain critical components used to construct Klaviyo’s frontend, 
                    across the whole product. Work closely with cross-functional 
                    teams, including developers, designers, and product managers, 
                    to implement and advocate for best practices in web accessibility.

                </p>
                
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3  w-70 md:w-100 font-sans text-sm mt-4 ">
                    <div><Button text='Python'/></div>
                    <div className="-ml-3"><Button text='TypeScript'/></div>
                    <div className=""><Button text='react'/></div>
                    <div><Button text='TailwindCSS'/></div>
                
                  
                </div>
            </div>
            
        </section>

        <section className="sm:flex mt-15 lg:mt-20">

          <div className="mb-4 w-full text-[#8892b0] ">2022 — 2023 </div>
            <div className="">
                <h2  className="text-md text-white font-bold">Junior Software Engineer · Nitda</h2>
                <p  ref={ref}  className=" text-[hsl(225,18%,61%)]  mt-4">
                     Developed and styled interactive web applications and
                    Contributed to technical standards and guidlines for software in projects ensuring systems met performance,
                    reliability, and security requirements.
                </p>
             
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2.5 w-70 md:w-100 font-sans text-[.8rem] mt-4">
                    <Button text=""/> 
                    <div  ref={ref}  className="ml-1.5"><Button text="React"/></div> 
                    <div className="-ml-5"><Button text="SCSS"/></div>
                    <Button text="python"/>
                    
                  
                </div>
          </div>

        </section>

        <div className="flex hover:text-[#00fac0]">
           <Link href='/resume.png' className="flex">
            <h1 className="mt-9 text-slate-300  font-semibold text-md  hover:text-[#00fac0]" >View Full Resume </h1>
            <p className=" mt-8 ml-2 rotate-[-15deg] text-white text-xl  max-sm:rotate-[-29deg] max-sm:ml-2">⇝</p>
           </Link> 
        </div>




  
      </div>
    </div>
  )
}

export default Experience

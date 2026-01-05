import Image from 'next/image'
import car from '../../public/images/spring.png'
import a2 from '../../public/images/carena.png'
import a3  from '../../public/images/a3.png'
import Link from 'next/link'
import { useBody } from '../hooks/BodyProvider'
import { useEffect, useState, useRef } from 'react' 
import Button from '../components/Button'



const Projects = () => {


    const {port, SetPort} = useBody()
    const ref = useRef(null)
    const[visible, setVisible] = useState<boolean>(false)
  
  useEffect(()=>{
    if(!ref.current) return

    const Element = document.getElementById('1')
    const observer = new IntersectionObserver(([entry]) =>{
     
        if(entry.isIntersecting){
          
    
          SetPort(3)
          
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
      
      <div className='p-7 man  text-[hsl(225,18%,61%)'>
        <h1 className='text-md font-bold mb-8 lg:hidden'>PROJECTS</h1>
        <section className='sm:flex justify-opossite mt-10'>
          
            <div className=' sm:w-[150%] '>
                <a href={"https://github.com/wheel-s/car-ui"}><h1 className='mt-5 mb-5 font-medium text-md cursor-pointer'>Car Arena</h1></a>
                <p  className='  text-[1rem] text-[hsl(225,18%,61%)] '>
                  A Full-Stack vehicle data paltform using FastAPI and react. features includes
                  data pipeline, background task, API gateway,internal health checking systems, comparism, analytics. 

                </p>
              <div className='mt-4 flex gap-2'>
                <Button text='React'/>
                <Button text='Fast API'/>
                <Button text='PostgreSQL'/>
              </div>
            </div>
              <div className='-order-1 w-full mt-5 max-sm:'>
                <Image src={a2} alt='car' width={200} className='rounded-md ring-1 ring-gray-500  hover:ring-slate-400'/>
            </div>
           
        </section>

        <section className='sm:flex justify-opossite mt-10'>
          
            <div className=' sm:w-[150%] '>
          <a href="https://github.com/wheel-s/the-Http-Protocol-in-C"><h1 className='mt-5 mb-5 font-medium text-md cursor-pointer font-medium'>the-Http-Protocol-in-C</h1></a>     
                <p ref={ref}  className='  text-[1rem] text-[hsl(225,18%,61%)] '>
                    Http Protocol built in C with manual socket handling,request parsing (RequestLine, Header, Body), 
                    response handling, chunked encoding, and binary data handling.
                </p>
              <div className='mt-4 flex gap-3'>
                <Button text='C'/>
                <Button text='Socket'/>
                <Button text='Http'/>
              </div>
            </div>
              <div className='-order-1 w-full mt-5 max-sm:'>
                <Image src={a3} alt='car' width={200} className='rounded-md  ring-1 ring-gray-500  hover:ring-slate-400'/>
            </div>
           
        </section>

        <section className='sm:flex justify-opossite mt-10'>
          
            <div className=' sm:w-[150%] '>
                <a href="https://github.com/wheel-s/redis-server"></a><h1 className='mt-5 mb-5 font-medium text-md crsor-pointer'>Redis Server</h1>
                <p ref={ref}  className='  text-[1rem] text-[hsl(225,18%,61%)] '>
                  A lightweight redis-compatible in — memory store written in C++. Supports strings, lists,
                  hashes, full redis serilization protocol (RESP) parsing, multi-client concurrency, and periodic disk persistence.


                </p>
              <div className='mt-4 flex gap-3'>
                <Button text='C++'/>
                <Button text='RESP'/>
                <Button text='postgreSQL'/>
              </div>
            </div>
              <div className='-order-1 w-full mt-5 max-sm:'>
                <Image src={car} alt='car' width={200} className='rounded-md  ring-1 ring-gray-500  hover:ring-slate-400'/>
            </div>
           
        </section>


       <Link  href='archive' className='flex hover:text-[#00fac0] '>
        <h1 className='mt-20 text-slate-300 mb-10 font-bold hover:text-[#00fac0] '>View Full Project Archive </h1>
        <p className='mt-19 ml-3 rotate-[-22deg] text-xl'>⇝</p>         
        </Link> 
      </div>
    </div>
  )
}

export default Projects

import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin, FaReddit,} from 'react-icons/fa'
import full from '../lib/projects.json'

const Page = () => {
  return (
    <div>

      <div className='mt-3 p-10 max-sm:p-6'>
        <Link href='/'><p className='text-[hsl(166,60%,69%)] ml-[1] mt-4 ml-4 mb-1 man font-semibold text-[1.1rem] man'>← Georege Ezra </p></Link> 
        <h1 className='mb-7 text-4xl  font-black ml-[-3]  man text-slate-300'>All Projects</h1>
      <hr className='text-[hsl(225,18%,61%)] relative top-18'/>

        <section>
  

          <table>
            <thead >
              <tr>
            
              <th ><p className='text-slate-300 mt-6'>year</p></th>
              <th><p className='ml-7  mt-6 text-slate-300'>project</p></th>
              <th> <p className='hidden  mt-7 md:block  text-slate-300'>Link</p></th>
              </tr>
            </thead>
          
            <tbody>
              {
                full.map((item:any, i)=>{
                  return(
                    
                     <tr key={i}>
                      
                      <td> {item.year}</td>
                      <td><Link href={item.url}><p className='ml-7  text-slate-300  font-semibold'>{item.project}</p></Link></td> 
                        <td> <Link href={item.url} className='hidden md:flex'><FaGithub className='mt-1 mr-2'/><p>{item.link}</p></Link></td>
                      </tr>
                      
                  )
                })
              }
         
            </tbody>
          
          </table>
        </section>
      </div>
     
    </div>
  )
}

export default Page

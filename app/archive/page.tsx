import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin, FaReddit,} from 'react-icons/fa'
import full from '../lib/projects.json'

const Page = () => {
  return (
    <div>

      <div className='mt-3 p-10'>
        <Link href='/'><p className='text-[#00fac0] mb-2 text-[1rem] man'>⇜ Georege Ezra </p></Link> 
        <h1 className='mb-10 text-3xl  font-black man '>All Projects</h1>


        <section>
  

          <table>
            <thead >
              <tr>
            
              <th ><p>year</p></th>
              <th><p className='ml-7 mb-7 mt-6'>project</p></th>
              <th> <p className='hidden mb-7 mt-6 md:block '>Link</p></th>
              </tr>
            </thead>
          
            <tbody>
              {
                full.map((item:any, i)=>{
                  return(
                    
                     <tr key={i}>
                      
                      <td> {item.year}</td>
                      <td><p className='ml-7 d:ml0 text-gray-200 font-semibold'>{item.project}</p></td> 
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

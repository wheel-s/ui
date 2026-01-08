import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin, FaReddit,} from 'react-icons/fa'
import full from '../lib/projects.json'

const Page = () => {
  return (
    <div>

      <div className='mt-3 p-10 max-sm:p-6'>
        <Link href='/'><p className='text-[#00fac0] ml-[1] mt-4 ml-4 font-semibold text-[1rem] man'>← Georege Ezra </p></Link> 
        <h1 className='mb-4 text-4xl  font-black ml-[-3] man text-white'>All Projects</h1>


        <section>
  

          <table>
            <thead >
              <tr>
            
              <th ><p className='text-white'>year</p></th>
              <th><p className='ml-7 mb-5 mt-6 text-white'>project</p></th>
              <th> <p className='hidden mb-4 mt-6 md:block  text-white'>Link</p></th>
              </tr>
            </thead>
          
            <tbody>
              {
                full.map((item:any, i)=>{
                  return(
                    
                     <tr key={i}>
                      
                      <td> {item.year}</td>
                      <td><Link href={item.url}><p className='ml-7 d:ml0 text-gray-200 font-semibold'>{item.project}</p></Link></td> 
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

'use client'
import Header from "./sections/header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { BodyProvider } from "./hooks/BodyProvider";



export default function Home() {



  return (
   <main className=" overflow-hidden lg:flex lg:p-4 ">

       <BodyProvider>

        <div className=" md:ss w-full md:mr-40 mr-30">
          <Header/>  
        </div>

        <div className="lg:mt-7  " id='id2'>

          <About/>
          <Experience/>
          <Projects/> 
          <Skills/>

        </div>
        
      </BodyProvider>
     

   </main>
  );
}

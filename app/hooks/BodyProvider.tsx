import React, { useContext, useState } from 'react'
import { createContext } from 'react'



const NavContent = createContext<any>(null)
export function BodyProvider({children}:{children:React.ReactNode}){
    const [port, setPort] = useState(1);
    const SetPort = (port:number)=>{
        setPort(port)
      
    }
    return(
        <NavContent.Provider value={{port,SetPort}}>
            {children}
        </NavContent.Provider>
    )
}

export function useBody(){
    return useContext(NavContent)
}

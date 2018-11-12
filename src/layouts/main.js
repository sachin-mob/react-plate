import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export const Main=({children})=>{
        return(
            <div>
                <Navbar/>
                    {children}
                <Footer/>
            </div>

        )
}
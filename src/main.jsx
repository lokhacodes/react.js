import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
//import { Fragment } from 'react';


const root = createRoot(document.getElementById("root"));
root.render(
   <Page />
)

function Header(){
    return (
         <header>
                <img src="src/assets/react-logo.png" width="40px" alt="React logo" />
            </header>
        )}


function MainContent(){
    return(
   <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
    )
}

function Footer(){
    return(
         <footer>
                <small>© 2026 Lokha development. All rights reserved.</small>
            </footer>
    )
}

export default function Page (){
    return (
       <>
            <Header />
            <MainContent />
            <Footer />
           
        </>
    )
}
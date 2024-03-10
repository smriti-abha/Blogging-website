import '../styles/globals.css'
import Navbar from './components/Navbar'
import Dropdown from './components/dropdown'
import Footer from './components/footer'
import Nav from './components/nav'
import React from 'react'


function MyApp({ Component, pageProps }) {
 
  return (<div>
 <Nav/>
<Component {...pageProps} />
<Footer/>

  </div>
  )
}

export default MyApp

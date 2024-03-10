import React from 'react'
import { IoLogoDocker } from "react-icons/io5";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import styles from '../../styles/footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer_main_container}>
      <div className={styles.footer_sub_container}>
      <div className={styles.footer_left_container}>
       <h1><IoLogoDocker style={{color:"yellowgreen",marginRight:'1rem'}} size={50}/>Spicy Blog Hunter</h1>
       <h2>10635 SCRIPPS RANCH BLVD. SUITE H SAN DIEGO, CA 92131 | (858) 576-0007</h2>
        <h1>A <span style={{color:"blue"}}>CATALYST</span> BUILT WEBSITE</h1>
      </div>
      <div className={styles.footer_right_container}>
      <PiYoutubeLogoDuotone size={30} style={{color:"red"}}/>
      <ImFacebook2 size={30} style={{color:"blue"}}/>
      <FaInstagramSquare size={30} style={{color:"pink"}}/>
      <BsLinkedin size={30} style={{color:"blue"}}/>
     
      </div>
     
      </div>
      <input type='search' placeholder='search'/><FaSearch size={25}/>
      </div>
  )
}

export default Footer;
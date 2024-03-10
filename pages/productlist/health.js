import React from 'react'
import styles from '../../styles/blog.module.css'
import { GrArticle } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { FaDharmachakra } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import ContactForm from '../components/form';
const Health = () => {
  const data=[
    {
      image:<FaBook />,
      title:"OVER 15,000 SUBSCRIBED",
  describe:"Join our readers"},
  {
    image:<FaAward />,
      title:"AWARD WINNING",
  describe:"Trusted source for drug risk & wellness"
  },
  {
image:<FaDharmachakra />,
title:"INDEPENDENT OF PHARMA",
  describe:"Top-rated nonprofit"
 
  }
  ]
  return (
    <div className={styles.health_main_section}>
    <div className={styles.health_sub_section}>
     <div className={styles.health_first_section}> 
     <h1>
     BALANCING THE RISKS AND BENEFITS OF MEDICINES
     </h1>
     <h2>
     HEALTH & WELLNESS JOURNALISM
     </h2>
     </div>
     <div className={styles.health_second_section}>
      <div className={styles.health_second_button}>
      <button><GrArticle size={49}/>Explore Articles & Videos</button>

      </div>
      <div className={styles.health_second_right}>
        <h1></h1>
      </div>
  </div>
<div className={styles.health_third_section}>
  <div className={styles.health_third_left}>
  <h1>Help protect yourself and your family from the side effects of medications.</h1>

  </div>
  <div className={styles.health_third_right}>
<img/>
<button>Become an Insider</button>
<h2>Gain FREE exclusive access to bonus content including videos, infographics, guides, interviews and more.</h2>
  </div>
 </div>
 <div className={styles.fourth_section}>
{
  data.map((items,index)=>{
   return <div className={styles.card_section} key={items.title}>
 <h1>{items.image}</h1>
 <h1>{items.title}</h1>
 <h2>{items.describe}</h2>
    </div>
   
  })
}
 </div>
 <div className={styles.health_fifth_section}>
  <div className={styles.health_fifth_left}>
<img src='https://img.freepik.com/free-photo/portrait-three-young-beautiful-smiling-hipster-girls-trendy-summer-clothes-sexy-carefree-women-posing-near-wall-street-positive-models-having-fun-sunglasses_158538-6955.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais'/>
  </div>
  <div className={styles.health_fifth_right}>
    <div style={{display:'flex', alignItems:"center"}}>
 {/* <FaPaperclip size={70} style={{color:"black"}}/>
 <AiOutlinePaperClip size={90} style={{color:"black",paddingTop:"-2rem"}}/>
  */}
 </div>
 <h4>
  We help protect your life and the lives of your family by providing you with the information you need to make informed
  decisions about the risks, benefits, and alternatives
  in medicines.
 </h4>
</div>

</div>
<div className={styles.aging_second_last}>
  <img src='https://img.freepik.com/free-photo/three-young-beautiful-smiling-hipster-girls-trendy-summer-clothes-sexy-carefree-women-posing-near-pink-wall-positive-models-having-fun-sunglasses_158538-6384.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1701388800&semt=ais'/>
<img src="https://img.freepik.com/free-photo/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-near-blue-wall-sunglasses-positive-models-going-crazy_158538-7654.jpg"/>
   <img src='https://img.freepik.com/free-photo/two-young-beautiful-smiling-blond-hipster-female-trendy-summer-clothes-sexy-carefree-women-posing-near-yellow-wall-studio-positive-models-having-fun-cheerful-happy-sunglasses_158538-21797.jpg'/>     
        {/* <img src='https://img.freepik.com/free-photo/two-young-beautiful-smiling-blond-hipster-girls-trendy-summer-colorful-t-shirt-clothes_158538-1051.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais'/>
         */}
        </div>
        <div className={styles.aging_second_last}>
  <img src='https://img.freepik.com/free-photo/two-young-beautiful-smiling-girls-trendy-summer-clothes-sunglasses-sexy-carefree-women-posing-positive-screaming-models_158538-4722.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais'/>
<img src="https://img.freepik.com/free-photo/charming-young-cheerful-long-haired-white-headed-sisters-red-sunglasses-hugging-lovingly-each-other-looking-happily-camera-standing-pink-background_295783-12020.jpg"/>
   
       <img src='https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-clothes-sexy-carefree-women-posing-positive-models-having-fun_158538-5216.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700438400&semt=ais'/>
         
        </div>
        <div className={styles.aging_third_last}>
          <div className={styles.aging_third_left}>
            <h1>Menstrual Health and Well-being for Girls</h1>
          <p>Menstrual health is a crucial aspect of well-being for adolescent girls, marking a significant milestone in their physical and reproductive development. Understanding the menstrual cycle is essential for girls as it not only signifies reproductive readiness but also impacts overall health.

</p>
          </div>
          <div className={styles.aging_third_right}>
          <h1>Holistic Health for Teenage Girls: Nurturing Physical and Mental Well-being</h1>
          <p>Adolescence is a crucial phase in the life of a teenage girl, characterized by rapid physical, emotional, and psychological changes. Promoting holistic health during these formative years is imperative to ensure the overall well-being of teenage girls, encompassing both physical and mental aspects.</p>
          </div>
        </div>
        <div className={styles.aging_footer_image} style={{paddingTop:"10rem"}}>
       <img src='https://img.freepik.com/free-photo/two-young-beautiful-smiling-hipster-girls-trendy-summer-clothes-sexy-carefree-women-posing-near-yellow-wall-positive-models-going-crazy-having-fun-hugging_158538-6467.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701216000&semt=ais'/>
        <img src='https://img.freepik.com/free-photo/two-young-beautiful-smiling-brunette-hipster-female-trendy-summer-dresses-sexy-carefree-women-posing-near-yellow-wall-positive-models-having-fun-cheerful-happy_158538-22247.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700265600&semt=ais'/>
        </div>
    </div> 
    </div>
  )
}
export default Health
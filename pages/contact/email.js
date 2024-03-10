import React from 'react'
import styles from '../../styles/email.module.css'
import ContactForm from '../components/form';
const Email = () => {
  return (
    <div className={styles.email_main_section}>
    <div className={styles.email_sub_section}>
      <div className={styles.email_first_section}>
        <div className={styles.email_first_left}>
          <h1>Google Workspace: Everything you need to get anything done</h1>
          <p>
            It’s the best way to create, communicate, and collaborate.
            Familiar tools; fewer distractions; more time to make things
            happen.
          </p>
          <button onClick={() => window.location.href = '/blogWriting'}>
  Start Now
</button>
         
        </div>
        <div className={styles.email_first_right}></div>
      </div>
      <div className={styles.email_second}>
        <h1>Get Your Google Workspace Plan Now</h1>
        <hr/>
        <div className={styles.email_second_card}>
          <h1>Google Workspace Email</h1>
          <h2>₹ 499.00 /mo</h2>
          <button>Add to Cart</button>
          <p>₹ 499.00 /mo when you renew</p>
        </div>
        <hr />
        <ul className={styles.email_list_items}>
          <li>30 GB Email Storage</li>
          <li>Unlimited mail filters</li>
          <li>30 Email Aliases</li>
          <li>Antivirus Check</li>
          <li>Get custom email @mybusiness</li>
          <li>Smart Reply, Smart Compose, grammar suggestions</li>
          <li>
            Advanced phishing and malware protection that blocks 99.9% of
            attacks
          </li>
          <li>Access email, chat, voice, and video calling from one place</li>
          <li>100 participant video meetings. No recording</li>
        </ul>
        <hr/>
         </div>
         <div className={styles.email_third}>
          <div className={styles.email_third_card}>
            <div className={styles.email_third_text}>
         <h1>Get Gmail for Business</h1>
        <p>Leverage new admin controls, no ads and your own personalized professional addresses. Swap @gmail.com with sales@examples.com.</p>
        </div><img src="https://images.idgesg.net/images/article/2021/05/01-gmail-for-business-tabbed-inbox-100889028-large.jpg?auto=webp&quality=85,70"/>
        </div>
        <div className={styles.email_third_card}>
          <div className={styles.email_third_text}>
         <h1>Stay Connected With Your Team From Anywhere</h1>
        <p>Meet safely with your team from anywhere, using the premium video conferencing built on Google’s robust infrastructure.</p>
        </div><img src="https://vibe.us/blog/team-connection/cover_hu3d03a01dcc18bc5be0e67db3d8d209a6_2488578_1680x0_resize_q90_h2_lanczos.25f9e120c9af0f0de81de1c91833cc22f448d472749c6509d05f665bf930eeb0.webp"/>
        </div>
        <div className={styles.email_third_card}>
          <div className={styles.email_third_text}>
         <h1>Work Faster, Work Smarter</h1>
        <p>Collaborate on files in real time, set up meetings in a few clicks, and get deadlines and calendar notifications. Google Workspace centralizes every tool you need to be productive.</p>
        </div><img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_166274915_9707279704500150_62127.jpg"/>
        </div>
        <div className={styles.email_third_card}>
          <div className={styles.email_third_text}>
        <h1>Designed To Protect You From Threats</h1>
        <p>Gmail’s machine learning models block 99.9% of spam, phishing and malware threats reaching your inbox, making Google Workspace safe and secure.</p>
        </div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDw1BD7EGnpalO60aeOdeTYw3tFi1sZu7cc7rwO0tlrEDZ172i95MLeG-I_MwKJgleBI&usqp=CAU"/>
        </div>
         </div>
         <div className={styles.footer_section}>
        
         <ContactForm/>
         </div>
    </div>
  </div>
  )
}

export default Email;
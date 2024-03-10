import React from "react";
import styles from "../../styles/feature.module.css";
import ContactForm from "./form";
import SimpleForm from "./SimpleForm";
import VideoPlayer from "./videoPlayer";

const Subscribe = () => {
  return (
    <>
      <div className={styles.subscribe_main_section}>
        <div className={styles.subscribe_sub_section}>
          <h1>Subscribe to Weekly All-Church Updates</h1>
          <p>
            Newbreak Church partners with you and your family. Every week we
            send out an email providing helpful links to the week&apos;s
            content, guides for kids and students so they can follow along at
            home, as well as updated news and information that are important to
            Newbreak Church as a whole and specific to our campuses across San
            Diego County.
          </p>
        </div>
        <div className={styles.div_form_container}>
          <form className={styles.form_container}>
          <ContactForm />
          </form>
        </div>
      </div>
      <div className={styles.video_text_section}>
        <div className={styles.text_section}>
          <h4>WATCH AND LEARN</h4>
          <h1>Get inspired with our award-winning show, MarieTV.</h1>
          <p>
            With hundreds of episodes, MarieTV will motivate you with wit and
            wisdom to build your dreams. Search our library to find the perfect
            one for you.
          </p>
          <button>WATCH NOW</button>
        </div>
        <div className={styles.video_section}>
          <VideoPlayer />
        </div>
      </div>
      <div className={styles.last_section}>
      <div className={styles.last_left}>
     <h5>INSTANT #1 NEW YORK TIMES BEST SELLER</h5>
     <h1>Everything Is Figureoutable</h1>
     <p>
     It’s more than just a fun phrase to say. It’s a philosophy of relentless optimism. A mindset. A mantra. A conviction. Most important, it’s about to make you unstoppable. Everything is Figureoutable is NOW AVAILABLE in 32 languages.
     </p>
     <button>Tell Me EveryThing</button>
      </div>
      <div className={styles.last_right}>
   <img src="https://images.squarespace-cdn.com/content/v1/6400c3d24deed10a9ac9ec44/2c1dd267-65e8-4b74-b1d2-e3436df9e2d4/how+to+write+a+chapter+book.png"/>
      </div>
      </div>
      <div className={styles.bottom_images}>
    <h1 style={{textAlign:"center",padding:"10rem",color:"ButtonHighlight"}}>Will You Be The Next Success Story?</h1>
     <button>Create Your Blog</button> 
      </div>
    </>
  );
};

export default Subscribe;

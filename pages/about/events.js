
import React from 'react';
import styles from '../../styles/about.module.css'; // Import your CSS module
import Link from 'next/link';

const Events = () => {
  const eventCategories = [
    {
      title: 'Conferences',
      description: 'Explore upcoming conferences and industry events.',
    },
    {
      title: 'Workshops',
      description: 'Participate in hands-on workshops and skill-building sessions.',
    },
    {
      title: 'Networking',
      description: 'Connect with professionals and expand your network at networking events.',
    },
    {
      title: 'Cultural',
      description: 'Attend cultural events celebrating diversity and heritage.',
    },
    {
      title: 'Charity',
      description: 'Support noble causes by participating in charity events and fundraisers.',
    },
    {
      title: 'Music',
      description: 'Enjoy live music performances and concerts.',
    },
    {
      title: 'Sports',
      description: 'Participate in or watch exciting sports events.',
    },
    {
      title: 'Community',
      description: 'Engage in community events and activities.',
    },
  ];

  return (
    <div className={styles.eventsPage}>
      {/* section1  */}
      <div className={styles.events_content}>
        <div className={styles.events_left}>
        <h1>Scale Your Feeds Without Headaches</h1>
     <p>
     Our enterprise-ready activity feed and events are read by hundreds of large companies so they can grow without worrying about the scalability, maintenance and reliability of a complicated news feed infrastructure.
     </p>
     <button>Try Spicy Blog Hunter</button>
     <button>Contact Sales</button>
        </div>
      <div className={styles.events_right}>
    <img src='https://gfxdownload.com/wp-content/uploads/2021/11/preview-21.jpg' />
      </div>
      {/* section 2 */}
      </div>
      <div className={styles.image_section}>
      <img src='	https://getstream.io/static/soundcloud-logo-de7e969d32d3ca987e60e3054eec809f.svg' height={76} width={105}/>
      <img src='https://getstream.io/static/housing-logo-f1670ec1d31d2d881432c958586e33e4.svg'  height={76} width={105}/>
      <img  src='https://getstream.io/static/masterclass-68fdadc3e18b61cb743c37569c87271c.svg' height={76} width={105}/>
      <img src='	https://getstream.io/static/magic-eden-logo-b031a9d1795e52e792b8c5adcd54dff6.svg' height={76} width={105}/>
      <img src='	https://getstream.io/static/relive-logo-9bd9d285ceba602a71965bd8fc3b5906.svg'  height={76} width={105}/>
      </div>
      {/* section 3 */}
      <h1 className={styles.header_section}>Upcoming Events</h1>
      <div className={styles.section_three}>
    

{eventCategories.map((category) => (
  <div key={category.title} className={styles.eventCard}>
    <h2>{category.title}</h2>
    <p>{category.description}</p>
  </div>
))}
      </div>

      {/* section 4 */}
      <div className={styles.section_four}>
        <h1>
        Unmatched Infrastructure Performance for Any Size Blog
        </h1>
       <h3>
       Our news feed and events was built by You, for You. Leverage the Blog or integrate our Support and Facilities. We solve the hard scalability and integrate problems, with flexible Support so you can do more of what you love.
       </h3>
       <div className={styles.section_four_subsection}>
       <div className={styles.section_four_left}>
       <ul>
        <li>
        Always Improving Feed Docs
        </li>
        <li>
          Free Blog Tutorials
        </li>
        <li>Free Feeds Tutorials</li>
        <li>Free Language Tutorial</li>
       </ul>
       <button>Features</button>
       </div>
       <div  className={styles.section_four_right}>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/011/993/599/small/happy-cheerful-cute-girl-child-having-fun-spend-summer-holidays-away-from-school-sits-crossed-legs-using-laptop-excited-studying-at-home-with-e-learning-program-png.png'/>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/008/845/837/small/illustration-student-with-laptop-studying-on-online-course-png.png'/>
       <img src='https://static.vecteezy.com/system/resources/thumbnails/008/845/903/small/illustration-cute-girls-with-laptop-png.png'/>
       </div>
       </div>
      </div>

      {/* section 5 */}

      <div className={styles.section_five}>
   <h1>Activity Feed Cloud Components </h1>
   <h4>
   Ship fully-featured, polished social experiences today that takes other companies years to build in-house.
   </h4>
   <ol>
    <li>
      <Link href="https://www.udemy.com/topic/blogging/free/">
        <a>
        Blog Tutorial
        </a>
      </Link>
    </li>
    <li>
      <Link href='https://getstream.io/blog/topic/tutorials/feeds/</li>'>
        <a>Feed Tutorials</a>
      </Link>
    </li>
    <li>
      <Link href="https://www.freelanguagetutorials.com/">
        <a>
        Blog Tutorial
        </a>
      </Link>
    </li>
   </ol>
   <h2>Activity Feed UI Kits</h2>
   <h4> Our UI Kits match our Blog topics to give teams the chance to design and build the perfect experience.</h4>
      </div>
     
     <div className={styles.section_six}>
     <h1> Here You Find flexibility by Yours Choice</h1>
     <button>Contact us</button>
     </div>
    </div>
  );
};

export default Events;

import React, { useEffect } from "react";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import Nav from "../components/nav";
import Carousel from "../components/carousel";
import Link from "next/link";
import DogImage from "../components/randomImages";
const Services = () => {

 
const bloggingCategories = [
    {
      title: "Lifestyle Blogging",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIt9WFwROj9lFVHtfdOJDKZ5X76D2r6s3ZQ&usqp=CAU",
      subcategories: [
        {
          name: "Fashion",
          link:"https://www.vogue.com/fashion"
        },
        {
          name:"Beauty",
          link:"https://www.everydayhealth.com/skin-beauty/all-articles/",
        },
        {
          name: "Home Decor",
          link:"https://www.housebeautiful.com/home-remodeling/diy-projects/g1242/quick-easy-home-decorating-ideas-0612/",

        },
        {
          name:  "Personal Development",
          link:"https://www.identitydevelopmentinstitute.com/id-sessions-and-you?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbsVWVYtPD4c0Ncyl5c5taOn4YAsmV34Dipcwh2shNYJJ7k8ffTonoaAu8xEALw_wcB"
        },
        {
          name:   "Product Reviews",
          link:"https://partners.livechat.com/blog/how-to-write-a-product-review/",
        },
       ],
    },
    {
      title: "Travel Blogging",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaB2UyTyw3I3pmR6FAFHzpZa5MrOc5OdTMDw&usqp=CAU",
      subcategories: [
        {
          name:  "Travel Destinations",
          image:"https://w7.pngwing.com/pngs/791/242/png-transparent-world-travel-illustration-world-map-globe-travel-global-travel-logo-computer-wallpaper-world-thumbnail.png",
          link:"https://timesofindia.indiatimes.com/travel/topic/tourist-destination/articles",
        },

        {
          name:    "Travel Tips",
          link:"https://www.spendlifetraveling.com/category/general-travel-tips/"
        },
        {
          name:"Adventure Travel",
          link:"https://www.goabroad.com/articles/adventure-travel-abroad"
        },
        {
          name: "Budget Travel",
          link:"https://www.ef.com/wwen/blog/language/how-to-travel-on-a-budget-9-best-tips/"
        },
      
        ],
    },
    {
      title: "Health and Wellness",
      image:"https://media1.popsugar-assets.com/files/thumbor/BgkAjyd09FMqU4Lm_x_g-xpm0eE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/07/29/603/n/2589278/tmp_bjZclq_6a62983c044b5759_mikegripz.jpg",
      subcategories: [

        {name: "Fitness",
      link:"https://medshadow.org/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wa5l9X3EMgWNU_0-I8zHAea1RR3FuAO3xbZKKOBlLrXkJ1wup-mUqEaAtlMEALw_wcB"
    },
    {name: "Nutrition",
    link:"https://www.cuddlesfoundation.org/food-junk-to-food-jewels/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wZ3KzwUaPuhqSCb6rp5TcHV1Z9hxVWjmxkntjyPvQW-l8C7UmD6PJYaAoltEALw_wcB"
  },
  {name:"Mental Health",
    link:"https://thisismybrave.org/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wZhum9i_hy6ZBt9yXA_q3PzbwwE9OLbp0jXHDxwMk9vMLyvYTo12goaAt03EALw_wcB"
  },
  {name: "Wellness Tips",
    link:"https://globalwellnessinstitute.org/industry-research/2023-health-happiness-and-the-wellness-economy-an-empirical-analysis/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wYv22S5zuTTnNyk8rUa2SrxzKTZVBMlbHv_vfY0m8wmwiw_b6xDzfIaAiHcEALw_wcB"
  },
  {name: "Healthy Recipes",
    link:"https://baker.edu.au/health-hub/recipes?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbyCjE1N1fx18-5ifDBxjTDqKo94-Pqz4PwY9LE_vlIR2SLm0YD97saAhoPEALw_wcB"
  },
       ],
    },
    {
      title: "Technology Blogging",
      image:"https://canthardlydress.com/wp-content/uploads/2017/04/liz-phair-1990s-fashion.jpg",
      subcategories: [
        {
          name: "Gadgets and Devices",
          link:"https://timesofindia.indiatimes.com/readersblog/silvercascade/impact-of-gadgets-in-our-life-40978/",
        },
        {
          name:  "Software Reviews",
          link:"https://www.researchgate.net/topic/Software-Project-Management/publications",
        },
        {
          name:"Tech News",
          link:"https://empowering-people-network.siemens-stiftung.org/solutions/?mtm_campaign=Generics_India&mtm_kwd=technology%20articles&mtm_source=google&mtm_medium=cpc&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wa1_bOwHcUCxbAiW1JbONhIDARce-fdnWhhpPXgKEV6kM2IXcASs9AaAsKvEALw_wcB",
        },
        {
          name:"Coding Tutorials",
          link:"https://www.wefindanswers.co/web?q=learning+coding+for+beginners&o=1670187&gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbV1yCY052mLFjrzdaZuoWkZnDuJgJqA_mXxjUdHlVHAMM9zXKHlTMaAv6NEALw_wcB&qo=semQuery&ag=fw59&an=google_s&tt=rmd&ad=semA&akid=1000000170wef161475800788kwd-296614886811",
        },
        {
          name: "Product Comparisons",
          link:"https://getlasso.co/how-to-write-product-comparison-posts/",
        },
       
       
        
        
        
      ],
    },
    {
      title: "Finance Blogging",
      image:"https://www.shutterstock.com/image-photo/happy-young-african-american-business-260nw-2346454899.jpg",
       subcategories: [

    {
      name: "Personal Finance",
      link:"https://www.livemint.com/money/personal-finance"
    },
    {
      name:  "Saving Strategies",
      link:"https://www.nerdwallet.com/article/finance/7-saving-strategies-you-may-not-have-tried-yet",
    },
    {
      name:   "Budgeting",
      link:"https://www.investopedia.com/articles/pf/06/budgeting.asp"
    },
    {
      name:  "Financial Planning",
      link:"https://www.nerdwallet.com/article/investing/what-is-a-financial-plan"
    },
    {
      name:  "Investment Tips",
      link:"https://www.sec.gov/oiea/investor-alerts-and-bulletins/investor-bulletin-top-10-investment-tips-college-students"
    },
        ],
    },
    {
      title: "Food and Cooking",
      image:"https://www.shutterstock.com/image-photo/healthy-food-home-woman-preparing-260nw-2123506865.jpg",
      subcategories: [
        {
          name:  "Cooking Tips",

          link:"https://www.betterhealth.vic.gov.au/health/healthyliving/healthy-cooking-tips",
        },
        {
          name:   "Recipes",
          link:"https://recipes.timesofindia.com/"
        },
        {
          name:  "Restaurant Reviews",
          link:"https://food.ndtv.com/topic/restaurant-review/articles"
        },
        {
          name:   "Culinary Adventures",
          link:"https://retirement.outlookindia.com/spend/travel/culinary-adventures-for-seasoned-palates-exploring-rich-gastronomic-heritage-of-india"
        },
        {
          name:   "Dietary Restrictions (e.g., Vegan, Gluten-Free)",
          link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3453894/"
        },
    ],
    },
    {
      title: "Parenting and Family",
      image:"https://m.media-amazon.com/images/I/91b7otJiNyL.jpg",
      subcategories: [
        {
          name:   "Parenting Tips",
          link:"https://youthendowmentfund.org.uk/toolkit/parenting-programmes/?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wZM8dMRp_0GQE7DCeDi1P0Hd-dXKhh-AmIpATwv3xWBXtHUQz4lnVUaAkMbEALw_wcB"
        },
       {
          name:    "Personal Stories",
          link:"https://www.ourbetterworld.org/series/from-singapore-with-love?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbFx_lxuGezKdpOPizFQhn1py47lu0n8Mm3bbdhPbj8Ks5NpDQejGMaAkvJEALw_wcB"
        }, {
          name:   "Product Recommendations for Families",
          link:"https://www.babybargains.com/"
        }, {
          name:     "Family Activities",
          link:"https://www.parents.com/fun/activities/outdoor/weekend-family-activities/"
        },
  ],
    },
    {
      title: "DIY and Crafts",
      image:"https://m.media-amazon.com/images/I/81SDd3YhmOL._AC_UF350,350_QL80_.jpg",
      subcategories: [
        {name: "Craft Tutorials",
      link:"https://thelittlepomegranate.co.uk/category/crafting/craft-tutorials/"},
     {name:  "Home Improvement",
      link:"https://www.bhg.com/home-improvement/"},
      {name:   "DIY Projects",
      link:"https://www.architecturaldigest.com/story/diy-home-projects-for-value"},
      {name:"Handmade Creations",
      link:"https://dudusonline.com/blogs/articles/the-beauty-of-handmade-crafts-a-look-into-the-artistry"},
      {name: "Upcycling",
      link:"https://www.futurelearn.com/info/courses/upcycling-for-change-from-green-ideas-to-startup-businesses/0/steps/67684"},
      ],
    },
    {
      title: "Entertainment and Pop Culture",
      image:"https://www.billboard.com/wp-content/uploads/2023/08/Best-Album-Covers-of-All-Time-billboard-1548.jpg?w=875&h=583&crop=1",
      subcategories: [
        {name:"Movie Reviews",
        link:"https://www.nytimes.com/reviews/movies"},
        {name: "TV Show Recommendations",
        link:"https://techcrunch.com/2020/04/03/27-tv-show-recommendations-from-techcrunch-while-youre-stuck-at-home/"},
        {name: "Celebrity News",
        link:"https://www.harpersbazaar.com/celebrity/latest/"},
        {name: "Event Coverage",
        link:"https://tragicfarce.com/2011/06/27/writing-sample-event-coverage/"},
      
       
       
        
       
      ],
    },
    {
      title: "Career and Business",
      
      image:"https://styles.redditmedia.com/t5_3h89k/styles/communityIcon_ki20c63ueoi81.png",
      subcategories: [
        {name:"Career Advice",
      link:"https://www.themuse.com/advice"},
      {name: "Entrepreneurship",
      link:"https://accessventures.org/blog/a-little-help-goes-a-long-way/?utm_term=social%20entrepreneurship&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7636405710&hsa_cam=19633156775&hsa_grp=147389403085&hsa_ad=658668304053&hsa_src=g&hsa_tgt=kwd-335292700261&hsa_kw=social%20entrepreneurship&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbrKxgRB4U4KbPhIPpbFn1ok1NIpfedMPx2CT-FK8dGfLdZ_s5D9T8aAsQ7EALw_wcB"}, 
       {name:"Business Strategies",
      link:"https://www.mdpi.com/2199-8531/8/3/163"}, 
      
      {name:"Workplace Culture",
      link:"https://www.forbes.com/sites/sheilacallaham/2022/03/30/workplace-culture-5-key-elements-for-a-positive-employee-environment/"},
        {name:"Professional Development",
      link:"https://www.iedconline.org/pages/students-and-young-professionals/?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbMMna05P00s9wqDBbzwk0ThVzrMZGE9tQEzpwCrDS8IQUQui38AIgaAt0iEALw_wcB"},
       
      ],
    },
    {
      title: "Science and Nature",
      image:"https://www.shutterstock.com/image-photo/happy-young-woman-lying-on-260nw-393371104.jpg",
      subcategories: [
        {name:"Science News",
      link:"https://berlinscienceweek.com/?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wY_RjOXxJUEPgI707-GYBgVc_xCpg321mxunZEr-zgtX1I1snWW1T0aAvzyEALw_wcB"},
      {name: "Nature Exploration",
      link:"https://academic.oup.com/bioscience/article-abstract/32/5/321/246203"},
      {name: "Astronomy",
      link:"https://www.insidescience.org/space?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_waYk15r-CZpNZqWIaFpYaw2merKD8EGiK6mF5zbAFVDYcP2XnckDMIaAoBhEALw_wcB"},
       {name: "Wildlife Conservation",
      link:"https://bio4climate.org/featured-creature/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wYch-GH11QvIwPcivH4lMfaHgqXYNUIZU3Ry5PpZuWIFKj-TAiHCEIaArlAEALw_wcB"},
       {name:"Environmental Issues",
      link:"https://pacinst.org/environmental-health-and-justice/?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wbKtYZvaQlAoHy4y3nEEVOtSZsJrTLGZQK-a_SBKJb-rSTGPZCm7KMaAse3EALw_wcB"},
       ],
    },
    {
      title: "Social Issues and Advocacy",
      
       image:"https://cdna.artstation.com/p/assets/images/images/012/350/096/large/medha-srivastava-acid-attack.jpg?1534344369",
      subcategories: [
        {name: "Social Justice",
      link:"https://www.britannica.com/topic/social-justice"},
      {name:  "Community Engagement",
      link:"https://www.tandfonline.com/doi/full/10.1080/17538068.2021.1935569"},
      {name: "Diversity and Inclusion",
      link:"https://www.jamesgmartin.center/2021/05/the-origins-of-the-cruel-ritual-of-diversity-training/?gad_source=1&gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wZxI1Z2aJonN2wT3zow_QpS42LgEdyH3rYSpj9_JwhI71AwdfyWNDEaAhmGEALw_wcB"},
       {name: "Environmental Activism",
      link:"https://www.tamera.org/water-is-life/?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wY4ib00cEX4HzGGrt3NrHo4LJFd2YOs_poRQpxEdWkWlrFj0WzafiEaArDREALw_wcB"}, {name: "Human Rights",
      link:"https://www.endslaverynow.org/act/educate/human-rights-and-slavery?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_wYgivwGDGJB9IUkxG7Py8_9Xmaw-GGvUwWcmzzM52Zdk4gn2HcCeOIaAg5XEALw_wcB"},
        
      ],
    },
    {
      title: "Education and Learning",
       image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/07/18/16/aaa.jpg",
      subcategories: [
      
        {name:"Learning Strategies",
        link:"https://www.frontiersin.org/articles/10.3389/fpsyg.2021.717683/full"},
         {name:"Online Courses",
        link:"https://bmcmededuc.biomedcentral.com/articles/10.1186/s12909-021-02909-z"},
         {name: "Study Tips",
        link:"https://www.advancetheseed.org/blog/the-art-of-staying-motivated-tips-for-consistent-inspiration?gclid=Cj0KCQiAwP6sBhDAARIsAPfK_waPew6nt_F3jd3JuT5U8mu5QCFPl6qFTUZ9wKcMPu-U3u7amFHGw_EaAg0GEALw_wcB"},
       ],
    },
    {
      title: "Relationships",
       
       image:"https://www.picsy.in/images/contentimages/images/Blog_10_Banner_1_new_size.jpg",
      subcategories: [
        {name:  "Dating Advice",
        link:"https://www.cosmopolitan.com/dating-relationship-advice/"},
        {name:  "Relationship Tips",
        link:"https://www.self.com/story/relationship-advice-long-term-couples"},
        {name:  "Marriage Advice",
        link:"https://www.goodhousekeeping.com/life/relationships/g4872/marriage-tips-from-longtime-couples/"},
       ],
    },
    {
      title: "Spirituality and Philosophy",
      image:"https://i.scdn.co/image/ab67616d0000b2739624084e335c89b706eea1c7",
      subcategories: [
        {
          name: "Spiritual Practices",
          link:"https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00215/full"
        },
        {
          name:  "Philosophy Discussions",
          link:"https://link.springer.com/article/10.1007/BF00567747"
        },
        {
          name: "Personal Reflections",
          link:"https://www.tandfonline.com/doi/full/10.1080/1358684X.2021.1934401"
        },
       ],
    },
    {
      title: "Fitness and Sports",
       image:"https://s1.1zoom.me/b6860/520/Fitness_rope_Gym_Workout_585109_640x960.jpg",
      subcategories: [

        {name:"Workout Routines",
      link:"https://www.muscleandfitness.com/workout-routines/"},
      {name:"Fitness Challenges",
      link:"https://www.glofox.com/blog/fitness-challenges/"},
       {name:"Sports Events Coverage",
      link:"https://www.atlas-mag.net/en/article/insurance-of-sporting-events-0"},
      ],
    },
  ];

  useEffect(() => {
    // Load Typed.js library from the CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Typed.js after the script is loaded
      var typed = new Typed("#element", {
        strings: [
          "Welcome to Our Blogging Services",
          "Fitness and Support",
          "Spirituality and Philosophy",
          "Social Issues and Advocacy",
          "Education and Learning",
          "Welcome to Our Blogging Services",
          "Spiritual Practices",
          "Philosophy Discussions",
          "Mindfulness",
          "Meditation",
          "Personal Reflections",
          "Educational Resources",
          "Study Tips",
          "Learning Strategies",
          "Book Reviews (Educational)",
          "Online Courses",
          "Social Justice",
        "Human Rights",
        "Environmental Activism",
        "Diversity and Inclusion",
        "Community Engagement",
        ],
        typeSpeed: 100,
        loop: false,
      });
    };

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className={styles.servicesPage}>
      {/* section1 */}
      <div className={styles.serviceSubSection}>
        <div className={styles.header_left}>
          {/* Element to contain animated typing */}
<span id="element"></span>
        </div>
                <div className={styles.header_right}>
       
        </div>
      </div>

      {/* section2 */}
      <div className={styles.button_section}>
        <button>Run your project now</button>
        <button>See pricing</button>
        <button>Chat with Gcore experts</button>
      </div>
{/* 
      section3  */}
      <div className={styles.services_mid_section}>
        <h1>Explore Gcore Blog Edge Services</h1>
        <h3>Service group</h3>
      </div>

     
      <div className={styles.service_about_part}>
<div className={styles.service_about_part_card}>
<img src="https://designshop-6aa0.kxcdn.com/photos/greeting_card-live-love-travel-32618_58.jpg" />
<img src="https://designshop-6aa0.kxcdn.com/photos/you-and-me-42899_16.jpg" />
<img src="https://designshop-6aa0.kxcdn.com/photos/greeting_card-send-greeting-card-online-gemeinsam-einsam-32828_24.jpg"/>
</div>
</div>
 {/* section4 */}
      <div className={styles.blog_section_part}>
      <Carousel bloggingCategories={bloggingCategories}/>
      </div>
   
      <div className={styles.carousel_subsection}>
    <h1>Need a team of Blogging experts</h1>
  <Link href="/contact/social">
  <a>
    <button>Contact us</button>
  </a>
</Link>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import styles from '../../styles/social.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaAngleDoubleRight } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
const SocialMedia = () => {
  const officeAddr=[
    {
      image:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Contact%20Us/dublin.jpg",
      heading:"Dublin (European HQ)",
      Adddress:"1 Sir John Rogerson's Quay, Dublin 2",
      Phone:"+353 1 5187500",
    },
    {
      image:"	https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Contact%20Us/singapore.jpg",
      heading:"Singapore (Asia-Pacific HQ)",
      Adddress:"60 Anson Mapletree Anson,#10-03 ",
      Phone:"+65 6955 6000",
    },
    {
      image:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/Contact%20Us/sydney.jpg",
      heading:"Sydney (Australia Office)",
      Adddress:"20 Hunter St, Level 7 sydney NSW 2000",
      Phone:"+61 1300 482 776",
    },
    {
      image:"	https://53.fs1.hubspotusercontent-na1.net/hubfs/53/190320hbs62898f.jpg",
      heading:"Tokyo (Japan Office)",
      Adddress:"ShinOtemachi Building 9F, 2-2-1 Otemachi,Chiyoda-ku, Tokyo 100-0004,Japan",
      Phone:"+81 3 6863 5293",
    },
    {
      image:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/hubspot-berlin.jpg",
      heading:"Berlin (Berlin Office)",
      Adddress:"HubSpot Germany GmbH AM Postbahnhof 17 10243 Berlin ",
      Phone:"+49 30 22027335",
    },
    {
      image:"	https://53.fs1.hubspotusercontent-na1.net/hubfs/53/LATAM%20GWH/Bogota.jpg",
      heading:"Bogotá (Latin American HQ)",
      Adddress:"carrera 11 #79-35 5th Floor Bogota, Colombia 111321",
      Phone:"+57 1800 518 9736",
    },
    {
      image:"https://53.fs1.hubspotusercontent-na1.net/hubfs/53/HubSpot%20Paris.png",
      heading:"Paris (Paris Office)",
      Adddress:"9 Boulevard Haussman 75009 Paris, France",
      Phone:"+33 1 86 26 07 91",
    },
    {
      image:"	https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ghent.jpg",
      heading:"Ghent (Belgium Office) - PieSync",
      Adddress:"Notarisstraat 1 B - 9000 Ghent Belgium",
      Phone:" +32 93200350",
    },
   
    {
      image:"https://www.hubspot.com/hubfs/London.jpeg",
      heading:"London",
      Adddress:"5th Floor, City Bridge House,57 Southwark St, London,SE1 1RU",
      Phone:"",
    },
    {
      image:"	https://www.hubspot.com/hubfs/Toronto.jpeg",
      heading:"Toronto",
      Adddress:"340 King Street E Toronto,Ontario M5A 1K",
      Phone:"",
    },
  ]

  const salesData=[
    {Continent:"Americas",
  countries:[{country:"U.S. and Canada",
  phone1:"+1 857 829 5060 (English)",
phone2:"+1 857 829 5064 (Spanish)"},
{country:"Brazil",
phone1:"+55 21 2018 1092 (Portuguese)",
phone2:""},
{country:"Chile",
phone1:"+56 2 2582 3853 (Spanish)",
phone2:""},
{country:"Colombia",
phone1:"+57 601 381 9242 (Spanish)",
phone2:""},
{country:"Mexico",
phone1:"+52 55 8525 9498 (Spanish)",
phone2:""}]},
   {Continent:"Europe",
  countries:[
    {country:"Austria",
  phone1:"+43 720 902 456 (German)",
phone2:"+43 720 902 440 (English)"},
{country:"Belgium",
phone1:"+32 2 808 4733 (French)",
phone2:"+32 2 808 4734 (English)"},
{country:"Denmark",
phone1:"+45 6996 0208 (English)",
phone2:""},
{country:"Finland",
phone1:"+358 7 5325 2986 (English)",
phone2:""},
{country:"Finland",
phone1:"+65 6955 6065 (English)",
phone2:""},
{country:"France",
phone1:"+33 1 84 88 62 37 (English)",
phone2:"+33 1 86 26 07 91 (French)"},
{country:"Germany",
phone1:"+49 32 221094286 (German)",
phone2:"+49 69 153253503 (English)"},
{country:"Ireland",
phone1:"+353 1 512 4400 (English)",
phone2:""},
{country:"Luxembourg",
phone1:"+352 20 88 02 45 (French)",
phone2:"+352 20 20 33 26 (German)"},
{country:"Norway",
phone1:"+47 800 62 422 (English)",
phone2:""},
{country:"Netherlands",
phone1:"+353 1 512 4400 (English)",
phone2:"+352 20 88 04 87 (English)"},
{country:"Portugal",
phone1:"+351 3 0880 1663 (English)",
phone2:""},
{country:"Spain",
phone1:"+34 911 238 255 (Spanish)",
phone2:"+34 911 238 253 (English)"},
{country:"Sweden",
phone1:"+46 7 7421 8808 (English)",
phone2:"+41 22 518 2097 (German)"},
{country:"Switzerland",
phone1:"+41 22 518 2430 (French)",
phone2:"+41 22 518 2440 (English)"},
{country:"United Kingdom",
phone1:"+44 20 3514 0663 (English)",
phone2:""}
  ]} ,
  {Continent:"Asia Pacific",
  countries:[
    {country:"Australia",
  phone1:"+43 720 902 456 (German)",
phone2:"+43 720 902 440 (English)"},
{country:"Hong Kong",
phone1:"+32 2 808 4733 (French)",
phone2:"+32 2 808 4734 (English)"},
{country:"India",
phone1:"+45 6996 0208 (English)",
phone2:""},
{country:"Japan",
phone1:"+358 7 5325 2986 (English)",
phone2:""},
{country:"New Zealand",
phone1:"+64 9 801 1072 (English)",
phone2:""},
{country:"France",
phone1:"+33 1 84 88 62 37 (English)",
phone2:"+33 1 86 26 07 91 (French)"},
{country:"Singapore",
phone1:"+49 32 221094286 (German)",
phone2:"+49 69 153253503 (English)"},
{country:"South Korea",
phone1:"+353 1 512 4400 (English)",
phone2:""},

  ]}
  ]
  return (
 <div className={styles.social_main_section}>
<div className={styles.social_sub_section}>
<div className={styles.social_first_section}>
<div className={styles.social_first_left}>
<h1>Get in Touch</h1>
<p>
Want to get in touch? Wed love to hear from you. Heres how you can reach us.
</p>
</div>
<div className={styles.social_first_right}>
<img src="https://imageio.forbes.com/specials-images/imageserve/621bc2697cca6e152b6f0b19/Companies-succeed-when-employee-engagement-is-a-priority-/960x0.jpg?format=jpg&width=960"/>
</div>
</div>
<div className={styles.social_second}>
<div className={styles.social_second_left}>
<FaPhoneAlt size={30} style={{color:"orange"}}/>
<h1>Talk to Sales</h1>
<p>Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.</p>
<h1>+1 857 829 5060</h1>
</div>
<div className={styles.social_second_right}>
<TiMessages size={40}  style={{color:"orange"}}/>
<h1>Contact Customer Support</h1>
<p>Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.</p>
<button>Contact Support</button>
</div>
</div>
<h1 style={{textAlign:"center",color:"orangered"}}>
  Connect with one of our global offices
 </h1>
<div className={styles.social_third}>
 
 <div className={styles.social_third_left}>
<img src="https://i.stack.imgur.com/1kxSt.png"/>
 </div>
 <div className={styles.social_third_right}>
  <h1>Headquarters</h1>
  <h4>2 Canal Park</h4>
  <h4>Cambridge, MA 02141</h4>
  <h4>United States</h4>
  <h4>Phone / Fax</h4>
  <p>+ 1 888 HUBSPOT</p>
  <p>(+1 888 482 7768)</p>
  <p>Fax: +1 617 812 5820</p>
  <h4>Press / Media / Blogger Information</h4>
  <h4>Visit our Newsroom for contact info</h4>
 </div>
</div>
<h1 style={{textAlign:"center"}}><FaAngleDoubleRight style={{color:"orangered",fontFamily:"fantasy"}}/>How to find this office</h1>
<div className={styles.social_fourth}>
        {officeAddr.map((item, index) => (
          <div className={styles.office_section} key={index}>
            {(index % 2 === 0) ? (
              <>
                <div className={styles.social_fourth_left}>
                  <img src={item.image} alt={`Office ${index + 1}`} />
                </div>
                <div className={styles.social_fourth_right}>
                  <h1 >{item.heading}</h1>
                  <p>Address: {item.Adddress}</p>
                  {item.Phone && <h4>Phone: {item.Phone}</h4>}
                </div>
              </>
            ) : (
              <>
                <div className={styles.social_fourth_right}>
                  <h1>{item.heading}</h1>
                  <p>Address: {item.Adddress}</p>
                  {item.Phone && <h4>Phone: {item.Phone}</h4>}
                </div>
                <div className={styles.social_fourth_left}>
                  <img src={item.image} alt={`Office ${index + 1}`} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <h1 style={{textAlign:"center",color:"rgb(61, 106, 124)"}}>Call sales using one of our local numbers</h1>
      <div className={styles.social_fifth_section}>
  <div className={styles.social_contact_sales}>
  {salesData.map((salesItem, index) => (
        <div key={index} className={styles.sales_card}>
          <h2 style={{width:"100%",textAlign:"center",color:"rgb(61, 106, 124)"}}>{salesItem.Continent}</h2>
          {salesItem.countries.map((country, countryIndex) => (
            <div key={countryIndex} className={styles.card}>
              <h3>{country.country}</h3>
              <p> {country.phone1}</p>
              {country.phone2 && <p>{country.phone2}</p>}
            </div>
          ))}
        </div>
      ))}
  </div>
      </div>
      <div className={styles.social_sixth}>
    <ContactForm/>
      </div>
    </div>
    </div>
  );
};

export default SocialMedia;
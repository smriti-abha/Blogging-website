import React, { useState, useEffect } from 'react';
import styles from '../../styles/travel.module.css';
import ContactForm from '../components/ContactForm';

const Parallax = () => {
  const backgroundImages = [
    'https://assets.cntraveller.in/photos/60ba1f2ff27d46df614fc638/16:9/w_1280,c_limit/Untitled-collage.jpg',
    'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/03/Learn-about-the-Rich-Culture-of-Northeast-India.jpg?fit=1200%2C787&ssl=1',
    'https://www.andreamarchegiani.it/wp-content/uploads/2020/10/travel-varanasi-india-45.webp',
    'https://tourmyodisha.com/wp-content/uploads/2022/10/Alappuzha.jpg',
    'https://theluxurytripswp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/24175231/1-25.jpg',
    'https://www.tpci.in/indiabusinesstrade/wp-content/uploads/2023/11/India-Tourism-Lead-Image.jpg',
    'https://i.natgeofe.com/n/a0e08359-78b0-47d4-8c5e-1296b74170bf/golden-temple-solo-india.jpg',

  ];

  const contentData = [
    {
      title: "Find a Perfect holiday Destination",
      paragraphs: ["East India", "Seven sisters of different traits, breathtaking in beauty, charming in grace; waterfalls, wildlife, natural wonders, North East is the place, where falls thunder Consisting of 7 states, also called 'Seven Sisters', North East India can be a scenic treat for all the travellers. A trip to North East India will sweep you off your feet! Booking a North East India tour package can allow you to witness the charming region of rugged beauty, it’s a wonderland where glacial rivers flow through plunging Himalayan gorges, faith moves mountains on perilous pilgrimages to Tawang, rhinos graze in the swampy grasslands of Kaziranga and former head-hunters slowly embrace modernity in Nagaland. "],
      form: <form>{/* Form content */}</form>,
      images: [
        'https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI=',
        'https://www.tourmyindia.com/destination_india/images/pelling.jpg',
        'https://lh3.googleusercontent.com/proxy/g9V10wG2feHvfdwsBnwEvFqMWuYuKHABtgt7BAvXc7LeEC8jGkmrRYisZ3TGwLXngI4D5qlOyiK9yAlNo234vVTUUdNOzHl-YXcpZJgTLy-R08xyjGHxBmZEyJo6mLJXT9Z-SKBbzw',
      'https://fearlessfemaletravels.com/wp-content/uploads/2022/11/places-to-visit-in-india-jaipur-1024x768.jpg',
      'https://www.holidify.com/images/compressed/attractions/attr_1448.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/37/The_Senate_House%2C_Madras.jpg',
      'https://www.tourmyindia.com/destination_india/images/bodhgaya.jpg',
      ],
    },
    {
      title: "West India",
      paragraphs: ["West India","On a general assumption, the western district of India is more than the fascination of Goa. Be that as it may, the western district of India offers numerous alternatives for the correct travel goal as it ticks all the checkboxes to take into account better places of explorers. The district incorporates delightful sea shores, beautiful hills, experience treks, energetic societies and that's just the beginning. Goa without a doubt assumes the acknowledgment of pulling in tremendous strata in Western India. However the district also pulls in visitors to some outstanding destinations like Mumbai, Goa,Aurangabad, Ajanta and Ellora, Ahmedabad, and Khajuraho."],
      form: <form>{/* Another Form content */}</form>,
      images: [
        'https://www.ghumindiaghum.com/blog/wp-content/uploads/2020/11/collage-of-images-from-famous-location-in-rajasthan-north-india-1024x682.jpg',
        'https://www.authenticindiatours.com/app/uploads/2022/05/10-reasons-to-visit-west-India-Sun-Temple-Gujarat-1400x550-c-default.jpg',
        'https://travel-blog.waytoindia.com/wp-content/uploads/2016/07/as-4.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcSaoCIDm71BNCdvjea01O1PW3ndudrERMSno2mFN4g&s',
        'https://media.istockphoto.com/id/506921606/photo/western-ghats-mountains.jpg?s=170667a&w=0&k=20&c=hOiDdYqtCWjo6eNKoshp5Vd0L_d1kYMc8G7RJpIJoRE=',
        'https://www.authenticindiatours.com/app/uploads/2022/05/World-Heritage-Sites-in-West-India-Great-Stupa-of-Sanchi-940x585-c-default.jpg',
        'https://www.shutterstock.com/image-photo/view-annapurna-temple-famous-hindu-600nw-2163484785.jpg',
        'https://static.toiimg.com/thumb/msid-88972825,width-748,height-499,resizemode=4,imgsize-127068/.jpg',
        'https://live.staticflickr.com/494/20042584712_b81a5f40f9_b.jpg',
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/472000/472847-India.jpg'
      ],
    },
    {title: "North India",
    paragraphs: ["North India","North India is like a set of thali that has every desirable element to satisfy your taste buds. From the poetic beauty of Kashmir to the royal grandeur of Rajasthan. From the purest symbol of love, Taj Mahal to where there exists copious Himalayan Mountains, offbeat places, pilgrimage sites, famous cities and age-old sandstone creations. The places in this northern region can astound you by their cultural extravaganza, architectural marvels and local cuisine, all so different from each other yet sharing the same region."],
    form: <form>{/* Another Form content */}</form>,
    images: [
      'https://assets.vogue.in/photos/5ce4345bf55c271836a2829f/16:9/w_1920,h_1080,c_limit/7-places-in-North-India-you-must-visit-during-winter.jpg',
      'https://www.bookmundi.com/_ipx/f_jpeg&q_55&s_3072x1722/https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/north-india-tour-1556188189-785X440.jpg',
      'https://assets-news.housing.com/news/wp-content/uploads/2022/08/05095206/Top-15-tourist-places-in-northern-India-09.jpg',
      'https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2015/05/Enchanting-Travels-India-Tours-North-Delhi-HumayunsTombMausoleum-CharBaghGardens.jpg',
      'https://c.myholidays.com/packages/4e3aa5b1-1abe-4040-af87-e19a7f5f66b0/original/455143fd-e44b-4d8c-b7bb-d70e15fdfabf.webp',
      'https://traveltriangle.com/blog/wp-content/uploads/2016/08/honeymoon-in-north-india-srinagar.jpg',
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68296-Hawa-Mahal.jpg',
      'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/12/Kullu-Manali3-1.jpg?resize=1200%2C900&ssl=1',
      'https://media.istockphoto.com/id/483961593/photo/beautiful-landscape-in-norther-part-of-india.webp?b=1&s=170667a&w=0&k=20&c=GnFVFBzlaybR7-10nD3_ijvCSYOY_qcc77n2RaspJ2o=',
      'https://www.traveltoindia.org/images/destination/Wonderful-Rajasthan2.jpg'
       ],},
       {title: "South India",
       paragraphs: ["South India","South India is a haven for all creatures great and small, from magnificent tigers and elephants to beautiful rare birds.Experience elephants in the wild from a covered boat or car tour, or brave it on foot with a local guide at Periyar National Park (Thekkady).South India is home to one of the largest populations of endangered Bengal tigers and Indian elephants in India,being home to one-third of the tiger population and more than half of the elephant population, with 14 Project Tiger reserves and 11 Project Elephant reserves.South India is known for its music and for its arts and rich literature. Madras or Chennai can be called the cultural capital and the soul of Mother India. The city is built low in pleasant contrast to the ghoulish tall structures of Mumbai and Kolkata. It has vast open spaces and ample greenery."],
       form: <form>{/* Another Form content */}</form>,
       images: [
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101675-Alappuzha-District.jpg',
        'https://www.originaltravel.co.uk/travel-blog/ShowPhoto/3863/0',
        'https://cdn.tourradar.com/s3/tour/360x210/133384_42e94c23.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhaWIxB83QRhjen95dlpwTm7lA896VMqlJ4bFC9pBUg&s',
        'https://www.shutterstock.com/image-photo/aguada-fort-north-goa-seventeenthcentury-260nw-1065727913.jpg',
        'https://www.keralaholidays.com/uploads/tourpackages-gallery/thumb/Alluring-South-Indian-destinations.jpg',
        'https://www.fabhotels.com/blog/wp-content/uploads/2019/09/OOTY-1.jpg',
        'https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Hyderabad-1.jpg',
        'https://images.squarespace-cdn.com/content/v1/5e5ca6378bc6f77bb4ba3e9a/1583517153352-9IWF67MY66LUUSSRCV9Z/Catherine-Karnow-Photo-Workshop-South-India-14a.jpg?format=1500w',
        'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18203605/Places-to-visit-in-south-India-for-a-thrilling-excursion-15.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFNft2MiWw-JXlY9iHkJmpHZSE9CJsjA0p5iJybWrUw&s'
         ],},
         {title: "Popular Tours",
        images: [
          'https://www.fabhotels.com/blog/wp-content/uploads/2023/01/dal-lake-1.jpg',
          'https://blog.thomascook.in/wp-content/uploads/2018/05/img-5-3-e1526875868798.jpg',
          'https://ihplb.b-cdn.net/wp-content/uploads/2016/05/kedarnath-1.jpg',
          'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-Places-To-Visit-In-West-Bengal_13th-jan.jpg',
          'https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/vishwa-shanti-stupa-rajgir.jpg',
          'https://tripindia.co.in/uploads/Memorable-Jharkhand-Tour1.jpg',
          'https://media.easemytrip.com/media/Blog/India/636930842583038346/636930842583038346dWGDuu.jpg',
          'https://taxifornortheast.com/wp-content/uploads/2023/01/Bihu_in_Assam.webp',
          'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Sanamahi-Temple-Manipur.jpg?fit=800%2C450&ssl=1',
          'https://static.javatpoint.com/tourist-places/images/tourist-places-in-maharashtra4.png',
         ],},
         {form:<form>{<ContactForm/>}</form>}
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.parallaxContainer}>
      {backgroundImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`${styles.parallaxSection} ${
            index % 2 === 1 ? styles.parallax : styles.normal
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className={styles.sectionText}>
            {index % 2 === 1 ? `Parallax Section ${index + 1}` : `Normal Section ${index + 1}`}
            {contentData[currentSlideIndex] && (
              <>
                {contentData[currentSlideIndex].title && <h1>{contentData[currentSlideIndex].title}</h1>}
                {contentData[currentSlideIndex].paragraphs && contentData[currentSlideIndex].paragraphs.map((paragraph, i) => (
                  <p key={i} style={{ fontSize: "0.9rem", lineHeight: "1.8rem", wordSpacing: "0.4rem", paddingBottom: "2rem" }}>{paragraph}</p>
                ))}
                {contentData[currentSlideIndex].form && contentData[currentSlideIndex].form}
                {contentData[currentSlideIndex].images && (
                  <div className={styles.carousel}>
                    <button className={styles.prevButton} onClick={prevSlide}>Previous</button>
                    <div className={styles.imageContainer}>
                      {contentData[currentSlideIndex].images.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`Image ${i + 1}`}
                          className={styles.image}
                        />
                      ))}
                    </div>
                    <button className={styles.nextButton} onClick={nextSlide}>Next</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parallax;
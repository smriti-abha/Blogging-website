// pages/products/[productId]/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import data from '../../components/data';
import styles from '../../../styles/dynamic.module.css'
const ProductDetail = () => {
  const router = useRouter();
  const { productId, slug } = router.query;

  const productIndex = parseInt(productId, 10) - 1;
  const product = data[productIndex];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.main_container}>
    <div  className={styles.sub_container}>
      <h1>{product.title}</h1>
      <div className={styles.second_sub_container}>
      <img src={product.img} alt={product.title} 
     />
      <p>{product.extradescription}</p>
     </div>
       <div className={styles.last_container}>
        <h1>The Art of Embracing Lifes Beautiful Moments</h1>
       <p>
       In a world that often feels like a whirlwind of chaos, finding solace in lifes simple pleasures becomes an art worth mastering. Whether its the warmth of a sunrise, the comforting aroma of a well-brewed coffee, or the gentle rustle of leaves in a quiet park, these moments, when embraced, can add a profound richness to our everyday existence.
       </p>
       <p>
       Amidst the hustle and bustle of our daily lives, taking a pause to immerse ourselves in natures symphony can be transformative. The rhythmic dance of trees, the soothing flow of a river, and the vibrant hues of a sunset – each element contributing to a masterpiece that transcends the mundane. Natures embrace invites us to slow down, breathe deeply, and savor the beauty that surrounds us.
       The allure of handmade creations lies in the unique stories they tell. Be it bespoke furniture, personalized decor, or intricately crafted accessories, each piece carries the essence of its creator. Embracing creativity in our surroundings allows us to infuse our lives with a touch of magic, transforming our spaces into reflections of our individuality.
       The bonds we forge with friends are akin to a tapestry woven with threads of shared laughter, mutual support, and unforgettable adventures. Celebrating the beauty of companionship, we find strength in the understanding that we are not alone on this journey. Friendship, in all its forms, becomes a testament to the richness of the human experience.


       </p>
       Exploring the world through the lens of culinary delights opens up a realm of discovery. From the savory notes of a well-seasoned dish to the sweetness of a decadent dessert, every bite becomes a passport to different cultures and traditions. Sharing a meal with loved ones transforms ordinary moments into cherished memories, weaving a tapestry of connection
       <p>
       In the intricate canvas of life, the art lies in recognizing and embracing the beauty woven into its very fabric. Whether through natures embrace, culinary escapades, creative expressions, or the warmth of friendships, each moment offers an opportunity to add strokes of joy to our existence. As we navigate the diverse landscapes of experience, may we find solace in the simple yet profound art of embracing lifes beautiful moments.
       </p>
       </div>
       <div className={styles.last_container}>
        <h1>The Art of Embracing Lifes Beautiful Moments</h1>
       <p>
       In a world that often feels like a whirlwind of chaos, finding solace in lifes simple pleasures becomes an art worth mastering. Whether its the warmth of a sunrise, the comforting aroma of a well-brewed coffee, or the gentle rustle of leaves in a quiet park, these moments, when embraced, can add a profound richness to our everyday existence.
       </p>
       <p>
       Amidst the hustle and bustle of our daily lives, taking a pause to immerse ourselves in natures symphony can be transformative. The rhythmic dance of trees, the soothing flow of a river, and the vibrant hues of a sunset – each element contributing to a masterpiece that transcends the mundane. Natures embrace invites us to slow down, breathe deeply, and savor the beauty that surrounds us.
       The allure of handmade creations lies in the unique stories they tell. Be it bespoke furniture, personalized decor, or intricately crafted accessories, each piece carries the essence of its creator. Embracing creativity in our surroundings allows us to infuse our lives with a touch of magic, transforming our spaces into reflections of our individuality.
       The bonds we forge with friends are akin to a tapestry woven with threads of shared laughter, mutual support, and unforgettable adventures. Celebrating the beauty of companionship, we find strength in the understanding that we are not alone on this journey. Friendship, in all its forms, becomes a testament to the richness of the human experience.


       </p>
       Exploring the world through the lens of culinary delights opens up a realm of discovery. From the savory notes of a well-seasoned dish to the sweetness of a decadent dessert, every bite becomes a passport to different cultures and traditions. Sharing a meal with loved ones transforms ordinary moments into cherished memories, weaving a tapestry of connection
       <p>
       In the intricate canvas of life, the art lies in recognizing and embracing the beauty woven into its very fabric. Whether through natures embrace, culinary escapades, creative expressions, or the warmth of friendships, each moment offers an opportunity to add strokes of joy to our existence. As we navigate the diverse landscapes of experience, may we find solace in the simple yet profound art of embracing lifes beautiful moments.
       </p>
       </div>
       
       <div className={styles.last_container}>
        <h1>The Art of Embracing Lifes Beautiful Moments</h1>
       <p>
       In a world that often feels like a whirlwind of chaos, finding solace in lifes simple pleasures becomes an art worth mastering. Whether its the warmth of a sunrise, the comforting aroma of a well-brewed coffee, or the gentle rustle of leaves in a quiet park, these moments, when embraced, can add a profound richness to our everyday existence.
       </p>
       <p>
       Amidst the hustle and bustle of our daily lives, taking a pause to immerse ourselves in natures symphony can be transformative. The rhythmic dance of trees, the soothing flow of a river, and the vibrant hues of a sunset – each element contributing to a masterpiece that transcends the mundane. Natures embrace invites us to slow down, breathe deeply, and savor the beauty that surrounds us.
       The allure of handmade creations lies in the unique stories they tell. Be it bespoke furniture, personalized decor, or intricately crafted accessories, each piece carries the essence of its creator. Embracing creativity in our surroundings allows us to infuse our lives with a touch of magic, transforming our spaces into reflections of our individuality.
       The bonds we forge with friends are akin to a tapestry woven with threads of shared laughter, mutual support, and unforgettable adventures. Celebrating the beauty of companionship, we find strength in the understanding that we are not alone on this journey. Friendship, in all its forms, becomes a testament to the richness of the human experience.


       </p>
       Exploring the world through the lens of culinary delights opens up a realm of discovery. From the savory notes of a well-seasoned dish to the sweetness of a decadent dessert, every bite becomes a passport to different cultures and traditions. Sharing a meal with loved ones transforms ordinary moments into cherished memories, weaving a tapestry of connection
       <p>
       In the intricate canvas of life, the art lies in recognizing and embracing the beauty woven into its very fabric. Whether through natures embrace, culinary escapades, creative expressions, or the warmth of friendships, each moment offers an opportunity to add strokes of joy to our existence. As we navigate the diverse landscapes of experience, may we find solace in the simple yet profound art of embracing lifes beautiful moments.
       </p>
       </div>
       
    </div>
    </div>
  );
};

export default ProductDetail;

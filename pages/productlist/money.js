import React from 'react'
import styles from '../../styles/money.module.css'
const Money = () => {

  const data=[
    {
      heading:"Get there faster with 1% higher returns",
  describe:"Whoever you are and wherever you want to reach in life, zero-commission Direct Mutual funds on ET Money help you get there faster with upto 1% more returns every year.",
  image:"https://img.freepik.com/free-photo/two-young-beautiful-smiling-blond-hipster-girls-trendy-summer-jeans-skirts-clothes_158538-1232.jpg"
},
{
  heading:"Simplified data for amplified returns",
  describe:"You win at investing when you make sense of complex data. ET Money presents you all the useful data in the most simplified manner that helps you separate the investing signals from the noise.",
  image:"https://img.freepik.com/free-photo/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-near-blue-wall-sunglasses-positive-models-going-crazy_158538-7654.jpg"

},
{
  heading:"Bring advantage of your personality to investing",
  describe:"Success in your story happens when you know what you are doing and why. Bring an edge to your investing by taking decisions that match with your investor personality.",
  image:"https://img.freepik.com/free-photo/two-young-beautiful-smiling-blond-hipster-girls-trendy-summer-colorful-clothes_158538-1256.jpg"

},
{
  heading:"Risk Tolerance and Diversification",
  describe:"Assess your risk tolerance before making investment decisions. Diversifying your investment portfolio is crucial. Spread your investments across different asset classes (stocks, bonds, real estate, etc.) and industries to reduce the impact of poor performance in any single investment."
,image:"https://img.freepik.com/free-photo/two-young-beautiful-blond-smiling-hipster-women-trendy-summer-clothes-sexy-carefree-women-posing-near-blue-wall-sunglasses-positive-models-going-crazy-hugging_158538-7643.jpg"
}
  ]
  return (
    <div className={styles.money_main_section}>
      <div className={styles.money_sub_section}>
      <div className={styles.money_first}>
      <div className={styles.money_first_left}>
     </div>
      <div className={styles.money_first_right}>
  <h1>
    Invest in the freedom to choose
  </h1>
  <p>
  Wealth is not just about money. Its about what all you can do with it. It is having your own story of progress. And living it every single day. So go ahead, imagine a future you want to shape.
  </p>
  <h1>And make it happen.</h1>
  <button>Get Started on App</button>
</div>
      </div>
      <div className={styles.money_second}>
      <h1>
        Live Your choices
      </h1>
      <p>
      When you are free to choose, the possibilities are endless. Maybe you want to create the next big startup, or take YouTube by storm, take your mom on a world tour, or write a bestseller. Whatever you want from life, go for it.
      </p>
      </div>
      <div className={styles.money_third}>
        {
          data.map((items,index)=>{
            return (
              <>
              <div className={styles.third_card}>
              <div key={index} className={styles.third_header}>
               <h1>{items.heading}</h1>
               <p>{items.describe}</p>
              </div>
              <img src={items.image}/>
              </div>
              </>
            )
          })
        }
      
     
      </div>
      <div className={styles.money_fourth}>
      
      <h1>We are loved by people from all parts of India
      </h1>
    
      </div>
      </div>
    </div>
  )
}

export default Money
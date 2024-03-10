import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/game.module.css';

const Games = ({ gameData }) => {
  const gamesPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gameData.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(gameData.length / gamesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const visiblePages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1);

  return (
    <>
      <h1 className={styles.head}>Free Online Crosswords & Games | Spicy Hunter Blog</h1>
      <label className={styles.searchBar}>
        <input type="text" placeholder="search games" />
       
      </label>

      <div className={styles.game_list}>
        {currentGames.map((gameItem) => (
          <div key={gameItem.id} className={styles.game_main_section}>
            <div className={styles.game_card}>
              <img className={styles.game_thumbnail} src={gameItem.thumbnail} alt={gameItem.title} />
              <div className={styles.game_details}>
                <h2>{gameItem.title}</h2>
                <p>{gameItem.short_description}</p>
                <p><strong>Genre:</strong> {gameItem.genre}</p>
              <p><strong>Publisher:</strong> {gameItem.publisher}</p>
                 <p><strong>Release Date:</strong> {gameItem.release_date}</p>
                <a className={styles.play_now_link} href={gameItem.game_url} target="_blank" rel="noopener noreferrer">Play Now</a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
 
      <div className={styles.pagination} >
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={pageNumber === currentPage ? styles.active : ''}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className={styles.gamer_section}>
  <h1>Free Games Online on <span style={{color:"ActiveBorder"}}>Spicy Blog Hunter</span></h1>
  <p>Spicy Blog Hunter has a huge collection of free games. Totally new ones are added every day, and there’s over 10,000 free online games for you to play. At GamesGames, you can try out everything from kids games to massive multiplayer online games that will challenge even the best of players.</p>
  <p>There’s puzzle and action games for gamers both brave and bold along with cooking games for gourmets. Fashionistas will love our collection of dress-up and design games, and families will enjoy our bubble shooter games, Kogama games, and Bejeweled games. If you love a challenge, you can exercise your noggin with tricky puzzle games or board games like Mahjong. Fans of card games will love our huge selection of them that features popular titles like Solitaire.</p>
  <p>If you’re looking to improve your rhythm skills, there’s lots of music games you can play like Piano Tiles. Our 2 player games are also fantastic if you’d like to challenge a friend in a basketball game or an awesome fighting game. You can play games in any of our gaming categories, which include: multiplayer games, io games, motorcycle games, math games, and so much more!</p>
  <p>Since we’ve got one of the world’s largest collections of free games online, you’ll always find the best ones to play alone or with your friends and family at GamesGames. So whenever you want to dive into some online games, just go to www.gamesgames.com!</p>
  </div>
      <div className={styles.image_section}>
     <h1>Join the fun as you race through a thrilling maze, collecting Pac-Dots, fruits and power-ups to earn as many points as possible.</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const apiEndpoint = 'https://www.freetogame.com/api/games';
  const response = await fetch(apiEndpoint);
  const gameData = await response.json();

  return {
    props: {
      gameData,
    },
  };
};

export default Games;

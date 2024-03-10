import React, { useState } from "react";
import styles from '../../styles/tracksPage.module.css';
const AmiiboCard = ({ amiibo }) => {
  const {
    amiiboSeries,
    character,
    gameSeries,
    image,
    name,
    type,
  } = amiibo;

  return (
    <div className={styles.amiibo_card} >
     
      <div className={styles.amiibo_cards_element}>
     
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Amiibo Series: {amiiboSeries}</p>
      <p>Character: {character}</p>
      <p>Game Series: {gameSeries}</p>
      <p>Type: {type}</p>
      </div>
    </div>
  );
};

const AmiiboCardList = ({ amiibos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const amiibosPerPage = 3;

  const indexOfLastAmiibo = currentPage * amiibosPerPage;
  const indexOfFirstAmiibo = indexOfLastAmiibo - amiibosPerPage;
  const currentAmiibos = amiibos.slice(indexOfFirstAmiibo, indexOfLastAmiibo);

  const totalPages = Math.ceil(amiibos.length / amiibosPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="amiibo-card-list">
        {currentAmiibos.map((amiibo, index) => (
          <AmiiboCard key={index} amiibo={amiibo} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const amiibos = [
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Metal Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09d00301",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00301-02bb0e02.png",
    name: "Metal Mario - Tennis",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02bb0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Others",
    character: "Mario Cereal",
    gameSeries: "Kellogs",
    head: "37400001",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_37400001-03741402.png",
    name: "Super Mario Cereal",
    release: {
      au: null,
      eu: null,
      jp: null,
      na: "2017-12-11",
    },
    tail: "03741402",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Baby Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09cc0101",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0101-02a50e02.png",
    name: "Baby Mario - Soccer",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02a50e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Metal Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09d00101",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00101-02b90e02.png",
    name: "Metal Mario - Soccer",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02b90e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09c00101",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00101-02690e02.png",
    name: "Mario - Soccer",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02690e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Mario Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
    name: "Mario",
    release: {
      au: "2015-03-21",
      eu: "2015-03-20",
      jp: "2015-03-12",
      na: "2015-03-20",
    },
    tail: "00340102",
    type: "Figure",
  },
  {
    amiiboSeries: "8-bit Mario",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02390602.png",
    name: "8-Bit Mario Modern Color",
    release: {
      au: "2015-10-24",
      eu: "2015-10-23",
      jp: "2015-09-10",
      na: "2015-09-11",
    },
    tail: "02390602",
    type: "Figure",
  },
  {
    amiiboSeries: "Super Smash Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000100",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000100-00190002.png",
    name: "Dr. Mario",
    release: {
      au: "2015-07-23",
      eu: "2015-07-17",
      jp: "2015-07-17",
      na: "2015-09-11",
    },
    tail: "00190002",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Baby Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09cc0501",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0501-02a90e02.png",
    name: "Baby Mario - Horse Racing",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02a90e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Mario Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000300",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
    name: "Mario - Cat",
    release: {
      au: "2021-02-12",
      eu: "2021-02-12",
      jp: "2021-02-12",
      na: "2021-02-12",
    },
    tail: "03a60102",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Baby Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09cc0401",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0401-02a80e02.png",
    name: "Baby Mario - Golf",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02a80e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Mario Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-03710102.png",
    name: "Mario - Wedding",
    release: {
      au: "2017-10-27",
      eu: "2017-10-27",
      jp: "2017-10-27",
      na: "2017-10-27",
    },
    tail: "03710102",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Metal Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09d00401",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00401-02bc0e02.png",
    name: "Metal Mario - Golf",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02bc0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Smash Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
    name: "Mario",
    release: {
      au: "2014-11-29",
      eu: "2014-11-28",
      jp: "2014-12-06",
      na: "2014-11-21",
    },
    tail: "00000002",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09c00301",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00301-026b0e02.png",
    name: "Mario - Tennis",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "026b0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Baby Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09cc0301",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0301-02a70e02.png",
    name: "Baby Mario - Tennis",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02a70e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Mario Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png",
    name: "Mario - Gold Edition",
    release: {
      au: "2015-06-25",
      eu: null,
      jp: "2015-12-17",
      na: "2015-03-20",
    },
    tail: "003c0102",
    type: "Figure",
  },
  {
    amiiboSeries: "Super Nintendo World",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000003",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000003-039bff02.png",
    name: "Mario - Power Up Band",
    release: {
      au: null,
      eu: null,
      jp: "2021-02-04",
      na: null,
    },
    tail: "039bff02",
    type: "Band",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Metal Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09d00501",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00501-02bd0e02.png",
    name: "Metal Mario - Horse Racing",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02bd0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Baby Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09cc0201",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0201-02a60e02.png",
    name: "Baby Mario - Baseball",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02a60e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09c00401",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00401-026c0e02.png",
    name: "Mario - Golf",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "026c0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Super Mario Bros.",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003d0102.png",
    name: "Mario - Silver Edition",
    release: {
      au: "2015-05-30",
      eu: null,
      jp: null,
      na: "2015-05-29",
    },
    tail: "003d0102",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09c00501",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00501-026d0e02.png",
    name: "Mario - Horse Racing",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "026d0e02",
    type: "Card",
  },
  {
    amiiboSeries: "8-bit Mario",
    character: "Mario",
    gameSeries: "Super Mario",
    head: "00000000",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png",
    name: "8-Bit Mario Classic Color",
    release: {
      au: "2015-09-12",
      eu: "2015-11-09",
      jp: "2015-09-10",
      na: "2015-09-11",
    },
    tail: "02380602",
    type: "Figure",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Metal Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09d00201",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00201-02ba0e02.png",
    name: "Metal Mario - Baseball",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "02ba0e02",
    type: "Card",
  },
  {
    amiiboSeries: "Mario Sports Superstars",
    character: "Mario",
    gameSeries: "Mario Sports Superstars",
    head: "09c00201",
    image:
      "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00201-026a0e02.png",
    name: "Mario - Baseball",
    release: {
      au: "2017-03-11",
      eu: "2017-03-10",
      jp: "2017-03-30",
      na: "2017-03-24",
    },
    tail: "026a0e02",
    type: "Card",
  },
];

function TracksPage() {
  return (
    <div className={styles.card_games_list}>
      <AmiiboCardList amiibos={amiibos} />
    </div>
  );
}

export default TracksPage;

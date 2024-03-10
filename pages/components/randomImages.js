import React, { useEffect, useState } from 'react';

const DogImage = () => {
  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    // Fetch the random dog image URL from the API
    fetch('https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then((data) => {
        // Set the image URL in the state
        setDogImageUrl(data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>Random Dog Image</h2>
      {dogImageUrl && <img src={dogImageUrl} alt="Random Dog" />}
    </div>
  );
};

export default DogImage;

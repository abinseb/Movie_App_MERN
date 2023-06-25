import { Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div>
      <Typography variant='h2' style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant='body1' style={{ marginBottom: '40px', fontSize: '18px', lineHeight: '1.5', textAlign: 'center' }}>
        Welcome to CineMax, your ultimate destination for managing and organizing your movie collection. Our Movie Management Application is designed to provide movie enthusiasts with a seamless and immersive experience, allowing you to effortlessly keep track of your favorite films, discover new releases, and connect with fellow movie lovers.
        At CineMax, we understand the passion and excitement that movies can bring into our lives. Whether you're an avid collector, a casual viewer, or a dedicated cinephile, our application caters to all levels of movie enthusiasts. We aim to revolutionize the way you engage with movies, making it easier than ever to explore, curate, and enjoy your cinematic journey.
      </Typography>

      <Typography variant='h4' style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>
        Our Vision
      </Typography>
      <ol style={{ marginBottom: '40px', fontSize: '18px', lineHeight: '1.5', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
        <li>
          <Typography variant='body1' component='p' style={{ marginBottom: '10px' }}>
            Personalized Movie Library: Our application enables you to create a customized movie library tailored to your preferences. Easily add movies to your collection, categorize them by genre, director, or actor, and organize them in a way that suits your unique taste.
          </Typography>
        </li>
        <li>
          <Typography variant='body1' component='p' style={{ marginBottom: '10px' }}>
            Advanced Search and Recommendations: Discovering new movies has never been simpler. Utilize our powerful search feature to find films based on title, genre, or keywords. Additionally, our intelligent recommendation system suggests movies based on your viewing history, ensuring you never miss out on hidden gems.
          </Typography>
        </li>
        <li>
          <Typography variant='body1' component='p' style={{ marginBottom: '10px' }}>
            Watchlist and Favorites: Keep track of movies you want to watch or movies that have become your all-time favorites. Easily add them to your watchlist or mark them as favorites to create a personalized movie queue for future viewing.
          </Typography>
        </li>
      </ol>
    </div>
  );
};

export default About;

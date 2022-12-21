import React from 'react';
import '../App';
import { Link } from 'react-router-dom';


const navbar = () => {
  return (
    <div className='navbar'>
        <div>
          <h1>React Books App</h1>
        </div>
      <div>
        <Link to="/favourites">
          <h3>Your Favourites</h3>
        </Link>
      </div>
    </div>
  );
};

export default navbar
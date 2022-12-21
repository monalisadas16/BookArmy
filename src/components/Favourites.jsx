import React,{useState} from 'react';
import { useAppContext } from '../context/appContext';

const Favourites = () => {

  const  [books, setBooks] = useState([]);

    const { favourites, addToFavourites, removeFromFavourites } = useAppContext();

    console.log("favourites are ", favourites);

    const favouritesChecker = (id) => {
      const boolean = favourites.some((book) => book.id === id);
      return boolean;
    }

  return (
    <div className='favourites'>
      {favourites.length > 0 ? (
        favourites.map((book)=> (
        <div key={book.id} className='book'>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="Nil"/>
          </div>
          <div>
            {favouritesChecker(book.id) ? (
            <button onClick={()=>removeFromFavourites(book)}>
               Remove From Favourites
            </button>
            ) : (
            <button onClick={()=>addToFavourites(book)}>
              Add To Favourites
            </button>
            )
          }
          </div>
        </div>
      ))
      ) : (
        <h1>You don't have any favourite books yet!</h1>
      )
    }
    </div>
  )
}

export default Favourites
import React from "react";
import {useState,useEffect,createContext} from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IsEmpty} from 'react-lodash'
import MovieItemList from "../components/movies/MovieItemList";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Card from "../components/ui/Card";
import GetImage from "../components/layout/Image";
import classes from './AllMovies.module.css';
import {} from '../components/layout/Image'

export default function AllMoviesPage(props)
{
  const [cookies, setCookie] = useCookies(['myFavorites']);
  const [isLoading,setIsLoading]=useState(true);
  const [loadingMovies,setLoadingMovies]=useState([]);
  const [allMovies,setAllMovies] = useState([]);
  const[selectedMovie,setSelectedMovie] = useState(null);
  const movies=[];

  useEffect(() => {  // Here we will check if this is the users first time and if so will create a cookie for him to save his favorite movies
    !cookies?.myFavorites && setCookie('myFavorites',[],{ path: '/' });
    setIsLoading(true);
    axios.get('https://swapi.dev/api/films/') // geting the movies from the api
    .then(response => {
        setAllMovies(response.data.results);
        setIsLoading(false); // we got the movies no need for loading
    });
  },[]);
   // in this function we will handle the button of moving a movie to favorite and removing it
  const toggleFavoriteStatusHandler = (movieID) => {
    if(!cookies.myFavorites.includes(movieID)){
        setCookie('myFavorites',cookies.myFavorites.concat(movieID),{ path: '/' });
    }
    else
    setCookie('myFavorites',cookies.myFavorites.filter(movie => movie !== movieID),{ path: '/' });
  };

  const removeFavorites = (movieID) => {
        setCookie('myFavorites',cookies.myFavorites.filter(movie => movie !== movieID),{ path: '/' });
    };
  
  const isFavorite = (movieID) => { //check if the given movie is a favorite
    return (cookies.myFavorites.includes(movieID));
  };

 
    return (
      <div className={classes.splitScreen}>
        <div className={classes.topPane}>
         <h2>All Movies</h2>
          <div>
          {allMovies.length ?
          <ul> {allMovies.map((movie, index)=> (
               <li key={movie.episode_id}>
                      <div>
                         <a onClick={() => setSelectedMovie(movie)}><FontAwesomeIcon color={cookies?.myFavorites.includes(movie.episode_id) ? '#77002e' : 'grey'} icon={faStar} />
                          <Card ><h3>{movie.title}</h3>
                          <div className={classes.image}>
                            <img src ={GetImage(movie.episode_id)} alt ={movie.title}/>
                          </div>
                          </Card ></a>
                     </div>
              </li>))}
          </ul> : <p> {isLoading ? 'Loading...' : 'No movies found'}</p>}
          </div>

        </div>
        
        <div className={classes.bottomPane}>
            {selectedMovie && 
            <Card className={Card.Card}>
                <h2> Movie details</h2>
                <h3>Title: {selectedMovie.title} </h3>
                <div className={classes.image}>
                <img src ={GetImage(selectedMovie.episode_id)} alt ={selectedMovie.title}/>
                </div>
                <h4>Director: {selectedMovie.director} </h4>
                <h4>Producor: {selectedMovie.producer}</h4>
                <h4>Release Date of the movie {selectedMovie.release_date}</h4>
                <button className={classes.action} onClick={() => toggleFavoriteStatusHandler(selectedMovie.episode_id)}>{isFavorite(selectedMovie.episode_id)? 'Remove from favorites': 'Add to favorites'}</button>
            </Card>}
        </div>
        </div>
      );
    
}

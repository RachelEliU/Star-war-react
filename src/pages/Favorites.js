import React from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import GetImage from "../components/layout/Image";
import Card from "../components/ui/Card";
import classes from './AllMovies.module.css';

function FavoritesPage(){     
   const [cookies, setCookie] = useCookies(['myFavorites']);
   const [isLoading,setIsLoading]=useState(true);
   const [loadingMovies,setLoadingMovies]=useState([]);
   const [allMovies,setAllMovies] = useState([]);
   const[selectedMovie,setSelectedMovie] = useState(null);
   const movies=[];
 
   useEffect(() => {
     !cookies?.myFavorites && setCookie('myFavorites',[],{ path: '/' });
     setIsLoading(true);
     axios.get('https://swapi.dev/api/films/')
     .then(response => {
         setAllMovies(response.data.results);
         setIsLoading(false);
     });
 
   },[]);
 
   const toggleFavoriteStatusHandler = (movieID) => {
     if(!cookies.myFavorites.includes(movieID)){
         setCookie('myFavorites',cookies.myFavorites.concat(movieID),{ path: '/' });
     }
     else
     setCookie('myFavorites',cookies.myFavorites.filter(movie => movie !== movieID),{ path: '/' });
   };
 
   
   const isFavorite = (movieID) => {
     return (cookies.myFavorites.includes(movieID));
   };
 
  
     return (
        <div >
         
         <h1>All Movies</h1>
           <div>
           {allMovies.length ?
           <ul> {allMovies.map((movie, index)=> (
                <li key={movie.episode_id}>
                    <div>
                           <h3>{movie.title}</h3>
                           <div className={classes.image}>
                           <img src ={GetImage(movie.episode_id).image} alt ={movie.title}/>
                           </div>   
                      </div>
               </li>))}
           </ul> : <p> {isLoading ? 'Loading...' : 'No movies found'}</p>}
           </div>
 
         
         
         </div>
       );
}

export default FavoritesPage;
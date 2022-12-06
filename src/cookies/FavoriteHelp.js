import React from "react";

 const toggleFavoriteStatusHandler = (movieID) => {
    if(!cookies.myFavorites.includes(movieID)){
        setCookie('myFavorites',cookies.myFavorites.concat(movieID),{ path: '/' });
    }
    else
    setCookie('myFavorites',cookies.myFavorites.filter(movie => movie !== movieID),{ path: '/' });

  };

 export const removeFavorites = (movieID) => {
        setCookie('myFavorites',cookies.myFavorites.filter(movie => movie !== movieID),{ path: '/' });
    };
  
 export const isFavorite = (movieID) => {
    return (cookies.myFavorites.includes(movieID));
  };
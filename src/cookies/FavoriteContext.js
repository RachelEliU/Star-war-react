import React from "react";
import {createContext,useState} from 'react';
import {useCookies} from 'react-cookie'
import CookiesStorege from "./Cookies";
const FavoritesContext= createContext(
    {
        favorites: cookies,
        totalFavorites:0,
        addFavorite: (favoriteMovie)=>{},
        removeFavorite:(movieId)=> {} ,
        itemIsFavorite:(movieId) => {} 
    }
);
export function FavoritesContextProvider(props)
{
    const [useFavorites,setUserFavorites]= useState([]);
    function addFavoriteHandler(favoriteMovie){
        setUserFavorites((prevUserFavorite)=>{
            return prevUserFavorite.concat(favoriteMovie);
        });

    }
    function removeFavoriteHandler(movieId)
    {
        setUserFavorites(prevUserFavorite=>{
            return prevUserFavorite.filter(movie => movie.id !==movieId);
        });

    }
    function itemIsFavoriteHandler(movieId){
        return useFavorites.some(movie => movie.id=== movieId);

    }
    const context={
        favorites: useFavorites,
        totalFavorites:useFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;
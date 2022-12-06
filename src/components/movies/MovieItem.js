import React from "react";
import classes from './MovieItem.module.css';
function MovieItem(props)
{
   /* function toggleFavoriteStatusHandler()// added and un added this movie to favorites
    {
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id);
        }
        else{
           favoriteCtx.addFavorite(
            {
                id: props.id,
                title: props.title,
                address: props.address,
                image: props.image,
                description: props.description
            }
           ); 
        }
    }*/
    return(
        <li className={classes.item}>
            <div className={classes.image}>
                <img src ={props.image} alt ={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button> To Favorite</button>
            </div>
     </li>
     );
}
export default MovieItem;
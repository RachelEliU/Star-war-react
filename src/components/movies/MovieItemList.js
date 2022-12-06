import React from 'react';
import MovieItem from './MovieItem';
import classes from './MovieItemList.module.css';
function MovieItemList(props)
{
  return (
  <ul className={classes.list}>
    {props.movieItem.map((movieItem)=>(
    <MovieItem 
    key={movieItem.id}
    id={movieItem.id}
    image={movieItem.image}
    title={movieItem.title}
    address={movieItem.address}
    description={movieItem.description} />))}
 </ul>
  );
}
export default MovieItemList;
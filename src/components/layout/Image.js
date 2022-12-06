import React from "react";


const image=[
    'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Star_Wars_%281997_re-release_poster%29.jpg/81px-Star_Wars_%281997_re-release_poster%29.jpg?20140520112202',
    'https://en.wikipedia.org/wiki/File:The_Empire_Strikes_Back_(1980_film).jpg',
    'https://en.wikipedia.org/wiki/File:ReturnOfTheJediPoster1983.jpg',
    'https://en.wikipedia.org/wiki/File:Star_Wars_Phantom_Menace_poster.jpg',
    'https://en.wikipedia.org/wiki/File:Star_Wars_-_Episode_II_Attack_of_the_Clones_(movie_poster).jpg',
    'https://en.wikipedia.org/wiki/File:Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
    
];
const images=[
    "../components/layout/images/image0.jpg",
    "../components/layout/images/image1.jpg",
    "../components/layout/images/image2.jpg",
    "../components/layout/images/image3.jpg",
    "../components/layout/images/image4.jpg",
    "../components/layout/images/image5.jpg"
];
export default function GetImage(props)
{
   return images[props%6] ;//return a picture in the right place 
}

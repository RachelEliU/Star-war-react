import React from "react";
import{ useCookies} from 'react-cookie';
import FavoritesContext from "./FavoriteContext";
function CookiesStorege(){
    const [cookies,setCookies]=useCookies(["user"]);
    const favoriteCtx=useContext(FavoritesContext)
    function AddhandelCookies (props){
        setCookies("userFavoites",favoriteCtx.favorites,{path: "/"});// when a movie is been saved we will save it on the cookies
    }
    return (
        <div>
            <h1>React Cookies</h1>
            <button onClick={AddhandelCookies}>set cookies</button>
        </div>
    );
}
export default CookiesStorege;
import React from "react";
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation()
{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Star war Movies <div/>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'> All Movies</Link>
                        </li>
                        <li>
                            <Link to='/favorites'> Favorites</Link>
                        </li>
                        <li>
                            <Link to='/new-movies'> New Movies</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default MainNavigation;
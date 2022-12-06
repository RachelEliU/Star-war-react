import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import AllMoviesPage from './pages/AllMovies';
import FavoritesPage from './pages/Favorites';
import NewMoviesPage from './pages/NewMovies';
import Layout from './components/layout/Layout';

function App() {
  return (
    
     <Layout>
      <Switch>
     <Route path='/' exact>
        <AllMoviesPage/>
      </Route>
      {/* <Route path='/favorites' exact>
        <FavoritesPage/>
      </Route> */}
      <Route path='/new-movies' exact>
        <NewMoviesPage/>
      </Route>
     </Switch>
     </Layout>
    
  );
}

export default App;

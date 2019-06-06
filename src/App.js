import React, { createContext, useState, useEffect  } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import M from '../node_modules/materialize-css/dist/js/materialize.js';

import MovieRandom from './components/full_front/MovieRandom';
// import MovieSelect from './components/full_front/MovieSelect';
import Error from './components/front/Error';
import Movies from './components/front/Movies';
import Admins from './components/back/Admins';
import FullFront from './components/full_front/FullFront';
import Navigation from './components/Navigation';
// import { ContextB } from './components/full_front/FullFront';
import { MovieData } from './components/data/MovieData';
import './App.css';

export const Context = createContext();

const App = () => {

  const [movies, setMovies] = useState([]);
  const [waiting, setWaiting] = useState(true);
  // const {data}= useContext(ContextB);

  useEffect(() => {
    MovieData((result) => {
      setMovies(result);
      setWaiting(false);
    })
  }, []);

  return (
    waiting ?

      <div>
        Waiting for data
      </div>

      :

      <div>
        <Context.Provider value={[movies, setMovies]}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route path="/random"> <MovieRandom /> </Route>
              <Route path='/selected'>
                {/* <ContextB.Consumer>
              {
                data ?
                console.log(data)
                :
                console.log('null')
              // <MovieSelect movies={data}/> 
              }
            
            </ContextB.Consumer> */}
              </Route>
              <Route path="/" component={FullFront} exact />
              <Route path="/user/favorites" component={Error} />
              <Route path="/user/paneau_control" component={Error} />
              <Route path="/admin/movie_list" component={Movies} />
              <Route path="/admin/paneau_control" component={Admins} />
            </Switch>
          </BrowserRouter>
        </Context.Provider>
      </div>

  );
}

export default App;
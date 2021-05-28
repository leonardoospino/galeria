import React from 'react'

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import { GaleriaPeliculas } from '../components/galeria/GaleriaPeliculas';
import { GaleriaSeries } from '../components/galeria/GaleriaSeries';
import { GaleriaTodas } from '../components/galeria/GaleriaTodas';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route
            exact
            path="/"
            component={ GaleriaTodas }
          />

          <Route
            exact
            path="/peliculas"
            component={ GaleriaPeliculas }
          />

          <Route
            exact
            path="/series"
            component={ GaleriaSeries }
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
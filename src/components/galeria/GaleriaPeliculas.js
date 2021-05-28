import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { galeriaPeliculasStartLoading } from '../../actions/galeria';
import { GaleriaListado } from './GaleriaListado';

export const GaleriaPeliculas = () => {

  const dispatch = useDispatch();
  const { peliculas: galerias } = useSelector(state => state.galeria);

  useEffect(() => {
    dispatch(galeriaPeliculasStartLoading());
  }, [dispatch]);

  return (
    <GaleriaListado galerias={ galerias } />
  )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { galeriaStartLoading } from '../../actions/galeria';
import { GaleriaListado } from './GaleriaListado';

export const GaleriaTodas = () => {

  const dispatch = useDispatch();
  const { galerias } = useSelector(state => state.galeria);


  useEffect(() => {
    dispatch(galeriaStartLoading());
  }, [dispatch]);

  return (
    <GaleriaListado galerias={ galerias } />
  )
}

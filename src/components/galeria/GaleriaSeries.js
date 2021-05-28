import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { galeriaSeriesStartLoading } from '../../actions/galeria';
import { GaleriaListado } from './GaleriaListado';

export const GaleriaSeries = () => {

  const dispatch = useDispatch();
  const { series: galerias } = useSelector(state => state.galeria);

  useEffect(() => {
    dispatch(galeriaSeriesStartLoading());
  }, [dispatch]);

  return (
    <GaleriaListado galerias={ galerias } />
  )
}

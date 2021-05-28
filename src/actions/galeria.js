import { types } from '../types/types'
import { peticion } from '../helpers/peticion';
import Swal from 'sweetalert2';
export const galeriaStartAddNew = (galeria) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await peticion('galerias', galeria, 'POST');
      const body = await resp.json();

      if (body.ok) {
        galeria.id = body.galeria.id;
        dispatch(galeriaAddNew(galeria));
      }

    } catch (error) {
      console.log(error);
    }

  }
}

const galeriaAddNew = (galeria) => ({
  type: types.galeriaAddNew,
  payload: galeria
})

export const galeriaSetActive = (galeria) => ({
  type: types.galeriaSetActive,
  payload: galeria
})

export const galeriaClearActiveEvent = () => ({
  type: types.galeriaClearActiveEvent
})


export const galeriaStartUpdate = (galeria) => {
  return async (dispatch) => {
    try {
      const resp = await peticion(`galerias/${ galeria.id }`, galeria, 'PUT');
      const body = await resp.json();

      if (body.ok) {
        dispatch(galeriaUpdated(galeria));
        Swal.fire(
          'Exito!',
          'Evento actualizado correctamente!',
          'success'
        );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const galeriaUpdated = (galeria) => ({
  type: types.galeriaUpdated,
  payload: galeria
});

export const galeriaStartDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent;

    try {
      const resp = await peticion(`galerias/${ id }`, {}, 'DELETE');
      const body = await resp.json();

      if (body.ok) {
        dispatch(galeriaDeleted());
        Swal.fire(
          'Exito!',
          'Evento eliminado correctamente!',
          'success'
        );
      } else {
        Swal.fire('Error', body.msg, 'error');
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const galeriaDeleted = () => ({
  type: types.galeriaDeleted
});


export const galeriaStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await peticion('galeria');
      const body = await resp.json();

      if (body.ok) {
        const galerias = body.galerias;
        dispatch(galeriaLoaded(galerias));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const galeriaLoaded = (galerias) => ({
  type: types.galeriaLoaded,
  payload: galerias
})

export const galeriaPeliculasStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await peticion('galeria/Película');
      const body = await resp.json();

      if (body.ok) {
        const peliculas = body.galerias;
        dispatch(galeriaPeliculasLoaded(peliculas));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const galeriaPeliculasLoaded = (peliculas) => ({
  type: types.galeriaPeliculasLoaded,
  payload: peliculas
})

export const galeriaSeriesStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await peticion('galeria/Serie');
      const body = await resp.json();

      if (body.ok) {
        const series = body.galerias;
        dispatch(galeriaSeriesLoaded(series));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const galeriaSeriesLoaded = (series) => ({
  type: types.galeriaSeriesLoaded,
  payload: series
})
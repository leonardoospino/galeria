import { types } from '../types/types';

// {
//   id: new Date().getTime(),
//   title: 'Cumple Adri',
//   start: moment().add(16, 'hours').toDate(),
//   end: moment().add(18, 'hours').toDate(),
//   notes: 'Comprar el pastel',
//   user: {
//     _id: '123',
//     name: 'Adriana'
//   }
// }

const initialState = {
  galerias: [],
  series: [],
  peliculas: [],
  activeGaleria: null
};


export const galeriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.galeriaSetActive:
      return {
        ...state,
        activeGaleria: action.payload
      }

    case types.galeriaClearActiveGaleria:
      return {
        ...state,
        activeGaleria: null
      }

    case types.galeriaAddNew:
      return {
        ...state,
        galerias: [
          ...state.galerias,
          {...action.payload}
        ]
      }

    case types.galeriaUpdated:
      return {
        ...state,
        galerias: state.galerias.map(
          galeria => (
            galeria.id === action.payload.id ?
            action.payload :
            galeria
          )
        )
      }

    case types.galeriaDeleted:
      return {
        ...state,
        galerias: state.galerias.filter(
          galeria => (galeria.id !== state.activeGaleria.id)
        ),
        activeGaleria: null
      }

    case types.galeriaLoaded:
      return {
        ...state,
        galerias: [...action.payload]
      }

    case types.galeriaPeliculasLoaded:
      return {
        ...state,
        peliculas: [...action.payload]
      }

    case types.galeriaSeriesLoaded:
      return {
        ...state,
        series: [...action.payload]
      }

    default:
      return state;
  }
}
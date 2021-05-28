import React from 'react'
import { GaleriaItem } from './GaleriaItem';

export const GaleriaListado = ({ galerias }) => {
  return (
    <table
      className="table table-striped table-bordered table-hover"
    >
      <thead className="thead-dark">
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Año</th>
          <th scope="col">Tipo</th>
          <th scope="col">Likes</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          galerias.map(galeria => (
            <GaleriaItem
              key={ galeria.id }
              { ...galeria }
            />
          ))
        }
      </tbody>
    </table>
  )
}

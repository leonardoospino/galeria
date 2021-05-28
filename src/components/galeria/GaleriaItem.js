import React, { useState } from 'react'

export const GaleriaItem = ({ id, title, year, type }) => {
  const [likes, setLikes] = useState(
    parseInt(localStorage.getItem(id)) || 0
  );

  const handleLike = () => {
    localStorage.setItem(id, likes + 1);
    setLikes(l => l + 1);
  }

  return (
    <tr>
      <td>{ title }</td>
      <td>{ year }</td>
      <td>{ type }</td>
      <td>{ likes }</td>
      <td className="text-center">
        <a
          className="btn btn-outline-primary btn-sm"
          onClick={ handleLike }
        >
          <i className="fa fa-thumbs-up"></i>
        </a>
      </td>
    </tr>
  )
}

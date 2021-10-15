import React from 'react'
import { Link } from 'react-router-dom'

import DetallePelicula from './DetallePelicula'

class Home extends React.Component
{
  render()
  {
    const usuario = { nombre: 'Santiago', email: 'santiago@mail.com', edad: 20 }
    const peliculas =
    [
      { nombre: 'Viernes 13', genero: 'Terror'  , clasificacion: 'C' },
      { nombre: 'Bambi'     , genero: 'Infantil', clasificacion: 'A' },
      { nombre: 'XXX'       , genero: 'Accion'  , clasificacion: 'B' },
    ]
    const peliculasAdolescentesYAdultos =
      peliculas.filter( pelicula => pelicula.clasificacion != 'A' )

    return (
      <div>
	<h1>Pagina HOME</h1>
	<br/>
        <Link to="/peliculas">Peliculas</Link>
	<br/>
	<div>
	  Nombre: { usuario.nombre }
	</div>
	<div>
	  <h3>Titulos</h3>
	  <ul>
	  { peliculasAdolescentesYAdultos.map(pelicula => (
            <DetallePelicula datos={ pelicula }/>
	  ))}
	  </ul>
	</div>
      </div>
    )
  }
}

export default Home

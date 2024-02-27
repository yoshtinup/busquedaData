import React, {useState, useEffect} from 'react'
import "../bootstrap.min.css"
const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3002/api/v1/products'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
  
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.correo.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className=' table table-dark table-striped table-hover mt-5 '>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>CODIGO</th>
                    <th>NOMBRE</th>
                    <th>CORREO</th>
                    <th>TELEFONO</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.codigo}</td>
                        <td>{user.nombre}</td>
                        <td>{user.correo}</td>
                        <td>{user.telefono}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent
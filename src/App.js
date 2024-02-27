import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Busqueda from './components/Busqueda';
import LoginUsario from './components/LoginUsuario';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginUsario/>}/> 
          <Route path='/busqueda' element={< Busqueda/>}/>        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/*
import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="container-fluid">
     <h2 className='text-center'>BUSQUEDA POR CORREO</h2>
      <SearchComponent />     
    </div>
  );
}

export default App; */

import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mostrar, setMostrar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrar(nombre);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          placeholder="Ingrese su nombre"
        />
        <button type="submit">Enviar</button>
      </form>
      {mostrar == "" ? null: <h2>Nombre ingresado: {nombre}</h2>}
      
    </div>
  );
}

export default Formulario;

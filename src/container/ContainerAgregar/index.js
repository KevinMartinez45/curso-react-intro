import React from 'react'
import './Container-Agregar.css'

function ContainerAgregar({children}) {
  return (
    <div className='ContainerAgregar'>
        {children}
    </div>
  );
}

export { ContainerAgregar }
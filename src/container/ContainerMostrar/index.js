import React from 'react'
import './Container-Mostrar.css'


function ContainerMostrar({children}) {
  return (
    <div className='ContainerMostrar'>
        {children}
    </div>
  )
}

export {ContainerMostrar}
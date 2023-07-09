import React from 'react'
import './index.css'

function ContainerPadre({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export { ContainerPadre}
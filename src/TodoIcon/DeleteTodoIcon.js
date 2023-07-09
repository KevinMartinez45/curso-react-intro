import React from 'react'
import {VscClose} from 'react-icons/vsc'

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <VscClose
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}
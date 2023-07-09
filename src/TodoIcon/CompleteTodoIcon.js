import React from 'react'
import {GoCheckCircle} from 'react-icons/go'


const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <GoCheckCircle
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}
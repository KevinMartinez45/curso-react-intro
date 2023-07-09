import React from 'react'
import {FaRegEyeSlash} from 'react-icons/fa'
import './TodosIcon.css'

function NotFoundIcon() {
  return (
    <div className = 'Icon-loading'> 
    <FaRegEyeSlash ></FaRegEyeSlash>
    </div>
  )
}

export {NotFoundIcon}
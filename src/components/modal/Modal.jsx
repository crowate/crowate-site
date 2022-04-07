import React, { useEffect } from 'react'
import './Modal.css'

const Modal = ({ children, toggle }) => {
  useEffect(() => {
    console.log("Render")
  }, [])

  return (
      <>
        <div className='modal__container'>
          <div className='modal__guts'>
            <button onClick={toggle}> X </button>
            {children}
          </div>
        </div>
      </>
  )
}

export default Modal
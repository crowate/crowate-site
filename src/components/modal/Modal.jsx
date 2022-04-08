import React, { useEffect } from 'react'
import './Modal.css'

const Modal = ({ children, toggle }) => {
  useEffect(() => {
    console.log("Render")
  }, [])

  return (
      <>
        <div className='modal__container .scale-in-center'>
          <div className='modal__guts'>
            <button className="modal__close" onClick={toggle}>x</button>
            {children}
          </div>
        </div>
      </>
  )
}

export default Modal
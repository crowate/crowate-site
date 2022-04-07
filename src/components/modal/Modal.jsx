import React from 'react'
import './Modal.css'

const Modal = (props) => {
  if (!props.open) return null

  return (
      <>
        <div className='modal-overlay'></div>
        <div className='modal'>
            <div className='modal-guts'>
                <button >Close</button>
                { props.children }
            </div>
        </div>
      </>
  )
}

export default Modal
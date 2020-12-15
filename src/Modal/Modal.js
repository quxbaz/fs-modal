import css from './style.css'
import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useEscapeKey from './useEscapeKey'

const Modal = ({children, className, onClose}) => {
  useEscapeKey(onClose)
  return createPortal(
    <>
      <div className={css.Backdrop} onClick={onClose} />
      <div className={classNames(css.Modal, className)}>
        {children}
      </div>
    </>,
    document.getElementById('Modals')
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default Modal

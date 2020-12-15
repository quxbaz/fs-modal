import css from './style.css'
import React from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useEscapeKey } from 'hooks'

const Modal = ({children, className, style, onClose}) => {
  useEscapeKey(onClose)
  return createPortal(
    <>
      <div className={css.Backdrop} onClick={onClose} />
      <div className={classNames(css.Modal, className)} style={style}>
        {children}
      </div>
    </>,
    document.getElementById('Modals')
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
}

export default Modal

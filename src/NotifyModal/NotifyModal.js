import css from './style.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Modal from 'Modal'

/*
  Source: https://stackoverflow.com/a/46181/14557705
*/
function isEmailValid (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const NotifyModal = ({onClose}) => {
  const [email, setEmail] = useState('')
  const handleClear = (event) => {
    event.preventDefault()
    setEmail('')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submit')
    // ::TODO:: Log to console.
    // Call API function submit.
  }
  return (
    <Modal className={css.NotifyModal} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className={css.CloseButton} onClick={onClose}>✕</div>
        <header>Notify when available</header>
        <p>
          Select your size and we'll email you when it's back in stock.
        </p>
        <select>
          <option>Large</option>
        </select>
        <label>
          <div>Email</div>
          <input
            autoFocus
            className={classNames({
              [css.isValid]: isEmailValid(email),
              [css.isEmpty]: email.length === 0,
            })}
            type="text"
            value={email}
            placeholder='john@doe.com'
            onChange={(event) => setEmail(event.target.value)} />
        </label>
        <footer>
          <button type='button' className={css.ClearButton} onClick={handleClear}>Clear</button>
          <button type='submit' className={css.SubmitButton}>Notify me</button>
        </footer>
      </form>
    </Modal>
  )
}

NotifyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default NotifyModal

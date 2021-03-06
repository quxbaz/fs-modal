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

// Placeholder function for backend API email validation.
function serverIsEmailValid (email) {
  return new Promise((resolve, reject) => {
    const isValid = isEmailValid(email)
    // Insert artificial latency.
    setTimeout(() => {
      // Mock the shape of the return API request.
      resolve({
        isEmailValid: isValid,
        message: isValid
          ? 'You have signed up to be notified when 345757020980 is in stock. You will be notified via email.'
          : 'Email address is invalid.',
      })
    }, 2000)
  })
}

//

const NotifyModal = ({onClose}) => {

  const [size, setSize] = useState('large')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  // The result of an API validation request.
  const [result, setResult] = useState({})

  const handleClose = () => {
    if (!isSubmitting) onClose()
  }

  const handleClear = (event) => {
    event.preventDefault()
    setEmail('')
  }

  const handleSizeChange = (event) => {
    if (!isSubmitting)
      setSize(event.target.value)
  }

  const handleInput = (event) => {
    if (!isSubmitting)
      setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(`FORM\nsize = "${size}"\nemail = "${email}"`)
    event.preventDefault()
    setResult({})
    if (email.trim().length === 0)
      return
    setIsSubmitting(true)
    serverIsEmailValid(email).then((result) => {
      setResult(result)
      setIsSubmitting(false)
    })
  }

  return (
    <Modal className={css.NotifyModal} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className={classNames({
          [css.isSubmitting]: isSubmitting,
        })}>
        <div className={css.CloseButton} onClick={onClose}>✕</div>
        <header>Notify when available</header>
        {result.isEmailValid === true ? (
          <>
            {/* <div className={css.SuccessBadge}>Success!</div> */}
            <div className={css.SuccessMessage}>
              {result.message}
            </div>
          </>
        ) : (
          <>
            <p>
              Select your size and we'll email you when it's back in stock.
            </p>
            <select value={size} onChange={handleSizeChange}>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
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
                onChange={handleInput} />
              {result.isEmailValid === false && (
                <div className={css.ErrorMessage}>{result.message}</div>
              )}
            </label>
            <footer>
              <button type='button' className={css.ClearButton} onClick={handleClear}>Clear</button>
              <button type='submit' className={css.SubmitButton}>
                {isSubmitting ? 'Submitting...' : 'Notify me'}
              </button>
            </footer>
          </>
        )}
      </form>
    </Modal>
  )
}

NotifyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default NotifyModal

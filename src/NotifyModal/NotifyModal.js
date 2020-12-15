import css from './style.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'Modal'

const NotifyModal = ({onClose}) => {
  const [email, setEmail] = useState('')
  return (
    <Modal className={css.NotifyModal} onClose={onClose}>
      <form>
        <header>Notify When Available</header>
        <p>
          Select your size and we'll email you when it's back in stock.
        </p>
        <select>
          <option>Large</option>
        </select>
        <label>
          Email
          <input
            type="text"
            value={email}
            placeholder='john@doe.com'
            onChange={(event) => setEmail(event.target.value)} />
        </label>
      </form>
    </Modal>
  )
}

NotifyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default NotifyModal

import React, { useState } from 'react'
import Modal from 'Modal'

const AppComponent = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const handleClick = () => setIsModalActive(!isModalActive)
  return (
    <div>
      <button onClick={handleClick}>
        Don't see size?
      </button>
      {isModalActive ? (
        <Modal onClose={() => setIsModalActive(false)}>
          <div>foobar</div>
        </Modal>
      ): null}
    </div>
  )
}

export default AppComponent

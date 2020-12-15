import React, { useState } from 'react'
import NotifyModal from 'NotifyModal'

const AppComponent = () => {
  const [isModalActive, setIsModalActive] = useState(true)
  const handleClick = () => setIsModalActive(!isModalActive)
  return (
    <div>
      <button onClick={handleClick}>
        Don't see size?
      </button>
      {isModalActive && (
        <NotifyModal onClose={() => setIsModalActive(false)} />
      )}
    </div>
  )
}

export default AppComponent

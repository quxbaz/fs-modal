import React, { useState } from 'react'
import NotifyModal from 'NotifyModal'

const buttonStyle = {
  display: 'block',
  margin: '120px auto 100px',
  padding: '10px 40px',
}

const AppComponent = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const handleClick = () => setIsModalActive(!isModalActive)
  return (
    <div>
      <button onClick={handleClick} style={buttonStyle}>
        Don't see size?
      </button>
      {isModalActive && (
        <NotifyModal onClose={() => setIsModalActive(false)} />
      )}
    </div>
  )
}

export default AppComponent

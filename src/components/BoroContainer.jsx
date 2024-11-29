import React from 'react'

const BoroContainer = ({children , className}) => {
  return (
    <div className={`max-w-[1420px] m-auto ${className}`}>{children}</div>
  )
}

export default BoroContainer

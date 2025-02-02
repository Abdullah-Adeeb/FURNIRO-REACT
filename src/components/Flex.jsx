import React from 'react'

const Flex = ({children , className}) => {
  return (
    <div className={`flex justify-between ${className}`}>{children}</div>
  )
}

export default Flex

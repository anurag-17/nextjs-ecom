import React from 'react'

const Wrapper = ({children, className}) => {
  return (
  <div className={`w-full max-w-[1200px] 2xl:px-0 mx-auto px-[20px] ${className || ""}`}>
    {children}
  </div>
  )
}

export default Wrapper
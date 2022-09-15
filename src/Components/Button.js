import React from 'react'

const Button = ({Text, Class, onClick, Gallery}) => {
  return (
    <button className={`py-2 font-medium text-[0.9rem] rounded-xl sm:text-sm ${Class}`} onClick={onClick}>{Text}</button>
  )
}

export default Button
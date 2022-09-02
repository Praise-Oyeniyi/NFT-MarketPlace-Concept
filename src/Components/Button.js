import React from 'react'

const Button = ({Text, Class, onClick, Gallery}) => {
  return (
    <button className={`py-[0.4rem] font-normal text-base rounded-xl ${Class}`} onClick={onClick}>{Text}</button>
  )
}

export default Button
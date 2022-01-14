import React from 'react'
import style from './Button.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined, 
  onClick?: () => void,
  children?: React.ReactNode
}

export function Button({onClick, type, children}: Props ) {
  //const {buttonType = "button" } = type

  return(
    <button 
      onClick={onClick} 
      type={!!type ? type : "button"} 
      className={style.botao}>
      {children}
    </button>
  )
}
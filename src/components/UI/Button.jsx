import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './Button.css'

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  type = 'button'
}) => {
  const { t } = useLanguage()

  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {typeof children === 'string' ? t(children) : children}
    </button>
  )
}
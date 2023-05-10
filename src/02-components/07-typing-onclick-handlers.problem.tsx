import React from 'react'
import { MouseEventHandler } from 'react'

interface ButtonProps {
  className: string
  children: React.ReactNode
  onClick: MouseEventHandler | undefined
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

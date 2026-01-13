'use client'

import React from 'react'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  onClickAction?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  onClickAction,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClickAction}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition',
        'disabled:cursor-not-allowed disabled:opacity-50',
        {
          'bg-[#998259] text-white hover:bg-gray-800': variant === 'primary',
          'bg-gray-200 text-black hover:bg-gray-300': variant === 'secondary',
          'border border-black text-black hover:bg-black hover:text-white':
            variant === 'outline',
        },
        className
      )}
    >
      {children}
    </button>
  )
}

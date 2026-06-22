import { clsx } from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-display uppercase tracking-widest font-bold cursor-pointer transition-opacity hover:opacity-80 border',
        size === 'md' && 'px-6 py-2 text-sm',
        size === 'sm' && 'px-4 py-1.5 text-xs',
        variant === 'primary' && 'bg-accent text-accent-fg border-accent',
        variant === 'outline' && 'bg-transparent text-accent border-accent',
        className,
      )}
    >
      {children}
    </button>
  )
}

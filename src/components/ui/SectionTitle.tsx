import { clsx } from 'clsx'

interface SectionTitleProps {
  title: string
  subtitle?: string
  light?: boolean
  className?: string
  align?: 'center' | 'left'
}

export default function SectionTitle({ title, subtitle, light, className, align = 'center' }: SectionTitleProps) {
  return (
    <div className={clsx(align === 'center' ? 'text-center' : 'text-left', className)}>
      <h2
        className={clsx(
          'font-display font-bold text-4xl md:text-5xl leading-tight',
          light ? 'text-[#EBE3DA]' : 'text-text',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-base leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-[#A07F59]' : 'text-text-muted',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

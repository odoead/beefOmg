interface WtfBadgeProps {
  size?: number
  label?: string
}

export default function WtfBadge({ size = 120, label = 'WTF' }: WtfBadgeProps) {
  return (
    <img
      src={`https://placehold.co/${size}x${size}/A07F59/EBE3DA?text=${label}`}
      alt="Product badge"
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  )
}

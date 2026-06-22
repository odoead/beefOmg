import { clsx } from 'clsx'

interface IngredientSectionProps {
  name: string
  origin: string
  description: string
  facts: string[]
  imgSide?: 'left' | 'right'
}

export default function IngredientSection({
  name,
  origin,
  description,
  facts,
  imgSide = 'left',
}: IngredientSectionProps) {
  const image = (
    <div className="w-full md:w-1/2 shrink-0">
      <img
        src={`https://placehold.co/600x400/A07F59/EBE3DA?text=${encodeURIComponent(name)}`}
        alt={name}
        className="w-full h-64 md:h-80 object-cover rounded-xl"
      />
    </div>
  )

  const content = (
    <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
      <span className="text-xs uppercase tracking-widest font-bold text-[#A07F59]">{origin}</span>
      <h3 className="font-display font-bold text-3xl md:text-4xl text-[#EBE3DA]">{name}</h3>
      <p className="text-[#A07F59] leading-relaxed">{description}</p>
      {facts.length > 0 && (
        <ul className="space-y-2 mt-2">
          {facts.map(fact => (
            <li key={fact} className="flex items-start gap-2 text-sm text-[#C6B199]">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#A07F59]" />
              {fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <section className="bg-[#120800] py-16 border-t border-[#2A1A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className={clsx('flex flex-col md:flex-row gap-12 items-center', imgSide === 'right' && 'md:flex-row-reverse')}>
          {image}
          {content}
        </div>
      </div>
    </section>
  )
}

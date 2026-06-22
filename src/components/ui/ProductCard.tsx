import Button from './Button'
import WtfBadge from './WtfBadge'

interface ProductCardProps {
  name: string
  ingredients: string[]
  price: string
  isNew?: boolean
}

export default function ProductCard({ name, ingredients, price, isNew }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-surface rounded-xl border border-surface-alt gap-4 transition-shadow hover:shadow-lg">
      {isNew && (
        <span className="self-end text-xs uppercase tracking-widest font-bold text-accent bg-surface-alt px-2 py-0.5 rounded-full">
          New
        </span>
      )}
      <WtfBadge size={120} label={name.slice(0, 3)} />
      <div className="flex-1">
        <h3 className="font-display font-bold text-lg uppercase tracking-wider text-text mb-2">
          {name}
        </h3>
        <ul className="space-y-1 mb-4">
          {ingredients.map(ing => (
            <li key={ing} className="text-sm text-text-muted">
              {ing}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full border-t border-surface-alt pt-4 flex flex-col items-center gap-3">
        <p className="font-bold text-lg text-text">{price} <span className="text-xs font-normal text-text-muted">incl. VAT</span></p>
        <Button size="sm">Choose</Button>
      </div>
    </div>
  )
}

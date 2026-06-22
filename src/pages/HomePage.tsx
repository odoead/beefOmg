import ProductCard from '../components/ui/ProductCard'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'

const products = [
  {
    name: 'CARNIVORE',
    ingredients: ['Dried beef', 'Himalayan salt'],
    price: '€3.99',
  },
  {
    name: 'CARNIVORE JUNIOR',
    ingredients: ['Dried beef', 'Himalayan salt — reduced'],
    price: '€3.99',
  },
  {
    name: 'CARNIVORE+',
    ingredients: ['Dried beef', 'Himalayan salt', 'Ghee butter'],
    price: '€3.99',
  },
  {
    name: 'CARNIVORE+ JR',
    ingredients: ['Dried beef', 'Himalayan salt — reduced', 'Ghee butter'],
    price: '€3.99',
  },
  {
    name: 'SPICY',
    ingredients: ['Dried beef', 'Himalayan salt', 'Calabrian chili'],
    price: '€3.99',
  },
  {
    name: 'WHISKY',
    ingredients: ['Dried beef', 'Himalayan salt', 'Kampot black pepper', 'Macallan whisky'],
    price: '€5.99',
    isNew: true,
  },
]

const differentiators = [
  {
    icon: '🌍',
    title: 'Globally Sourced Ingredients',
    text: 'Cambodian pepper, Italian chili, Scottish whisky — we travel the world so every bite tells a story.',
  },
  {
    icon: '🔬',
    title: 'Premium Process',
    text: 'Nitrogen-sealed packaging locks in freshness from the moment we finish slow-drying each batch.',
  },
  {
    icon: '🌿',
    title: 'Responsibility First',
    text: 'Welfare-conscious farms, eco-friendly packaging, and zero unnecessary additives.',
  },
]

const philosophy = [
  { letter: 'F', word: 'Flavor', desc: 'A rare ingredient symphony in every bite.' },
  { letter: 'F', word: 'Fine', desc: 'Uncompromising quality and smoothness.' },
  { letter: 'F', word: 'Force', desc: 'Natural protein and energy — no fillers.' },
  { letter: 'F', word: 'Focus', desc: 'Precision crafting without shortcuts.' },
  { letter: 'F', word: 'Flair', desc: 'Jerky that tastes as exceptional as it looks.' },
]

const comparisonRows = [
  { attr: 'Ingredients', ours: 'Premium, globally sourced', standard: 'Generic, mass-produced' },
  { attr: 'Additives', ours: 'None — zero E250', standard: 'Preservatives & fillers' },
  { attr: 'Packaging', ours: 'Nitrogen-sealed, recycled', standard: 'Standard plastic' },
  { attr: 'Taste', ours: 'Complex, layered flavour', standard: 'One-dimensional' },
  { attr: 'Health', ours: 'Clean protein, no sugar', standard: 'Hidden sugars & additives' },
]

const badges = ['Gluten-Free', 'Preservative-Free', 'Recycled Packaging']

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold italic text-5xl md:text-7xl text-text leading-tight mb-6">
            What The Flavor...
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our jerky isn't just meat. It's a symphony of carefully selected ingredients
            from the finest corners of the world.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {badges.map(b => (
              <span key={b} className="text-xs uppercase tracking-widest border border-accent text-accent rounded-full px-4 py-1.5 font-bold">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-surface py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Products" subtitle="World-class flavour. Zero compromises." className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-surface-alt py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Why Different?" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => (
              <div key={d.title} className="flex flex-col items-center text-center gap-4">
                <span className="text-4xl">{d.icon}</span>
                <h3 className="font-display font-bold text-xl text-text">{d.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — always dark */}
      <section className="bg-[#120800] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-[#A07F59] mb-3">WTF?</p>
            <h2 className="font-display font-bold italic text-4xl md:text-5xl text-[#EBE3DA]">
              What is What The Flavor?
            </h2>
            <p className="text-[#A07F59] mt-4 max-w-xl mx-auto">
              Five principles that define every batch we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {philosophy.map(p => (
              <div key={p.word} className="border border-[#2A1A0A] rounded-xl p-6 flex flex-col gap-3 hover:border-[#A07F59] transition-colors">
                <span className="font-display font-bold text-5xl text-[#A07F59] leading-none">{p.letter}</span>
                <h3 className="font-display font-bold text-xl text-[#EBE3DA]">{p.word}</h3>
                <p className="text-sm text-[#A07F59] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Us vs. Them" subtitle="See the difference side by side." className="mb-12" />
          <div className="overflow-x-auto rounded-xl border border-surface-alt">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-alt">
                  <th className="text-left p-4 font-bold text-text-muted uppercase tracking-widest text-xs w-1/3">Feature</th>
                  <th className="p-4 font-bold text-accent uppercase tracking-widest text-xs text-center">JERKY WTF</th>
                  <th className="p-4 font-bold text-text-muted uppercase tracking-widest text-xs text-center">Standard Jerky</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.attr} className={i % 2 === 0 ? 'bg-surface' : 'bg-background'}>
                    <td className="p-4 text-text-muted font-bold">{row.attr}</td>
                    <td className="p-4 text-text text-center">{row.ours}</td>
                    <td className="p-4 text-text-muted text-center">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Partnership — always dark */}
      <section className="bg-[#120800] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-[#A07F59] mb-4">B2B</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#EBE3DA] mb-6">
            Gourmet jerky to elevate your business
          </h2>
          <p className="text-[#A07F59] text-lg mb-3">
            Perfect for athletes, gourmets, and health-conscious consumers.
          </p>
          <p className="text-[#A07F59] max-w-xl mx-auto mb-10 leading-relaxed">
            Partner with us for wholesale, events, or private-label production. We'll craft something extraordinary together.
          </p>
          <Button>Get in Touch</Button>
        </div>
      </section>
    </>
  )
}

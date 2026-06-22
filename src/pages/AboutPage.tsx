import SectionTitle from '../components/ui/SectionTitle'

const values = [
  {
    title: 'Pure Ingredients',
    text: 'Premium beef, Himalayan salt, Kampot pepper, Calabrian chili, ghee, and Macallan whisky — good food begins with what you put in.',
    img: 'https://placehold.co/600x400/A07F59/EBE3DA?text=Pure+Ingredients',
  },
  {
    title: 'Heritage Craftsmanship',
    text: 'Hand-processed from marinating through drying. Every batch carries the care of traditional methods.',
    img: 'https://placehold.co/600x400/6B5C4A/EBE3DA?text=Heritage+Craftsmanship',
  },
  {
    title: 'Your Health Comes First',
    text: 'No sugar. No unnecessary additives. Just clean protein and beneficial fats for an active lifestyle.',
    img: 'https://placehold.co/600x400/C6B199/120800?text=Health+Focus',
  },
]

const differentiators = [
  {
    icon: '🌏',
    title: 'Globally Sourced',
    text: 'We travel to Cambodia, Italy, and Scotland to source each ingredient at its peak.',
  },
  {
    icon: '⚗️',
    title: 'Premium Process',
    text: 'Nitrogen sealing preserves every nuance of flavour from the moment we finish drying.',
  },
  {
    icon: '♻️',
    title: 'Ethical Sourcing',
    text: 'Welfare-conscious farms. Eco-friendly packaging. We care about where our food comes from.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Values */}
      <section className="bg-background pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Values" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(v => (
              <div key={v.title} className="group rounded-xl overflow-hidden border border-surface-alt bg-surface flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-xl text-[#EBE3DA]">
                    {v.title}
                  </h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed p-5">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface-alt py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-4">Our Story</p>
              <h2 className="font-display font-bold italic text-4xl md:text-5xl text-text leading-tight">
                We asked why jerky had to be so ordinary.
              </h2>
            </div>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                We looked at what was on the shelves — excessive sugar, long lists of preservatives,
                and a flavour profile that could charitably be called "meh." We believed jerky
                could be more.
              </p>
              <p>
                So we built JERKY WTF: a product combining the flavour complexity of fine cuisine
                with the clean nutrition of a serious athlete's snack. Every decision — from which
                farm to source from, to which pepper has Protected Geographical Indication status
                — is made with intention.
              </p>
              <p>
                The result is jerky that earns a genuine <em className="font-bold text-accent">WTF</em>
                {' '}— not from confusion, but from the surprise that something this good even exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators — always dark */}
      <section className="bg-[#120800] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="What Sets Us Apart"
            light
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map(d => (
              <div key={d.title} className="flex flex-col gap-4 p-8 rounded-xl border border-[#2A1A0A] hover:border-[#A07F59] transition-colors">
                <span className="text-4xl">{d.icon}</span>
                <h3 className="font-display font-bold text-xl text-[#EBE3DA]">{d.title}</h3>
                <p className="text-[#A07F59] text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

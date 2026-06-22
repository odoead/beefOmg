import IngredientSection from '../components/ui/IngredientSection'
import SectionTitle from '../components/ui/SectionTitle'

const beefBenefits = [
  'Delicate, clean flavour with fine muscle fibres',
  'High protein content for performance and recovery',
  'Low fat for extended shelf life and a cleaner taste',
]

const beefProcess = [
  'Hand-selected cuts for consistent quality',
  'Precision slicing to preserve muscle structure',
  'Deep marination into the meat fibres',
  'Slow-drying process for maximum flavour',
]

const ingredients = [
  {
    name: 'Himalayan Salt',
    origin: 'Pakistan · Khewra Salt Mine',
    description:
      'Mined from ancient seabeds deep in the Pakistani mountains, Himalayan salt carries more than 80 minerals and trace elements. It seasons with subtlety — enhancing rather than overpowering.',
    facts: [
      'Over 80 minerals and trace elements',
      'Natural pink hue from iron oxide',
      'Lower sodium content than table salt',
    ],
    imgSide: 'left' as const,
  },
  {
    name: 'Kampot Black Pepper',
    origin: 'Cambodia · Kampot Province · PGI Certified',
    description:
      'Kampot pepper holds Protected Geographical Indication status — one of fewer than a dozen spices in the world to do so. Its profile brings citrus brightness and a gentle sweetness before the heat arrives.',
    facts: [
      'Protected Geographical Indication (PGI) certified',
      'Notes of citrus, floral warmth, and subtle sweetness',
      'Hand-picked at peak ripeness',
    ],
    imgSide: 'right' as const,
  },
  {
    name: 'Calabrian Chili',
    origin: 'Italy · Calabria',
    description:
      'Sun-dried on the hillsides of southern Italy, Calabrian chili offers a balanced heat profile with sweet undertones. It brings warmth without aggression — complexity you can actually taste.',
    facts: [
      'Sun-dried for concentrated flavour',
      'Balanced heat with sweet undertones',
      'Rich in capsaicin and vitamin C',
    ],
    imgSide: 'left' as const,
  },
  {
    name: 'Macallan Whisky',
    origin: 'Scotland · Speyside',
    description:
      'From the storied distilleries of Speyside, Macallan whisky contributes caramel, vanilla, and dried fruit notes that no other ingredient can replicate. A touch of luxury in every bite.',
    facts: [
      'Caramel, vanilla, and dried fruit tasting notes',
      'Aged in sherry-seasoned oak casks',
      'Speyside — the heartland of Scotch whisky',
    ],
    imgSide: 'right' as const,
  },
  {
    name: 'Ghee Butter',
    origin: 'India · Ayurvedic Tradition',
    description:
      'Clarified and purified through an ancient Indian process, ghee is "liquid gold" in Ayurvedic tradition. It adds a rich, nutty creaminess and beneficial fatty acids that bind the marinade to the meat.',
    facts: [
      'Lactose-free clarified butter',
      'Rich in fat-soluble vitamins A, D, E, K',
      '"Liquid gold" in Ayurvedic medicine',
    ],
    imgSide: 'left' as const,
  },
]

export default function IngredientsPage() {
  return (
    <>
      {/* Hero intro */}
      <section className="bg-background pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Ingredients"
            subtitle="Our jerky isn't just meat. It's a symphony of carefully selected ingredients — from Himalayan salt that adds pure, clean flavour, to the royal Kampot black pepper, and even Macallan whisky that brings luxurious depth."
          />
        </div>
      </section>

      {/* Beef Chuck Tender hero — always dark */}
      <section className="bg-[#120800] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-widest text-[#A07F59] font-bold">The Foundation</p>
              <h2 className="font-display font-bold italic text-5xl md:text-6xl text-[#EBE3DA] leading-tight">
                Beef Chuck Tender
              </h2>
              <p className="text-[#A07F59] leading-relaxed">
                A hidden gem in meat processing — chuck tender's tight grain structure
                retains firmness after drying, absorbs marinades deeply, and delivers
                a consistently clean bite.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['100% Beef', 'High Protein', 'Low Fat', 'No Additives'].map(tag => (
                  <span key={tag} className="text-xs border border-[#A07F59] text-[#A07F59] rounded-full px-3 py-1 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://placehold.co/600x500/2A1A0A/A07F59?text=Beef+Chuck+Tender"
                alt="Beef Chuck Tender"
                className="w-full rounded-xl object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beef details — always dark */}
      <section className="bg-[#1E1008] py-16 px-4 border-t border-[#2A1A0A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display font-bold text-2xl text-[#EBE3DA] mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {beefBenefits.map(b => (
                <li key={b} className="flex items-start gap-3 text-[#A07F59]">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#A07F59]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-[#EBE3DA] mb-6">Our Process</h3>
            <ol className="space-y-4">
              {beefProcess.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-[#A07F59]">
                  <span className="shrink-0 w-7 h-7 rounded-full border border-[#A07F59] flex items-center justify-center text-xs font-bold text-[#A07F59]">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Individual ingredients */}
      {ingredients.map(ing => (
        <IngredientSection key={ing.name} {...ing} />
      ))}
    </>
  )
}

import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { label: 'Products', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'About Jerky', to: '/' },
  { label: 'Ingredients', to: '/ingredients' },
  { label: 'Cooperation', to: '/' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-surface-alt">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="font-display font-bold text-xl tracking-tight text-text shrink-0">
          JERKY WTF
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-bold transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : 'text-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button aria-label="Account" className="w-8 h-8 flex items-center justify-center hover:text-accent transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button aria-label="Cart" className="w-8 h-8 flex items-center justify-center hover:text-accent transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

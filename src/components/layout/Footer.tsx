import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#120800] text-[#EBE3DA]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="font-bold text-xl font-display mb-3">JERKY WTF</p>
            <p className="text-sm text-[#A07F59] leading-relaxed">
              Jerky.wtf s.r.o.<br />
              Lidická 700/19, Brno, 602 00<br />
              Czech Republic
            </p>
            <p className="text-sm text-[#A07F59] mt-4">
              <a href="mailto:jerky@jerky.wtf" className="hover:text-[#EBE3DA] transition-colors">jerky@jerky.wtf</a><br />
              <a href="tel:+420773793970" className="hover:text-[#EBE3DA] transition-colors">+420 773 793 970</a>
            </p>
          </div>

          <div>
            <p className="font-bold text-xs uppercase tracking-widest mb-4 text-[#A07F59]">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: 'Products', to: '/' },
                { label: 'About Us', to: '/about-us' },
                { label: 'Ingredients', to: '/ingredients' },
                { label: 'Cooperation', to: '/' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-[#A07F59] hover:text-[#EBE3DA] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-xs uppercase tracking-widest mb-4 text-[#A07F59]">Newsletter</p>
            <p className="text-sm text-[#A07F59] mb-4">Get the latest news and exclusive offers.</p>
            <form onSubmit={e => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#1E1008] border border-[#A07F59] rounded-full px-4 py-2 text-sm text-[#EBE3DA] placeholder-[#6B5C4A] outline-none focus:border-[#C6B199]"
              />
              <button
                type="submit"
                className="bg-[#A07F59] text-[#120800] rounded-full px-4 py-2 text-xs uppercase tracking-widest font-bold hover:bg-[#C6B199] transition-colors"
              >
                Join
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-[#2A1A0A]">
              <ul className="flex flex-wrap gap-4">
                {['Terms', 'Privacy Policy', 'Complaints'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-xs text-[#6B5C4A] hover:text-[#A07F59] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2A1A0A] text-center">
          <p className="text-xs text-[#6B5C4A]">
            © {new Date().getFullYear()} Jerky.wtf s.r.o. &nbsp;·&nbsp; IČO: 22520651 &nbsp;·&nbsp; DIČ: CZ22520651
          </p>
        </div>
      </div>
    </footer>
  )
}

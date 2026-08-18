import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Stories', href: '#stories' },
  { label: 'Get Involved', href: '#get-involved' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#d9773d] text-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <Container className="flex items-center justify-between gap-3 py-3 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-[#3d2a1f] shadow-sm sm:h-12 sm:w-12">
            <span className="px-1 text-center leading-tight">Logo</span>
          </div>

          <a
            href="/"
            className="truncate text-sm font-semibold uppercase tracking-[0.14em] text-white sm:text-base"
            aria-label="Shree Ram Sangh home"
          >
            श्री राम संघ
          </a>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                index === 0 ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
              aria-current={index === 0 ? 'page' : undefined}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-white transition-opacity duration-200 ${
                  index === 0 ? 'w-full opacity-100' : 'w-full opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center">
          <Button
            variant="secondary"
            size="md"
            className="border-white bg-white text-[#1f1d1b] hover:bg-[#f5f0eb]"
          >
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-[#d9773d] text-white transition-colors hover:bg-[#c96a31] lg:hidden"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/20 bg-[#d9773d] transition-all duration-200 ease-out lg:hidden ${
          isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                variant="secondary"
                size="md"
                className="w-full justify-center border-white bg-white text-[#1f1d1b] hover:bg-[#f5f0eb]"
              >
                Donate
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;

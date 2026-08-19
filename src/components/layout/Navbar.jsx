import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Our Work',
    href: '#our-work',
    children: ['[MISSION / PROGRAMME 01]', '[MISSION / PROGRAMME 02]', '[MISSION / PROGRAMME 03]', 'VIEW ALL PROGRAMMES'],
  },
  {
    label: 'Impact',
    href: '#impact',
    children: ['Our Impact', 'Impact Stories', '[IMPACT AREA]', '[IMPACT REPORT]', 'View All Impact'],
  },
  {
    label: 'Stories',
    href: '#stories',
    children: ['Stories of Change', 'Community Stories', 'Volunteer Stories', 'News & Updates', 'View All Stories'],
  },
  {
    label: 'Get Involved',
    href: '#get-involved',
    children: ['Volunteer', 'Donate', 'Partner With Us', 'Participate', 'Contact Us'],
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown((currentValue) => (currentValue === label ? null : label));
  };

  const mobileNavItems = navItems.filter((item) => item.label !== 'Home');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#d9773d] text-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <Container ref={navRef} className="flex items-center justify-between gap-3 py-3 sm:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-[#3d2a1f] shadow-sm sm:h-12 sm:w-12">
            <img src="/logo.jpeg" alt="Shree Ram Sangh Logo" className="h-full w-full object-cover" />
          </div>

          <a
            href="/"
            className="truncate font-['Noto_Sans_Devanagari'] text-base font-semibold tracking-[0.02em] text-white sm:text-lg"
            aria-label="श्री राम संघ home"
          >
            श्री राम संघ
          </a>
        </div>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const hasChildren = Array.isArray(item.children);
            const isOpen = activeDropdown === item.label;

            return hasChildren ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#d9773d]"
                >
                  <span>{item.label}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full mt-3 w-64 rounded-md border border-[#eadcc9] bg-white p-2 text-[#1f1d1b] shadow-[0_18px_52px_rgba(31,29,27,0.12)]">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block rounded-sm px-3 py-2 text-sm text-[#3b3a38] transition-colors hover:bg-[#f7f1ea] hover:text-[#d9773d]"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            );
          })}
        </nav>

        <div className="hidden xl:flex xl:items-center">
          <Button variant="secondary" size="md" className="border-white bg-white text-[#1f1d1b] hover:bg-[#f5f0eb]">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-[#d9773d] text-white transition-colors hover:bg-[#c96a31] xl:hidden"
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
        className={`overflow-hidden border-t border-white/20 bg-[#d9773d] transition-all duration-200 ease-out xl:hidden ${
          isOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            <a
              href="#home"
              className="rounded-md px-2 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="rounded-md px-2 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            {mobileNavItems.map((item) => {
              const isExpanded = activeDropdown === item.label;
              const hasChildren = Array.isArray(item.children);

              return hasChildren ? (
                <div key={item.label} className="rounded-md border border-white/15 bg-white/5">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    className="flex w-full items-center justify-between px-2 py-2.5 text-left text-sm font-medium text-white/90"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-white/10 px-3 py-2">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block rounded-sm px-2 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : null;
            })}

            <div className="pt-3">
              <Button variant="secondary" size="md" className="w-full justify-center border-white bg-white text-[#1f1d1b] hover:bg-[#f5f0eb]">
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

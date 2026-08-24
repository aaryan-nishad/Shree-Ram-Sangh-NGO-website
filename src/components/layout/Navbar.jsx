import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { Link,NavLink } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/about' },
  {
    label: 'Our Work',
    href: '/missions',
    children: [{
      label: 'Child & Women Welfare',
      href: '/missions#child-women'
    }, 
    {
      label: 'Temple Restoration & Cultural Awakening',
      href: '/missions#temple-restoration'
    },
     {
      label: 'Environmental Conservation',
      href: '/missions#environmental-conservation'
    },
     {
      label: 'Animal Welfare',
      href: '/missions#animal-welfare'
    }
  ],
  },
  {
    label: 'Impact',
    href: '#impact',
    children: [{
      label: 'Our Impact'
    }, {
      label: 'Impact Stories'
    }, {
      label: '[IMPACT AREA]'
    }]
  },
  {
    label: 'Stories',
    href: '#stories',
    children: [{
      label: 'Stories of Change'
    }, 
    {
      label: 'Community Stories'
    }, 
    {
      label: 'Volunteer Stories'
    }, 
    {
      label: 'News & Updates'
    }, 
    {
      label: 'View All Stories'
    }
    ]
  },
  {
    label: 'Get Involved',
    href: '#get-involved',
    children: [{
      label: 'Volunteer'
    }, {
      label: 'Donate'
    }, {
      label: 'Partner With Us'
    }, {
      label: 'Participate'
    }, {
      label: 'Contact Us'
    }
    ]
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
    setActiveDropdown((currentValue) =>
      currentValue === label ? null : label
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#d9773d] text-white shadow-[0_1px_0_rgba(0,0,0,0.08)]">
      <Container
        ref={navRef}
        className="flex items-center justify-between gap-3 py-3 sm:py-4"
      >
        {/* Logo + Brand */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-white text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-[#3d2a1f] shadow-sm sm:h-12 sm:w-12">
            <img
              src="/logo.jpeg"
              alt="Shree Ram Sangh Logo"
              className="h-full w-full object-cover"
            />
          </div>

          <NavLink
            to="/"
            className="truncate font-['Noto_Sans_Devanagari'] text-base font-semibold tracking-[0.02em] text-white sm:text-lg"
            aria-label="श्री राम संघ home"
            style={{ fontFamily: '"Rozha One", serif' }}
          >
            श्री राम संघ
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Main navigation"
        >
          {/* HOME
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors ${isActive
                ? 'text-white'
                : 'text-white/80 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              </>
            )}
          </NavLink> */}

          {/* OTHER NAV ITEMS */}
          {navItems.map((item) => {
            const hasChildren = Array.isArray(item.children);
            const isDropdownOpen = activeDropdown === item.label;

            /* ABOUT */
            if (!hasChildren) {
              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors ${isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}

                      <span
                        className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-white transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            }

            /* DROPDOWN ITEMS */
            const isLinkable = item.href.startsWith('/');

            return (
              <div key={item.label} className="relative">
                {isLinkable ? (
                  <div className="flex items-center gap-1">
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-sm font-medium transition-colors ${isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {item.label}
                      
                    </NavLink>

                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="menu"
                      aria-label={`Toggle ${item.label} submenu`}
                      className="text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#d9773d]"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="menu"
                    className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#d9773d]"
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                )}

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-3 w-64 rounded-md border border-[#eadcc9] bg-white p-2 text-[#1f1d1b] shadow-[0_18px_52px_rgba(31,29,27,0.12)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block rounded-sm px-3 py-2 text-sm text-[#3b3a38] transition-colors hover:bg-[#f7f1ea] hover:text-[#d9773d]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Donate Desktop */}
        <div className="hidden xl:flex xl:items-center">
          <Button
            variant="secondary"
            size="md"
            className="border-white bg-white text-[#1f1d1b] hover:bg-[#f5f0eb]"
          >
            Donate
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/20 bg-[#d9773d] transition-all duration-200 ease-out xl:hidden ${isOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        aria-hidden={!isOpen}
      >
        <Container className="py-4">
          <nav
            className="flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {/* HOME
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-2.5 text-sm font-medium transition-colors ${isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/90 hover:bg-white/10'
                }`
              }
            >
              Home
            </NavLink> */}

            {/* ABOUT */}
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-2 py-2.5 text-sm font-medium transition-colors ${isActive
                  ? 'bg-white/15 text-white'
                  : 'text-white/90 hover:bg-white/10'
                }`
              }
            >
              About
            </NavLink>

            {/* MOBILE DROPDOWNS */}
            {navItems
              .filter((item) => Array.isArray(item.children))
              .map((item) => {
                const isExpanded = activeDropdown === item.label;
                const isLinkable = item.href.startsWith('/');

                return (
                  <div
                    key={item.label}
                    className="rounded-md border border-white/15 bg-white/5"
                  >
                    {isLinkable ? (
                      <div className="flex w-full items-center justify-between px-2 py-2.5">
                        <NavLink
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-left text-sm font-medium text-white/90"
                        >
                          {item.label}
                        </NavLink>

                        <button
                          type="button"
                          onClick={() => toggleDropdown(item.label)}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="text-white/90"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between px-2 py-2.5 text-left text-sm font-medium text-white/90"
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}

                    {isExpanded && (
                      <div className="border-t border-white/10 px-3 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block rounded-sm px-2 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                              onClick={() => {setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

            {/* MOBILE DONATE */}
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
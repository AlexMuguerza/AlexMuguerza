import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../utils/copy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/95 backdrop-blur-xl border-b border-border py-3' : 'py-5'
      }`}>
        <div className="max-w-275 mx-auto px-6 md:px-8 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('hero')} 
            className="text-accent text-xl font-serif tracking-widest hover:opacity-80 transition-opacity"
          >
            EM
          </button>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => scrollTo(link.id)}
                  className="text-text hover:text-text-heading text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-heading p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <ul className="flex flex-col items-center justify-center gap-8 h-full -mt-20">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollTo(link.id)}
                className="text-text-heading text-2xl font-medium hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

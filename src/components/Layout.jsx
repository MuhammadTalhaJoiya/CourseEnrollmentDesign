import { Link, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import React, { useState } from 'react';

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary text-text-primary">
      <header className="bg-surface shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-primary">LearnHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-primary hover:text-primary transition-colors duration-200">Home</Link>
            <Link to="/courses" className="text-text-primary hover:text-primary transition-colors duration-200">Courses</Link>
            <Link to="/about" className="text-text-primary hover:text-primary transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-text-primary hover:text-primary transition-colors duration-200">Contact</Link>
          </div>

          {/* Auth Buttons and Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/dashboard" className="text-text-primary hover:text-primary transition-colors duration-200">My Dashboard</Link>
            <Link to="/login" className="btn btn-outline">Log In</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={toggleMobileMenu} className="text-text-primary focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface shadow-lg absolute top-16 left-0 w-full py-4 space-y-4 border-t border-border-primary">
            <Link to="/" className="block px-4 py-2 text-text-primary hover:bg-background-secondary transition-colors duration-200" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/courses" className="block px-4 py-2 text-text-primary hover:bg-background-secondary transition-colors duration-200" onClick={toggleMobileMenu}>Courses</Link>
            <Link to="/about" className="block px-4 py-2 text-text-primary hover:bg-background-secondary transition-colors duration-200" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="block px-4 py-2 text-text-primary hover:bg-background-secondary transition-colors duration-200" onClick={toggleMobileMenu}>Contact</Link>
            <Link to="/dashboard" className="block px-4 py-2 text-text-primary hover:bg-background-secondary transition-colors duration-200" onClick={toggleMobileMenu}>My Dashboard</Link>
            <div className="px-4 py-2">
              <Link to="/login" className="btn btn-outline w-full mb-2" onClick={toggleMobileMenu}>Log In</Link>
              <Link to="/signup" className="btn btn-primary w-full" onClick={toggleMobileMenu}>Sign Up</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-background-tertiary text-text-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">LearnHub</h3>
              <p className="text-text-muted">Empowering learners worldwide with quality education.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-text-primary">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/courses" className="text-text-secondary hover:text-primary transition-colors duration-200">All Courses</Link></li>
                <li><Link to="/about" className="text-text-secondary hover:text-primary transition-colors duration-200">About Us</Link></li>
                <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-text-primary">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors duration-200">Help Center</Link></li>
                <li><Link to="/about" className="text-text-secondary hover:text-primary transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/about" className="text-text-secondary hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-text-primary">Contact Info</h4>
              <ul className="space-y-2 text-text-secondary">
                <li>Email: contact@learnhub.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Education St, Learning City, 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-primary mt-8 pt-8 text-center text-text-muted">
            <p>&copy; {new Date().getFullYear()} LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
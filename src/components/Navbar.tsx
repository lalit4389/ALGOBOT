import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">ALGO<span className="text-primary">Trade</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" label="Home" active={location.pathname === '/'} />
              <NavLink to="/api-connection" label="API" active={location.pathname === '/api-connection'} />
              <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
            </div>
          </div>
          
          {/* Auth Buttons - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn btn-outline text-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary text-sm">
                Register
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Home" active={location.pathname === '/'} />
            <MobileNavLink to="/api-connection" label="API" active={location.pathname === '/api-connection'} />
            <MobileNavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center justify-center gap-4 px-5">
              <Link 
                to="/login" 
                className="btn btn-outline text-sm w-full text-center"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="btn btn-primary text-sm w-full text-center"
              >
                Register
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Desktop navigation link
const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active 
        ? 'text-white bg-primary/20' 
        : 'text-gray-300 hover:text-white hover:bg-primary/10'
    }`}
  >
    {label}
  </Link>
);

// Mobile navigation link
const MobileNavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      active 
        ? 'text-white bg-primary/20' 
        : 'text-gray-300 hover:text-white hover:bg-primary/10'
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
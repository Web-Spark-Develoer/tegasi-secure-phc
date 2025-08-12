import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
  ];

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ff0a8b12-7e43-4479-9406-6f0d0fac60a4.png"
              alt="Tegasi Security Logo"
              className="h-8 w-auto"
            />
            <div className="font-poppins">
              <span className="text-xl font-bold text-tegasi-navy">Tegasi Security</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-tegasi-navy ${
                  isActive(item.path) ? "text-tegasi-navy" : "text-tegasi-gray"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="tel:+2347037581741"
              className="flex items-center space-x-2 text-tegasi-gray hover:text-tegasi-navy transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+234 703 758 1741</span>
            </a>
            <Button asChild variant="whatsapp" size="sm">
              <a 
                href="https://wa.me/2347037581741?text=Hello, I need a security quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Quote
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-tegasi-gray hover:text-tegasi-navy transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-tegasi-navy ${
                    isActive(item.path) ? "text-tegasi-navy" : "text-tegasi-gray"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="tel:+2347037581741"
                className="flex items-center space-x-2 text-tegasi-gray hover:text-tegasi-navy transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+234 703 758 1741</span>
              </a>
              <Button asChild variant="whatsapp" size="sm" className="w-fit">
                <a 
                  href="https://wa.me/2347037581741?text=Hello, I need a security quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Quote
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tegasi-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/ff0a8b12-7e43-4479-9406-6f0d0fac60a4.png"
                alt="Tegasi Security Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold font-poppins">Tegasi Security</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional security systems installation and maintenance for homes and businesses in Port Harcourt and Rivers State.
            </p>
            <p className="text-sm text-gray-400">
              Registered company — CAC No: 2013311
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+2347037581741"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+234 703 758 1741</span>
              </a>
              <a 
                href="mailto:tegasienterprises@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>tegasienterprises@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Shop 5 Alphamic Plaza, Beside Bobby Filling Station, Mgbuoba, Port Harcourt, Rivers State</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Operating Hours:</p>
              <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Emergency: 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tegasi Security Technologies Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tegasi Security Technologies Limited",
            "alternateName": "Tegasi Security",
            "image": "https://tegasisecurity.com/logo.png",
            "description": "Professional CCTV, alarm systems, access control & electric fence installation in Port Harcourt, Rivers State, Nigeria",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop 5 Alphamic Plaza, Beside Bobby Filling Station, Mgbuoba",
              "addressLocality": "Port Harcourt",
              "addressRegion": "Rivers State",
              "addressCountry": "Nigeria"
            },
            "telephone": "+2347037581741",
            "email": "tegasienterprises@gmail.com",
            "url": "https://tegasisecurity.com",
            "openingHours": "Mo-Sa 08:00-18:00",
            "serviceArea": {
              "@type": "State",
              "name": "Rivers State"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Security Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "CCTV Camera Installation"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Access Control Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Alarm Systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electric Fence Installation"
                  }
                }
              ]
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;
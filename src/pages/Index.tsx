import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle, 
  Camera, 
  Lock, 
  AlertTriangle,
  Zap,
  Phone,
  MessageCircle,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      title: "CCTV Camera Installation",
      description: "Indoor & outdoor camera systems with remote viewing",
      icon: <Camera className="h-8 w-8 text-tegasi-navy" />,
      benefit: "Deter crime and monitor your property 24/7"
    },
    {
      title: "Access Control & Hotel Locks",
      description: "Card and code access solutions for offices and hotels",
      icon: <Lock className="h-8 w-8 text-tegasi-navy" />,
      benefit: "Control who enters your premises with smart access"
    },
    {
      title: "Intruder & Fire Alarm Systems",
      description: "Advanced sensors and instant alert systems",
      icon: <AlertTriangle className="h-8 w-8 text-tegasi-navy" />,
      benefit: "Get instant alerts for faster emergency response"
    },
    {
      title: "Perimeter Security / Electric Fence",
      description: "Complete perimeter protection systems",
      icon: <Zap className="h-8 w-8 text-tegasi-navy" />,
      benefit: "Secure your property boundaries effectively"
    }
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/d119c564-4365-47ac-a38c-8e348e81f57a.png",
      caption: "Professional security equipment installation"
    },
    {
      src: "/lovable-uploads/51890e12-a489-47ba-8b00-66c62eb5dbe9.png", 
      caption: "Electric fence installation - Port Harcourt"
    },
    {
      src: "/lovable-uploads/961e7147-0422-42a5-8d99-5bc4268fc1cb.png",
      caption: "Security technician at work"
    },
    {
      src: "/lovable-uploads/e12c7dde-8b27-456d-9d89-ad5543efa5b9.png",
      caption: "CCTV camera setup"
    },
    {
      src: "/lovable-uploads/34e746bd-fa8f-4c66-a8a6-dff36243a852.png",
      caption: "Perimeter security installation"
    },
    {
      src: "/lovable-uploads/0fd78f6f-e587-4146-8c79-0a19eca71203.png",
      caption: "Completed security system project"
    }
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tegasi-navy via-blue-900 to-blue-800 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
                Protect Your Home & Office <span className="text-blue-200">24/7</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                Professional CCTV, access control and alarm systems installed and serviced in Port Harcourt. Fast local response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <a 
                    href="https://wa.me/2347037581741?text=Hello, I need a security quote for my property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp for Quote
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={scrollToServices}
                  className="border-white text-white hover:bg-white hover:text-tegasi-navy"
                >
                  View Services
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="lg:order-2">
              <img 
                src="/lovable-uploads/0fd78f6f-e587-4146-8c79-0a19eca71203.png"
                alt="Professional security system installation by Tegasi Security in Port Harcourt"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-tegasi-navy font-medium">Registered company</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-tegasi-navy font-medium">Certified installers</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-tegasi-navy font-medium">Local support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-tegasi-navy font-medium">Fast response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tegasi-navy font-poppins mb-4">
              Why Choose Tegasi Security?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-tegasi-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tegasi-navy mb-3 font-poppins">Always On</h3>
              <p className="text-tegasi-gray leading-relaxed">
                Your security works 24/7 to protect people and property with reliable monitoring systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-tegasi-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tegasi-navy mb-3 font-poppins">Trusted & Certified</h3>
              <p className="text-tegasi-gray leading-relaxed">
                CAC registered company with trained installers and proven track record across Rivers State.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-tegasi-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-tegasi-navy mb-3 font-poppins">Local Response</h3>
              <p className="text-tegasi-gray leading-relaxed">
                Quick local service and support in Rivers State with fast emergency response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tegasi-navy font-poppins mb-4">
              Our Security Services
            </h2>
            <p className="text-tegasi-gray text-lg max-w-2xl mx-auto">
              Professional installation and maintenance of security systems for homes and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-tegasi-navy mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-tegasi-gray text-sm mb-3">
                    {service.description}
                  </p>
                  <p className="text-sm text-green-600 font-medium mb-4">
                    {service.benefit}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/services">
                      Learn More
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tegasi-navy font-poppins mb-4">
              Our Recent Work
            </h2>
            <p className="text-tegasi-gray text-lg">
              See our professional installations across Port Harcourt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA Band */}
      <section className="bg-whatsapp-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Get a Free Site Check
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            WhatsApp us now for a fast quote and free security assessment of your property
          </p>
          <div className="space-y-4">
            <Button asChild variant="secondary" size="xl" className="bg-white text-whatsapp-green hover:bg-gray-100">
              <a 
                href="https://wa.me/2347037581741?text=Hello, I need a free site check and security quote"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp for Fast Quote
              </a>
            </Button>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-green-100">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 703 758 1741</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-green-300 rounded-full"></div>
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-tegasi-navy font-poppins mb-6">
                Contact Us Today
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-tegasi-navy mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+2347037581741"
                      className="flex items-center space-x-3 text-tegasi-gray hover:text-tegasi-navy transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+234 703 758 1741</span>
                    </a>
                    <a 
                      href="https://wa.me/2347037581741"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-whatsapp-green hover:text-green-600 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="mailto:tegasienterprises@gmail.com"
                      className="flex items-center space-x-3 text-tegasi-gray hover:text-tegasi-navy transition-colors"
                    >
                      <span>tegasienterprises@gmail.com</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-tegasi-navy mb-2">Visit Our Office</h3>
                  <p className="text-tegasi-gray">
                    Shop 5 Alphamic Plaza, Beside Bobby Filling Station,<br />
                    Mgbuoba, Port Harcourt, Rivers State
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-sm text-tegasi-gray">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Registered company — CAC No: 2013311</span>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Shield, 
  Zap, 
  Lock, 
  CheckCircle, 
  MessageCircle,
  Clock,
  Award,
  Users
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const Services = () => {
  const services = [
    {
      title: "CCTV Camera Installation",
      icon: <Camera className="h-8 w-8 text-tegasi-navy" />,
      benefits: [
        "Deter theft and crime",
        "Record incidents for evidence", 
        "Remote viewing on your phone"
      ],
      workflow: "Site survey → Camera placement plan → Install → Test and training",
      image: "/lovable-uploads/34e746bd-fa8f-4c66-a8a6-dff36243a852.png",
      whatsappText: "Hello, I need a quote for CCTV camera installation"
    },
    {
      title: "Access Control & Hotel Locks",
      icon: <Lock className="h-8 w-8 text-tegasi-navy" />,
      benefits: [
        "Controlled entry access",
        "Easy guest access management",
        "Complete audit logs"
      ],
      workflow: "Site design → Install equipment → Programming and testing",
      image: "/lovable-uploads/51890e12-a489-47ba-8b00-66c62eb5dbe9.png",
      whatsappText: "Hello, I need a quote for access control and hotel locks"
    },
    {
      title: "Intruder & Fire Alarm Systems", 
      icon: <Shield className="h-8 w-8 text-tegasi-navy" />,
      benefits: [
        "Instant security alerts",
        "Faster emergency response",
        "24/7 protection monitoring"
      ],
      workflow: "Sensors and panel setup → Configuration → Testing and training",
      image: "/lovable-uploads/961e7147-0422-42a5-8d99-5bc4268fc1cb.png",
      whatsappText: "Hello, I need a quote for alarm systems"
    },
    {
      title: "Perimeter Security / Electric Fence",
      icon: <Zap className="h-8 w-8 text-tegasi-navy" />,
      benefits: [
        "Perimeter protection barrier",
        "Deterrent and detection",
        "Integrated alarm system"
      ],
      workflow: "Perimeter survey → Installation → Testing and commissioning",
      image: "/lovable-uploads/e12c7dde-8b27-456d-9d89-ad5543efa5b9.png",
      whatsappText: "Hello, I need a quote for electric fence installation"
    }
  ];

  const testimonials = [
    {
      quote: "Tegasi installed CCTV for our shop — we saw fewer thefts and better security.",
      author: "Mrs. Obi",
      location: "Port Harcourt",
      image: "/lovable-uploads/04f19aee-2c4d-4894-83a5-8dafb0164279.png"
    },
    {
      quote: "Professional installation of our hotel access control. Guests love the convenience.",
      author: "Mr. Chinedu",
      location: "GRA, Port Harcourt"
    },
    {
      quote: "Fast response and quality work. Our office is now properly secured.",
      author: "Grace Enterprises",
      location: "Port Harcourt"
    }
  ];

  return (
    <>

      <div className="min-h-screen bg-background font-inter">
        <Header />

        <Hero
          backgroundImage="/lovable-uploads/34e746bd-fa8f-4c66-a8a6-dff36243a852.png"
          title="Our Security Services"
          subtitle="Professional security installations and maintenance for homes and businesses across Port Harcourt and Rivers State."
          primaryCta={{
            label: "WhatsApp for Quote",
            href: "https://wa.me/2347037581741?text=Hello, I need a quote for security services"
          }}
          secondaryCta={{
            label: "Request Form",
            href: "#request-quote"
          }}
        />

        {/* Service Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-2xl font-bold text-tegasi-navy ml-3 font-poppins">
                        {service.title}
                      </h2>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-semibold text-tegasi-navy">Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-tegasi-gray">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-tegasi-navy mb-2">How we do it:</h3>
                      <p className="text-tegasi-gray">{service.workflow}</p>
                    </div>

                    <Button asChild variant="whatsapp">
                      <a 
                        href={`https://wa.me/2347037581741?text=${encodeURIComponent(service.whatsappText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Request Quote
                      </a>
                    </Button>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img 
                      src={service.image}
                      alt={`${service.title} - Professional installation by Tegasi Security`}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tegasi-navy font-poppins mb-4">
                What Our Clients Say
              </h2>
              <p className="text-tegasi-gray text-lg">
                Real feedback from satisfied customers across Port Harcourt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image}
                        alt="Client testimonial"
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                    <blockquote className="text-tegasi-gray mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-tegasi-navy">{testimonial.author}</div>
                      <div className="text-tegasi-gray">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Warranty */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-tegasi-navy font-poppins mb-4">
                Certified & Trusted
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-tegasi-navy mb-4" />
                <h3 className="font-semibold text-tegasi-navy mb-2">CAC Registered</h3>
                <p className="text-tegasi-gray text-sm">Officially registered company - CAC No: 2013311</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-tegasi-navy mb-4" />
                <h3 className="font-semibold text-tegasi-navy mb-2">Trained Installers</h3>
                <p className="text-tegasi-gray text-sm">Certified and experienced technicians</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-tegasi-navy mb-4" />
                <h3 className="font-semibold text-tegasi-navy mb-2">12-Month Warranty</h3>
                <p className="text-tegasi-gray text-sm">Full installation warranty included</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-tegasi-navy mb-4" />
                <h3 className="font-semibold text-tegasi-navy mb-2">Local Support</h3>
                <p className="text-tegasi-gray text-sm">Fast response in Rivers State</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <img 
                src="/lovable-uploads/86c577e7-49f9-49a5-a80e-d6a584f61a1f.png"
                alt="CAC Certificate - Tegasi Security Technologies Limited"
                className="w-40 h-auto mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-tegasi-gray mt-2">CAC Registration Certificate</p>
            </div>
          </div>
        </section>

        {/* Request Quote Form */}
        <section className="py-16 bg-gray-50" id="request-quote">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-tegasi-navy font-poppins mb-4">
                  Request Your Quote
                </h2>
                <p className="text-tegasi-gray text-lg">
                  Get a customized security solution for your needs
                </p>
              </div>
              <ContactForm 
                title="Tell us about your security needs"
                buttonText="Send Request"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
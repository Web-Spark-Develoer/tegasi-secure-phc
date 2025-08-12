import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  showServices?: boolean;
  buttonText?: string;
}

const ContactForm = ({ 
  title = "Get Your Free Quote", 
  showServices = true,
  buttonText = "Send Request"
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would normally send to your backend
      // For now, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Sent Successfully!",
        description: "We'll contact you within 24 hours to discuss your security needs.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        location: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-tegasi-navy mb-6 font-poppins">{title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+234 xxx xxx xxxx"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="location">Location *</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Port Harcourt area or address"
            className="mt-1"
          />
        </div>

        {showServices && (
          <div>
            <Label htmlFor="service">Service Needed</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tegasi-navy focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option value="cctv">CCTV Camera Installation</option>
              <option value="access-control">Access Control & Hotel Locks</option>
              <option value="alarm">Intruder & Fire Alarm Systems</option>
              <option value="electric-fence">Electric Fence Installation</option>
              <option value="maintenance">Maintenance & Support</option>
              <option value="consultation">Security Consultation</option>
            </select>
          </div>
        )}

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your security needs..."
            className="mt-1"
            rows={4}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? "Sending..." : buttonText}
          </Button>
          
          <Button asChild variant="whatsapp" className="flex-1">
            <a 
              href={`https://wa.me/2347037581741?text=Hello, I'm ${formData.name || '[Name]'} from ${formData.location || '[Location]'}. I need a quote for ${formData.service || 'security services'}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Now
            </a>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
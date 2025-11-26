import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">RIITS Child Development Centre</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Helping children of all abilities reach their fullest potential through evidence-based care and education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/step-school" className="hover:text-secondary transition-colors">STEP School</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/team" className="hover:text-secondary transition-colors">Our Team</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/speech-therapy" className="hover:text-secondary transition-colors">Speech Therapy</Link></li>
              <li><Link to="/services/occupational-therapy" className="hover:text-secondary transition-colors">Occupational Therapy</Link></li>
              <li><Link to="/services/behaviour-therapy" className="hover:text-secondary transition-colors">Behaviour Therapy</Link></li>
              <li><Link to="/services/aba-therapy" className="hover:text-secondary transition-colors">ABA Therapy</Link></li>
              <li><Link to="/services/special-education" className="hover:text-secondary transition-colors">Special Education</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Puliyathumukku, Ayathil, Kollam</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:9744170109" className="hover:text-secondary transition-colors">9744170109</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} RIITS Child Development Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
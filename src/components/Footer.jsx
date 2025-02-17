import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

function FooterLink({ to, children }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-600 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold text-gray-800">HealthCare</span>
            </div>
            <p className="text-gray-600">Making healthcare accessible to everyone, everywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <FooterLink to="/find-doctors">Find Doctors</FooterLink>
              <FooterLink to="/video-consultations">Video Consultations</FooterLink>
              <FooterLink to="/lab-tests">Lab Tests</FooterLink>
              <FooterLink to="/health-records">Health Records</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/press">Press</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
              <FooterLink to="/hipaa">HIPAA Compliance</FooterLink>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-gray-600">
          <p>&copy; 2025 Integrated Healthcare Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
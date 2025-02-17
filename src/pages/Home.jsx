import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search,
  Home as HomeIcon,
  Video,
  FlaskRound as Flask,
  UserCircle,
  MessageSquare,
  Shield,
  Leaf,
  DollarSign
} from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/30 to-white pt-16">
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Complete <span className="text-primary">Healthcare</span> Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access quality healthcare from anywhere. Book appointments, consult doctors online,
                and manage your health records all in one place.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  to="/signup"
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare professionals"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Healthcare Features</h2>
          <p className="text-xl text-gray-600">Experience healthcare like never before with our integrated platform designed for your convenience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={Search}
            title="Find Doctors"
            description="Search and filter doctors by specialization, experience, and patient reviews"
          />
          <FeatureCard
            icon={HomeIcon}
            title="Home Visits"
            description="Book home visits from qualified healthcare professionals"
          />
          <FeatureCard
            icon={Video}
            title="Video Consultations"
            description="Connect with doctors remotely through secure video calls"
          />
          <FeatureCard
            icon={Flask}
            title="Lab Tests"
            description="Schedule lab tests and receive digital reports"
          />
          <FeatureCard
            icon={UserCircle}
            title="Health Profiles"
            description="Maintain digital health records and track your progress"
          />
          <FeatureCard
            icon={MessageSquare}
            title="24/7 Support"
            description="Access chat support for follow-ups and queries"
          />
        </div>
      </section>

      <section id="benefits" className="bg-gradient-custom text-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making Healthcare Better</h2>
            <p className="text-xl opacity-90">Transforming healthcare delivery for a sustainable and accessible future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center bg-white/80 backdrop-blur-lg rounded-xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg">
              <Leaf className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Sustainable</h3>
              <p className="opacity-90">Reducing paper waste and transportation emissions through digital solutions</p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-lg rounded-xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg">
              <Shield className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Accessible</h3>
              <p className="opacity-90">Healthcare available to everyone, anywhere, at any time</p>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-lg rounded-xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg">
              <DollarSign className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">Cost-Effective</h3>
              <p className="opacity-90">Reducing healthcare costs while improving quality of care</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Healthcare Experience?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who have already discovered the convenience of integrated healthcare.
          </p>
          <Link
            to="/signup"
            className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}
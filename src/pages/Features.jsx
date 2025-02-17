import React from 'react';
import { 
  Brain, 
  User, 
  Video, 
  Trophy, 
  Shield,
  ArrowRight,
  Activity,
  Sparkles,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ icon: Icon, title, description, gradient }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 ${gradient}`} />
      <div className="relative z-10">
        <div className={`h-16 w-16 rounded-xl flex items-center justify-center mb-6 ${gradient}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <Link 
          to="#" 
          className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-b from-primary-light/30 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of Healthcare is <span className="text-primary">Here</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience revolutionary healthcare features powered by cutting-edge technology,
              designed to transform your wellness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Health Dashboard"
              description="Get personalized health insights and AI-driven recommendations in real-time. Track your progress and receive smart alerts for better health management."
              gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
            />
            <FeatureCard
              icon={User}
              title="Digital Twin Integration"
              description="Interact with your AI health avatar to visualize and prevent potential health risks. Make informed decisions based on predictive analytics."
              gradient="bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={Video}
              title="Holographic Consultations"
              description="Experience immersive 3D virtual doctor visits. Connect with healthcare providers in a futuristic environment for better diagnosis and treatment."
              gradient="bg-gradient-to-r from-green-500 to-emerald-500"
            />
            <FeatureCard
              icon={Trophy}
              title="Gamified Health & Rewards"
              description="Earn Health Coins for maintaining healthy habits. Complete challenges, track workouts, and redeem rewards for exclusive healthcare services."
              gradient="bg-gradient-to-r from-orange-500 to-amber-500"
            />
            <FeatureCard
              icon={Shield}
              title="Privacy-Focused Health Vault"
              description="Secure your medical records with blockchain technology. Maintain complete control over your health data with military-grade encryption."
              gradient="bg-gradient-to-r from-red-500 to-rose-500"
            />
            <FeatureCard
              icon={Activity}
              title="Real-Time Health Monitoring"
              description="Connect your wearables and medical devices for continuous health tracking. Receive instant alerts and share data with your healthcare team."
              gradient="bg-gradient-to-r from-violet-500 to-purple-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600">
              Experience healthcare reimagined with cutting-edge technology and user-centric design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Smart Technology</h3>
              <p className="text-gray-600">
                Leverage AI and machine learning for personalized healthcare recommendations
                and predictive analytics that help you stay ahead of potential health issues.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Lock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Uncompromised Security</h3>
              <p className="text-gray-600">
                Your health data is protected by military-grade encryption and blockchain
                technology, ensuring complete privacy and control over your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-custom rounded-2xl shadow-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Future of Healthcare?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who are already benefiting from our advanced healthcare platform.
            </p>
            <Link
              to="/signup"
              className="bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
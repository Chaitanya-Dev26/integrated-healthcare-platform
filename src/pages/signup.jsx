import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Mail, Lock, User, Calendar, FileText, AlertCircle } from 'lucide-react';

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    insuranceProvider: '',
    medicalTerms: '',
    policyNumber: '',
    agreeTerms: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!formData.name || !formData.email || !formData.password || !formData.age || !formData.insuranceProvider || !formData.policyNumber || !formData.agreeTerms) {
        throw new Error('Please fill in all required fields and accept terms');
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/30 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center">
            <Activity className="h-12 w-12 text-primary" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Create an Account</h2>
          <p className="mt-2 text-gray-600">Sign up to access your healthcare dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <InputField icon={User} label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
            <InputField icon={Mail} label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            <InputField icon={Lock} label="Password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
            <InputField icon={Calendar} label="Age" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
            <DropdownField label="Insurance Provider" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} options={["Provider A", "Provider B", "Provider C"]} />
            <InputField icon={FileText} label="Insurance Policy Number" name="policyNumber" type="text" value={formData.policyNumber} onChange={handleChange} placeholder="Enter policy number" />
            <InputField icon={FileText} label="Initial Medical Terms" name="medicalTerms" type="text" value={formData.medicalTerms} onChange={handleChange} placeholder="Specify medical conditions (optional)" />
          </div>

          <div className="flex items-center">
            <input id="agreeTerms" name="agreeTerms" type="checkbox" checked={formData.agreeTerms} onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer" />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700 cursor-pointer">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account? <Link to="/signin" className="font-medium text-primary hover:text-primary-light">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ icon: Icon, label, name, type, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input id={name} name={name} type={type} value={value} onChange={onChange} required className="appearance-none block w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder={placeholder} />
    </div>
  </div>
);

const DropdownField = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select id={name} name={name} value={value} onChange={onChange} required className="block w-full py-3 px-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
      <option value="" disabled>Select your provider</option>
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

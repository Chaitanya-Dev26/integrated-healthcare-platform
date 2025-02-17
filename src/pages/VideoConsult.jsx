import React, { useState } from 'react';
import { Search, Video, Clock, Calendar, Star, FileText, CreditCard, MessageSquare } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "General Physician",
    experience: 12,
    rating: 4.8,
    reviews: 1240,
    fee: 599,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    languages: ["English", "Hindi", "Marathi"],
    nextAvailable: "Available in 5 mins",
    isOnline: true
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatologist",
    experience: 15,
    rating: 4.9,
    reviews: 890,
    fee: 799,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    languages: ["English", "Hindi", "Bengali"],
    nextAvailable: "Available in 15 mins",
    isOnline: true
  },
  {
    id: 3,
    name: "Dr. Anjali Desai",
    specialization: "Pediatrician",
    experience: 10,
    rating: 4.7,
    reviews: 650,
    fee: 699,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    languages: ["English", "Hindi", "Gujarati"],
    nextAvailable: "Next slot at 4:30 PM",
    isOnline: false
  }
];

const VideoConsult = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const commonSymptoms = [
    "Fever & Cold",
    "Cough",
    "Headache",
    "Skin Problems",
    "Depression",
    "Stomach Pain",
    "Joint Pain",
    "Diabetes"
  ];

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConsultNow = (doctorId) => {
    alert(`Starting consultation with doctor ID: ${doctorId}`);
    // In a real app, this would initiate the video call
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-blue-600 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Online Doctor Consultation</h1>
          <p className="text-xl mb-6">Connect with India's top doctors via secure video consultation</p>
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors by name or specialization"
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Common Symptoms */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Common Symptoms</h2>
          <div className="flex flex-wrap gap-3">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() => setSelectedSymptom(symptom)}
                className={`px-4 py-2 rounded-full ${
                  selectedSymptom === symptom
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border transition-colors`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        {/* Consultation Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: FileText,
              title: "Share Symptoms",
              description: "Tell us about your health concern"
            },
            {
              icon: Video,
              title: "Video Consultation",
              description: "Connect with doctor via secure video call"
            },
            {
              icon: CreditCard,
              title: "Instant Prescription",
              description: "Get digital prescription and medicine delivery"
            }
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <step.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Doctor Info */}
                <div className="flex gap-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                      {doctor.isOnline && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          Online
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                      <span className="text-gray-600 text-sm">({doctor.reviews} consultations)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                      <MessageSquare className="h-4 w-4" />
                      <span>{doctor.languages.join(", ")}</span>
                    </div>
                  </div>
                </div>

                {/* Consultation Info */}
                <div className="md:ml-auto flex flex-col md:items-end gap-2">
                  <div className="text-gray-600">
                    <span className="font-medium">{doctor.experience}+ years</span> experience
                  </div>
                  <div className="text-gray-900 font-semibold">
                    ₹{doctor.fee} per consultation
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">{doctor.nextAvailable}</span>
                  </div>
                  <button
                    onClick={() => handleConsultNow(doctor.id)}
                    className="mt-2 flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Video className="h-4 w-4" />
                    Consult Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No doctors found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoConsult;

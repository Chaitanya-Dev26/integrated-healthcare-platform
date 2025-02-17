import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, Clock, Filter } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: 15,
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    reviews: 428,
    fee: 1000,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    availability: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialization: "Dermatologist",
    experience: 12,
    location: "Delhi, NCR",
    rating: 4.7,
    reviews: 356,
    fee: 800,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    availability: ["9:00 AM", "11:30 AM", "3:00 PM", "5:00 PM"]
  }
];

const FindDoctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialization = selectedSpecialization === "All Specializations" ||
                                  doctor.specialization === selectedSpecialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, specializations, or locations"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h3 className="font-semibold mb-2">Specialization</h3>
              <select
                className="w-full p-2 rounded-lg border border-gray-300"
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
              >
                <option value="All Specializations">All Specializations</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-lg object-cover" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                  <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                  <div className="flex items-center gap-1 text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No doctors found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctors;

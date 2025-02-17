import React from 'react';
import { Calendar, Clock, FileText, Activity, MessageSquare, FlaskRound as Flask, Bell, Settings, ChevronRight, Video } from 'lucide-react';

function MetricCard({ metric }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-600">{metric.name}</h3>
        <Activity className="h-5 w-5 text-primary" />
      </div>
      <p className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</p>
      <p className="text-sm text-gray-500">{metric.date}</p>
    </div>
  );
}

function AppointmentCard({ appointment }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">{appointment.doctor}</h3>
          <p className="text-sm text-gray-500">{appointment.specialty}</p>
        </div>
        {appointment.type === 'video' ? (
          <div className="bg-blue-100 p-2 rounded-lg">
            <Video className="h-5 w-5 text-blue-600" />
          </div>
        ) : (
          <div className="bg-green-100 p-2 rounded-lg">
            <Calendar className="h-5 w-5 text-green-600" />
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{appointment.date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{appointment.time}</span>
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiologist",
      date: "Today",
      time: "14:30",
      type: "video"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "General Physician",
      date: "Tomorrow",
      time: "10:15",
      type: "in-person"
    }
  ];

  const healthMetrics = [
    {
      id: 1,
      name: "Blood Pressure",
      value: "120/80",
      trend: "stable",
      date: "Last checked 2 days ago"
    },
    {
      id: 2,
      name: "Heart Rate",
      value: "72 bpm",
      trend: "down",
      date: "Last checked 1 day ago"
    },
    {
      id: 3,
      name: "Blood Sugar",
      value: "95 mg/dL",
      trend: "up",
      date: "Last checked today"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold text-gray-800">HealthDash</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, John</h1>
          <p className="text-gray-600">Here's your health overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <span className="ml-3 font-medium text-gray-800">New Consultation</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-3 font-medium text-gray-800">Book Appointment</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Flask className="h-6 w-6 text-purple-600" />
              </div>
              <span className="ml-3 font-medium text-gray-800">Lab Tests</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <span className="ml-3 font-medium text-gray-800">Health Records</span>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {healthMetrics.map(metric => (
              <MetricCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h2>
            <button className="text-primary hover:text-primary-light font-medium">View all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-800">Lab results uploaded</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800">Message from Dr. Wilson</p>
                  <p className="text-sm text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
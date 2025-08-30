import React from 'react';
import eventData from './data.json';
import Navbar from '../components/Navbar';
import GalleryCarousel from '../components/GalleryCarousel';

const allEvents = eventData.events || [];
const upcomingEvents = allEvents.filter(e => e.status && e.status.toLowerCase() === 'upcoming');
const pastEvents = allEvents.filter(e => e.status && e.status.toLowerCase() === 'closed');

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center mt-16">
        <h1 className="text-6xl font-bold mb-8 text-yellow-400">Events</h1>
        <section className="w-full max-w-4xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col">
                {/* Main event photo */}
                {event.image && (
                  <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-1">{event.date} &bull; {event.location}</p>
                  <p className="text-green-400 mb-2">{event.status}</p>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {/* Additional event photos */}
                  {event.photos && event.photos.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {event.photos.map((photo, i) => (
                        <img key={i} src={photo} alt={`Event photo ${i+1}`} className="w-20 h-20 object-cover rounded-md border border-gray-700" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col">
                {/* Main event photo */}
                {event.image && (
                  <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-1">{event.date} &bull; {event.location}</p>
                  <p className="text-red-600 mb-2">{event.status}</p>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {/* Additional event photos */}
                  {event.photos && event.photos.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {event.photos.map((photo, i) => (
                        <img key={i} src={photo} alt={`Event photo ${i+1}`} className="w-20 h-20 object-cover rounded-md border border-gray-700" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <GalleryCarousel />
      </main>
    </>
  );
}

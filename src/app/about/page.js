import ThemedBackground from "../../components/ThemedBackground";
import eventsData from "../../data/events.json";
import { Rocket, Users, Lightbulb, Target, Award, Globe } from "lucide-react";

export default function About() {

  // Build timeline from events.json (chronological: oldest -> newest)
  const parseDateFromString = (dstr) => {
    if (!dstr) return new Date(0);
    const first = dstr.split(",")[0].trim();
    const parsed = Date.parse(first);
    if (!isNaN(parsed)) return new Date(parsed);
    // fallback: try to parse common formats
    try {
      return new Date(first);
    } catch (e) {
      return new Date(0);
    }
  };

  const timelineEvents = (eventsData?.events || [])
    .map((ev) => ({ ...ev, _date: parseDateFromString(ev.date) }))
    .sort((a, b) => a._date - b._date);

 

  return (
    <ThemedBackground>
      <div className="min-h-screen pt-20">

        {/* Journey Timeline */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Key milestones in our evolution
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {timelineEvents.map((ev, index) => (
                    <div
                      key={ev.id ?? index}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      } gap-8`}
                    >
                      <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            {ev.date && ev.date.includes(',')
                              ? ev.date
                              : ev._date && ev._date.getFullYear
                              ? ev._date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                              : ev.date}
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {ev.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {ev.description || ev.report || "Event details available."}
                          </p>
                          <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                            {ev.date}
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center shadow-lg">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ThemedBackground>
  );
}
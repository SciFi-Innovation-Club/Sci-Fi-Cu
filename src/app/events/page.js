import ThemedBackground from "../../components/ThemedBackground";
import eventsData from "../../data/events.json";
import { Calendar, Clock, MapPin, Tag, Users } from "lucide-react";

function statusStyles(status) {
  switch (status) {
    case "upcoming":
      return "bg-green-100 text-green-800 border-green-200";
    case "ongoing":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "completed":
      return "bg-gray-100 text-gray-800 border-gray-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
}

function categoryColor(category) {
  const map = {
    workshop: "bg-purple-500",
    seminar: "bg-blue-500",
    hackathon: "bg-orange-500",
    expo: "bg-pink-500",
    competition: "bg-red-500",
    project: "bg-emerald-500",
    discussion: "bg-indigo-500",
  };
  return map[category] || "bg-gray-500";
}

function formatDate(dateString) {
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return dateString;
  }
}

export default function EventsPage() {
  const events = eventsData?.events || [];

  return (
    <ThemedBackground>
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Events</h1>
            <p className="text-gray-300 mt-3 max-w-2xl mx-auto">Browse upcoming and past events. Click an event to register or learn more.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((ev) => (
             
                 <article
  key={ev.id}
  className="
    relative flex flex-col h-full 
    bg-black/40 backdrop-blur-xl 
    rounded-2xl overflow-hidden 
    shadow-xl border border-white/10 
    hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]
    transition-all duration-300 ease-out group
  "
>
  <div className="flex">
    {/* Left Accent Stripe */}
    <div
      className={`
        ${categoryColor(ev.category)} 
        w-2 rounded-l-xl
        transition-all duration-300 
        group-hover:w-3 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.45)]
      `}
    />

    {/* Main Content */}
    <div className="p-6 flex-1 flex flex-col">
      
      {/* TITLE */}
      <h3 className="
        text-2xl font-bold text-white mb-2 
        transition-all duration-300 group-hover:text-blue-200
      ">
        {ev.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="
        text-gray-300 text-sm mb-4 line-clamp-3 
        transition-opacity duration-300 group-hover:opacity-90
      ">
        {ev.description}
      </p>

      {/* STATUS + CATEGORY BADGES */}
      <div className="flex gap-3 mb-4">
        <span
          className={`
            px-3 py-1 rounded-full text-xs font-semibold border 
            ${statusStyles(ev.status)}
          `}
        >
          {ev.status}
        </span>

        <span
          className={`
            px-3 py-1 rounded-full text-xs font-semibold text-white 
            ${categoryColor(ev.category)}
          `}
        >
          {ev.category}
        </span>
      </div>

      {/* DETAILS: DATE / TIME / VENUE */}
      <div className="space-y-2 text-sm text-gray-200">

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-300" />
          {formatDate(ev.date)}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-300" />
          {ev.time}
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-300" />
          {ev.location}
        </div>
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 my-4">
        {ev.tags?.map((t, i) => (
          <span
            key={i}
            className="
              inline-flex items-center gap-1 px-3 py-1 
              bg-white/5 border border-white/10 
              rounded-full text-xs text-gray-200 
              shadow-sm backdrop-blur-sm
            "
          >
            <Tag className="w-3 h-3 text-blue-300" /> {t}
          </span>
        ))}
      </div>

      {/* FOOTER BUTTON */}
      <div className="mt-auto pt-4">
        {ev.status === "completed" ? (
          <span className="
            px-4 py-2 rounded-full bg-gray-700 
            text-white font-semibold 
            shadow-md hover:shadow-lg hover:bg-gray-600 
            transition-all duration-300
          ">
            Completed
          </span>
        ) : ev.status === "upcoming" ? (
          <a
            href={ev.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center px-4 py-2 rounded-full font-semibold
              bg-gradient-to-r from-blue-500 to-blue-400 text-white
              shadow-md hover:opacity-90 hover:shadow-lg transition-all
            "
          >
            Register
          </a>
        ) : (
          <span className="
            px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow
          ">
            Live
          </span>
        )}
      </div>

    </div>
  </div>
</article>






            ))}
          </div>
        </div>
      </div>
    </ThemedBackground>
  );
}


import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import teamData from "./data.json";

export default function TeamPage() {
  // Priority order for roles
  const rolePriority = [
    "Faculty Advisor",
    "Faculty Co Advisor",
    "Secretary",
    "Joint Secretary"
  ];

  // Sort members by role priority, then others (team leads) at the end
  const teamMembers = [...teamData.members].sort((a, b) => {
    const aIdx = rolePriority.findIndex(role => a.role.toLowerCase() === role.toLowerCase());
    const bIdx = rolePriority.findIndex(role => b.role.toLowerCase() === role.toLowerCase());
    if (aIdx === -1 && bIdx === -1) return 0; // both are team leads or other
    if (aIdx === -1) return 1; // a is team lead, b is priority
    if (bIdx === -1) return -1; // b is team lead, a is priority
    return aIdx - bIdx;
  });
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold mb-8 text-yellow-500">Our Team</h1>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-32">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </section>
      </main>
    </>
  );
}

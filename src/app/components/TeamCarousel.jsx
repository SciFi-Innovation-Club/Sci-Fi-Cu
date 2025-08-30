"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import teamData from "../team/data.json";

export default function TeamCarousel() {
  // Use the same priority sorting as team page
  const rolePriority = [
    "Faculty Advisor",
    "Faculty Co Advisor",
    "Secretary",
    "Joint Secretary"
  ];
  const teamMembers = [...teamData.members].sort((a, b) => {
    const aIdx = rolePriority.findIndex(role => a.role.toLowerCase() === role.toLowerCase());
    const bIdx = rolePriority.findIndex(role => b.role.toLowerCase() === role.toLowerCase());
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });

  const [current, setCurrent] = useState(0);
  const total = teamMembers.length;

  // Responsive number of cards
  const [cardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setCardsToShow(3); // desktop
      else if (window.innerWidth >= 768) setCardsToShow(2); // tablet
      else setCardsToShow(1); // mobile
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + cardsToShow) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total, cardsToShow]);

  const prevMember = () => setCurrent((current - cardsToShow + total) % total);
  const nextMember = () => setCurrent((current + cardsToShow) % total);

  // Get the slice of members to show
  const visibleMembers = Array(cardsToShow).fill(0).map((_, i) => teamMembers[(current + i) % total]);

  return (
  <section className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">Meet the Team</h2>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prevMember}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-400 hover:text-black transition"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="w-full flex items-center justify-center gap-8">
          {visibleMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
        <button
          onClick={nextMember}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-cyan-400 hover:text-black transition"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {teamMembers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-cyan-400" : "bg-gray-600"}`}
            aria-label={`Go to member ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

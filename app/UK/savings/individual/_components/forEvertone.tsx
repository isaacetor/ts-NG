'use client';

import { useState } from 'react';
import Image from 'next/image';
import young_prof from '../../../../../public/young_prof.jpg';

export default function IndividualSavingForEveryone() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: 'Young professionals',
      label: 'Professional',
      title: 'Building your first real savings',
      description:
        'You earn decent money but never see it accumulate. TrybeSave makes saving automatic so your balance grows without effort.',
      image: young_prof,
    },
    {
      id: 'Established',
      label: 'Established',
      title: 'Optimizing your wealth',
      description:
        "You've started your journey but need better tools to organize multiple goals and track spending patterns more effectively.",
      image: young_prof,
    },
    {
      id: 'Students',
      label: 'Student',
      title: 'Starting small, thinking big',
      description:
        'Even small amounts matter. Use round-ups and weekly rules to build a safety net while you focus on your studies.',
      image: young_prof, // Replace with appropriate image
    },
    {
      id: 'Entrepreneurs',
      label: 'Entrepreneur',
      title: 'Managing irregular income',
      description:
        'Save when you earn. Set flexible rules that adapt to your business cash flow and personal goals.',
      image: young_prof, // Replace with appropriate image
    },
    {
      id: 'Immigrants',
      label: 'International',
      title: 'Finances across borders',
      description:
        'Balance your local savings goals with the need to support family back home through a single, clear interface.',
      image: young_prof, // Replace with appropriate image
    },
    {
      id: 'Long-term planners',
      label: 'Planner',
      title: 'Focusing on the horizon',
      description:
        'Dedicated pots for house deposits or retirement help you keep your eyes on the prize for years to come.',
      image: young_prof, // Replace with appropriate image
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            For everyone
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            TrybeSave works for anyone building financial strength. Your
            situation is different, and your tools should be too.
          </p>
        </div>

        {/* Tab Interface Container */}
        <div className="border border-gray-200 rounded-[10px] overflow-hidden  bg-white">
          {/* Tabs Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-100">
            {personas.map((persona, index) => (
              <button
                key={persona.id}
                onClick={() => setActiveTab(index)}
                className={`py-6 px-4 text-sm font-bold transition-all border-r last:border-r-0 border-gray-100 ${
                  activeTab === index
                    ? 'bg-[#FEF5FF] text-black'
                    : 'text-gray-400 hover:text-black hover:bg-[#FEF5FF]/50'
                }`}>
                {persona.id}
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square rounded-[10px] overflow-hidden">
                <Image
                  src={personas[activeTab].image}
                  alt={personas[activeTab].id}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-sm font-bold text-black uppercase tracking-widest opacity-60">
                {personas[activeTab].label}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                {personas[activeTab].title}
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {personas[activeTab].description}
              </p>

              {/* <div className="flex items-center gap-6 pt-4">
                <button className="bg-white border border-gray-200 text-black px-8 py-3 rounded-xl font-bold hover:bg-[#FEF5FF] transition-all">
                  Start
                </button>
                <button className="flex items-center gap-2 font-bold text-black hover:opacity-70 transition-opacity">
                  More
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

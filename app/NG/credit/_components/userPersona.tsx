import Image from 'next/image';
import { Home, PiggyBank, Users } from 'lucide-react';

const UserPersonas = () => {
  const personas = [
    {
      category: 'Work',
      title: 'Salary earners',
      description:
        'Stable income makes responsible borrowing possible and predictable.',
      image: '/credit/salary.png',
      //   icon: <Briefcase className="w-6 h-6 text-[#0A0A0A]" />,
    },
    {
      category: 'Growth',
      title: 'Young professionals',
      description:
        'Build credit early and establish strong financial foundations for your future.',
      icon: <Home className="w-8 h-8 text-[#0A0A0A]" />,
    },
    {
      category: 'Commerce',
      title: 'Small business owners',
      description:
        'Access credit without the stress of traditional banking requirements and delays.',
      image: '/credit/sme.png',
      //   icon: <ShoppingBag className="w-6 h-6 text-[#0A0A0A]" />,
    },
    {
      category: 'Income',
      title: 'Freelancers',
      description:
        'Variable income tracked through savings shows your true financial capacity.',
      icon: <PiggyBank className="w-8 h-8 text-[#0A0A0A]" />,
    },
    {
      category: 'Business',
      title: 'Entrepreneurs',
      description:
        'Growing businesses need flexible credit that matches your actual financial patterns.',
      image: '/credit/entrepreneurs.png',
      //   icon: <Rocket className="w-6 h-6 text-[#0A0A0A]" />,
    },
    {
      category: 'Inclusion',
      title: 'Everyone else',
      description:
        'If you save responsibly, TrybeSave recognizes your financial discipline.',
      icon: <Users className="w-8 h-8 text-[#0A0A0A]" />,
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-[#0A0A0A] tracking-tight">
            Built for everyday Nigerians
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            TrybeSave credit works for anyone who wants fair access without
            financial stress.
          </p>
        </div>

        {/* CLEAN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Image (optional) */}
              {item.image && (
                <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 space-y-4 flex flex-col">
                <div>{item.icon}</div>

                <div className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0A0A0A] leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPersonas;

import Image, { StaticImageData } from 'next/image';
import grid1 from '../../public/ts_img/grid1.jpg';
import grid2 from '../../public/ts_img/grid2.jpg';
import grid3 from '../../public/ts_img/grid3.jpg';
import grid4 from '../../public/ts_img/grid4.jpg';
import grid5 from '../../public/ts_img/grid5.jpg';
import grid6 from '../../public/ts_img/grid6.jpg';

interface Feature {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  label?: string;
  overlayOpacity?: number;
  extraClass?: string;
}

interface FeatureCardProps extends Feature {}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  subtitle,
  label,
  overlayOpacity = 0.3,
  extraClass = '',
}) => (
  <div
    className={`relative group overflow-hidden rounded-[10px] shadow-sm ${extraClass}`}>
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div
      className="absolute inset-0 p-8 flex flex-col justify-center text-white"
      style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}>
      {label && (
        <span className="text-sm font-bold opacity-80 mb-2">{label}</span>
      )}
      <h3 className="text-3xl font-bold leading-tight">{title}</h3>
      {subtitle && <p className="mt-2 text-sm opacity-90">{subtitle}</p>}
    </div>
  </div>
);

const features: Feature[] = [
  {
    image: grid1,
    title: 'Automatic saving without thinking',
    subtitle: 'Set it once, watch it grow',
    label: 'Save',
    overlayOpacity: 0.3,
    extraClass: 'md:row-span-2',
  },
  {
    image: grid4,
    title: 'Organize your financial goals',
    subtitle: 'Each pot holds a different dream',
    overlayOpacity: 0.2,
  },
  {
    image: grid3,
    title: 'See where your money goes',
    subtitle: 'Spending broken down by category',
    overlayOpacity: 0.2,
  },
  {
    image: grid5,
    title: 'Guidance tailored to your habits',
    subtitle: 'Real advice when you need it',
    label: 'Insights',
    overlayOpacity: 0.3,
    extraClass: 'lg:row-span-2',
  },

  {
    image: grid2,
    title: 'Your financial stability score',
    subtitle: 'Know where you stand financially',
    label: 'Measure',
    overlayOpacity: 0.4,
    extraClass: 'lg:row-span-2',
  },
  {
    image: grid6,
    title: 'Security you can trust',
    subtitle: 'Your money stays in your bank',
    overlayOpacity: 0.4,
  },
];

const IndividualSavingFeatureGrid: React.FC = () => (
  <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
          What you get
        </h2>
        <p className="text-gray-600 text-lg md:text-xl font-medium">
          Everything built to strengthen your finances
        </p>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
          />
        ))}
      </div>
    </div>
  </section>
);

export default IndividualSavingFeatureGrid;

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-primary-text/20 pl-6 pb-8 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-button-bg"></div>
      <div className="mb-2">
        <h3 className="text-2xl font-heading font-bold text-primary-text">{role}</h3>
        <p className="text-lg text-secondary-text font-medium">{company}{location && ` • ${location}`}</p>
        <p className="text-sm text-secondary-text/70">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-2 text-secondary-text">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


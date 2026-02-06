interface ComingSoonProps { // Move to a different file and import
  title: string;
  message: string;
  links?: Array<{ label: string; url: string }>;
  dark?: boolean;
}

export default function ComingSoon({ title, message, links, dark = false }: ComingSoonProps) {
  if (dark) {
    return (
      <div className="border-2 border-dashed border-white/30 rounded-lg p-12 text-center bg-white/5">
        <h3 className="text-3xl font-heading font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white/80 mb-6">{message}</p>
        {links && links.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed border-secondary-text/30 rounded-lg p-12 text-center bg-secondary-text/5">
      <h3 className="text-3xl font-heading font-bold text-primary-text mb-4">{title}</h3>
      <p className="text-lg text-secondary-text mb-6">{message}</p>
      {links && links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text/5 transition-colors font-medium"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


import { ArrowRight } from "lucide-react";

interface CompanyCardProps {
  name: string;
  description: string;
  href: string;
  delay?: string;
}

export default function CompanyCard({
  name,
  description,
  href,
  delay = "0s",
}: CompanyCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-8 md:py-10 animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-secondary transition-colors duration-200">
        {name}
      </h3>

      <p className="text-sm md:text-base text-secondary leading-relaxed mb-6 max-w-xs">
        {description}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
        <span className="group-hover:mr-1 transition-all duration-200">
          Visit
        </span>
        <ArrowRight
          size={16}
          className="transform group-hover:translate-x-1.5 transition-transform duration-200"
        />
      </span>
    </a>
  );
}

import CompanyCard from "./CompanyCard";

const companies = [
  {
    name: "Drífa.is",
    description:
      "Iceland's online destination for tyres. Simple, digital, delivered.",
    href: "https://drifa.is",
  },
  {
    name: "nordr.agency",
    description: "Creative visual storytelling for brands that stand out.",
    href: "https://nordr.agency",
  },
  {
    name: "nordr.tech",
    description: "Automation and artificial intelligence solutions.",
    href: "https://nordr.tech",
  },
];

export default function Subsidiaries() {
  return (
    <section className="px-8 md:px-16 pb-24 md:pb-40">
      {/* Divider */}
      <div
        className="w-full h-px bg-divider mb-16 animate-slide-up"
        style={{ animationDelay: "0.45s" }}
      />

      <p
        className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase text-secondary mb-12 animate-slide-up"
        style={{ animationDelay: "0.5s" }}
      >
        Our Companies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
        {companies.map((company, index) => (
          <div
            key={company.name}
            className={`${
              index < companies.length - 1
                ? "border-b border-divider md:border-b-0 md:border-r md:pr-10"
                : ""
            } ${index > 0 ? "md:pl-10" : ""}`}
          >
            <CompanyCard
              name={company.name}
              description={company.description}
              href={company.href}
              delay={`${0.55 + index * 0.1}s`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

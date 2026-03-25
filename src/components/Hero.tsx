export default function Hero() {
  return (
    <section className="px-8 md:px-16 pt-20 md:pt-32 pb-24 md:pb-40">
      <p
        className="text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase text-secondary mb-8 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        Nordic Group
      </p>

      <h1
        className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight max-w-4xl mb-10 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        Building companies that
        <br className="hidden sm:block" /> shape the future
        <br className="hidden sm:block" /> of the North
      </h1>

      <p
        className="text-base md:text-lg text-secondary leading-relaxed max-w-xl animate-slide-up"
        style={{ animationDelay: "0.35s" }}
      >
        Nordr is an Icelandic holding group. We invest in and build companies
        across technology, creative services, and consumer commerce — united by a
        drive to create lasting value from the North.
      </p>
    </section>
  );
}

import Image from "next/image";

export default function Header() {
  return (
    <header className="px-8 md:px-16 pt-10 pb-6 flex items-center gap-3">
      <Image
        src="/logo-dark.png"
        alt="Nordr"
        width={36}
        height={36}
        className="h-8 w-auto md:h-9"
      />
      <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        Nordr
      </span>
    </header>
  );
}

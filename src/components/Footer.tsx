import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-12 mt-auto">
      <div className="w-full h-px bg-divider mb-8" />
      <div className="flex items-center gap-3">
        <Image
          src="/logo-dark.png"
          alt="Nordr"
          width={24}
          height={24}
          className="h-5 w-auto opacity-40"
        />
        <p className="text-xs text-secondary tracking-wide">
          &copy; {new Date().getFullYear()} Nordr OPS ehf.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 py-12 mt-auto">
      <div className="w-full h-px bg-divider mb-8" />
      <p className="text-xs text-secondary tracking-wide">
        &copy; {new Date().getFullYear()} Nordr
      </p>
    </footer>
  );
}

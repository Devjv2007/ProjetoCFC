import { useEffect, useState } from "react";

type HeaderProps = {
  whatsappNumber: string;
};

export default function Header({ }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        scrolled ? "bg-white backdrop-blur shadow-sm" : "bg-white",
        "transition-[background-color,opacity] duration-200 ease-out"
      ].join(" ")}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-4 relative">
          <div className="flex items-center gap-4">
            <img src="/grupocfc.jpg" alt="CFC Grupo G6" className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CFC Grupo G6</h1>
              <p className="text-sm text-gray-600">Centro de Formação de Condutores</p>
            </div>
          </div>
          <div className="flex-1" />
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="hover:text-blue-700 transition-colors">Serviços</a>
            <a href="#depoimentos" className="hover:text-blue-700 transition-colors">Depoimentos</a>
            <a href="#porque" className="hover:text-blue-700 transition-colors">Porque</a>
            <a href="#contato" className="hover:text-blue-700 transition-colors">Contato</a>
          </nav>
          <div className="hidden md:flex">
        <a
            href={`https://api.whatsapp.com/send/?phone=1532243868&text=Ol%C3%A1%21+Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6.%20Vim%20pelo%20site.&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            WhatsApp
        </a>
          </div>
          <button
            aria-label="Abrir menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
          >
            {open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {open && (
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="fixed inset-0 z-40 bg-black/10 md:hidden"
            />
          )}
          <div
            id="mobile-menu"
            className={[
              "fixed left-0 right-0 top-20 z-50 md:hidden",
              "transform origin-top transition-[opacity,transform] duration-200 ease-out",
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            ].join(" ")}
          >
            <nav className="rounded-b-lg border-t bg-white shadow-lg">
              <ul className="flex flex-col">
                <li><a onClick={() => setOpen(false)} href="#servicos" className="block px-4 py-3 hover:bg-slate-50">Serviços</a></li>
                <li><a onClick={() => setOpen(false)} href="#depoimentos" className="block px-4 py-3 hover:bg-slate-50">Depoimentos</a></li>
                <li><a onClick={() => setOpen(false)} href="#porque" className="block px-4 py-3 hover:bg-slate-50">Porque</a></li>
                <li><a onClick={() => setOpen(false)} href="#contato" className="block px-4 py-3 hover:bg-slate-50">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

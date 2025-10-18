import { useEffect, useState, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

export default function CFCGrupoG6() {
  const whatsappNumber = "5515991047579";
  const whatsappMsg = "Olá! Gostaria de mais informações sobre os cursos e agendamento.";
  const phoneNumber = "5515991047579";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [cursosRef, cursosVisible] = useScrollAnimation();
  const [servicosRef, servicosVisible] = useScrollAnimation();
  const [depoimentosRef, depoimentosVisible] = useScrollAnimation();
  const [porqueRef, porqueVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
              <a href="#cursos" className="hover:text-blue-700 transition-colors">Cursos</a>
              <a href="#servicos" className="hover:text-blue-700 transition-colors">Serviços</a>
              <a href="#depoimentos" className="hover:text-blue-700 transition-colors">Depoimentos</a>
              <a href="#porque" className="hover:text-blue-700 transition-colors">Porque</a>
              <a href="#contato" className="hover:text-blue-700 transition-colors">Contato</a>
            </nav>

            <div className="hidden md:flex">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
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
                <li><a onClick={() => setOpen(false)} href="#cursos" className="block px-4 py-3 hover:bg-slate-50">Cursos</a></li>
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

      <div className="h-20 md:h-[84px]" />
      
      <section id="inicio" className="relative min-h-[640px] md:min-h-[720px] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wp-h.aprovadetran.com.br/aprendendo-a-dirigir-autoescola/')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/25 backdrop-brightness-105" />

        <div className="relative">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs md:text-sm text-blue-100">
                CNH com suporte humano e horários flexíveis
              </div>

              <h1
                className="mt-4 font-extrabold leading-tight tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
              >
                Qualidade e confiança na formação de motoristas
              </h1>

              <p className="mt-4 max-w-2xl text-blue-100 md:text-lg">
                Há 18 anos formando condutores conscientes e preparados em Sorocaba, com credenciamento completo no DETRAN e equipe experiente.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-white">
                <div className="rounded-lg bg-white/10 backdrop-blur-md px-6 py-4">
                  <p className="text-3xl font-extrabold">10.000+</p>
                  <p className="text-sm text-blue-100">Alunos formados</p>
                </div>
                <div className="rounded-lg bg-white/10 backdrop-blur-md px-6 py-4">
                  <p className="text-3xl font-extrabold">18</p>
                  <p className="text-sm text-blue-100">Anos de tradição</p>
                </div>
                <div className="rounded-lg bg-white/10 backdrop-blur-md px-6 py-4">
                  <p className="text-3xl font-extrabold">100%</p>
                  <p className="text-sm text-blue-100">Credenciado DETRAN</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 focus-visible:ring-offset-blue-900"
                >
                  Agendar sua aula
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero saber sobre os cursos do CFC G6.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-900"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <p className="mt-6 text-sm text-blue-100">Endereço: Leopoldo Machado, 40 — Sorocaba/SP</p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={cursosRef}
        id="cursos"
        className={[
          "scroll-mt-24 md:scroll-mt-28 py-16 md:py-20 bg-white transition-all duration-1000",
          cursosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        ].join(" ")}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Nossos 
                <span className="text-3xl md:text-5xl font-extrabold text-blue-700"> Cursos</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Oferecemos cursos completos para todas as categorias de habilitação, com instrutores qualificados e estrutura moderna.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <i className="ri-car-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Primeira Habilitação
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Curso completo para quem vai tirar a CNH pela primeira vez. Categorias A, B ou AB.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Aulas teóricas e práticas
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Material didático incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Horários flexíveis
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <i className="ri-add-circle-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Adição de Categoria
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Adicione uma nova categoria à sua CNH existente. De A para AB ou B para AB.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Processo simplificado
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Aulas práticas focadas
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Acompanhamento personalizado
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <i className="ri-refresh-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Mudança de Categoria
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Troca de categoria C, D ou E para conduzir veículos de maior porte.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Veículos adequados
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Instrutores especializados
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Preparação completa
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <i className="ri-book-open-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Reciclagem
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Curso obrigatório para condutores que tiveram a CNH suspensa ou cassada.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Turmas regulares
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Material atualizado
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Certificado reconhecido
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <i className="ri-file-list-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Renovação de CNH
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Renove sua habilitação vencida ou próxima do vencimento com rapidez e facilidade.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Atendimento ágil
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Agendamento de exames
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Suporte completo
                  </li>
                </ul>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <i className="ri-steering-2-line text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Aulas Avulsas
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Aulas extras de direção para quem já tem habilitação mas quer praticar mais.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Flexibilidade total
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Treino personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-check-line text-green-600" />
                    Recupere a confiança
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={servicosRef}
        id="servicos"
        className={[
          "scroll-mt-24 md:scroll-mt-28 py-20 bg-white transition-all duration-1000",
          servicosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        ].join(" ")}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Nossos <span className="text-blue-700">Serviços</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Soluções completas para cada etapa da sua habilitação, com instrutores qualificados e processos ágeis.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://i0.statig.com.br/bancodeimagens/e6/my/5t/e6my5tacob9ugjede1pv46tu9.jpg"
                    alt="Primeira Habilitação"
                    className="h-full w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                    Primeira Habilitação
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {["Instrutores qualificados","Veículos modernos e seguros","Simulados preparatórios"].map((b)=>(
                      <li key={b} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://acdn-us.mitiendanube.com/stores/002/501/128/products/renovacao-de-cnh-210482e8ea190e6e5017564029857972-480-0.webp"
                    alt="Renovação de CNH"
                    className="h-full w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                    Renovação de CNH
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {["Atualização de normas","Atendimento ágil","Certificado reconhecido"].map((b)=>(
                      <li key={b} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://autoescolaparaty.com.br/wp-content/uploads/2022/07/reciclagem-CNH-EAD.png"
                    alt="Reciclagem CNH"
                    className="h-full w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                    Reciclagem CNH
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {["Aulas dinâmicas","Horários flexíveis","Processo rápido"].map((b)=>(
                      <li key={b} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://opopular.com.br/image/policy:1.1481671:1691089610/image.jpg"
                    alt="Reciclagem Preventiva"
                    className="h-full w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
                    Reciclagem Preventiva
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {["Conteúdo objetivo","Certificado reconhecido","Atendimento humanizado"].map((b)=>(
                      <li key={b} className="flex items-start gap-2">
                        <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={depoimentosRef}
        id="depoimentos"
        className={[
          "scroll-mt-24 md:scroll-mt-28 py-16 md:py-20 transition-all duration-1000",
          depoimentosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        ].join(" ")}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Depoimentos de nossos
                <span className="text-3xl md:text-5xl font-extrabold text-blue-700"> Alunos</span>
              </h2>
              <p className="mt-2 text-slate-600">Experiências de quem já passou por aqui</p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento1.png"
                    alt="Depoimento 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento1.png"
                    alt="Depoimento 2"
                    className="w-full h-auto"
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento1.png"
                    alt="Depoimento 3"
                    className="w-full h-auto"
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento1.png"
                    alt="Depoimento 4"
                    className="w-full h-auto"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={porqueRef}
        id="porque"
        className={[
          "scroll-mt-24 md:scroll-mt-28 py-16 md:py-2 transition-all duration-1000",
          porqueVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        ].join(" ")}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Por Que Escolher o 
              <span className="text-3xl md:text-5xl font-extrabold text-blue-700"> CFC Grupo G6?</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Diferenciais que fazem toda a diferença na sua formação
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-shield-check-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Segurança Garantida
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Veículos modernos com todos os equipamentos de segurança.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-user-star-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Instrutores Qualificados
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Profissionais experientes e credenciados pelo DETRAN.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-time-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Horários Flexíveis
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Aulas nos horários que melhor se adequam à sua rotina.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-thumb-up-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Alta Aprovação
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                95% de aprovação nos exames práticos e teóricos.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-car-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Frota Moderna
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Veículos novos e bem mantidos para seu conforto.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <i className="ri-award-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Tradição e Credibilidade
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                18 anos formando condutores responsáveis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        id="contato"
        className={[
          "scroll-mt-24 md:scroll-mt-28 py-20 relative transition-all duration-1000",
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        ].join(" ")}
      >
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.trisul-sa.com.br/blog/wp-content/uploads/2020/01/transito-em-sao-paulo.jpeg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-700/25 backdrop-brightness-105" />

            <div className="relative z-10 p-8 md:p-14">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Pronto Para Começar Sua Jornada?
                </h2>
                <p className="mt-5 text-base md:text-lg text-blue-100">
                  Entre em contato pelo WhatsApp e tire todas as suas dúvidas; a equipe está pronta para ajudar você a conquistar sua habilitação.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 shadow-lg transition hover:shadow-xl"
                  >
                    Falar no WhatsApp
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Ligar Agora
                  </a>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-100">
                  <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Leopoldo Machado, 40 – Sorocaba/SP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 border-t border-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <img src="/grupocfc.jpg" alt="Logo Grupo G6" className="w-16 h-16 rounded-full shadow" />
            <div>
              <h4 className="font-bold text-lg text-slate-900">CFC Grupo G6</h4>
              <p className="text-sm text-slate-600">Centro de Formação de Condutores</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <i className="ri-time-line text-lg" />
              <span className="text-sm text-slate-600">Segunda a Sexta 8h às 18h</span>
            </div>
            
            <div className="flex space-x-4 flex-shrink-0">
              <a href="https://instagram.com/cfc_g6" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-instagram-line text-2xl text-slate-700" />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Leopoldo+Machado+40+Sorocaba" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-map-pin-line text-2xl text-slate-700" />
              </a>
              <a href="https://wa.me/5515991047579" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-whatsapp-line text-2xl text-slate-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-slate-500">
          © 2025 CFC Grupo G6 — Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

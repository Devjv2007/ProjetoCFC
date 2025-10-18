 import React, { useEffect, useState } from "react";

 
 export default function CFCGrupoG6() {
  const whatsappNumber = "5515991047579";
  const whatsappMsg = "Olá! Gostaria de mais informações sobre os cursos e agendamento.";
  const phoneNumber = "5515991047579";  
  const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [hideOnDown, setHideOnDown] = useState(false);

useEffect(() => {
  let lastY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      setScrolled(y > 12); // ativa estado 'scrolled' mais natural
      const goingDown = y - lastY > 2;      // ignora ruído <= 2px
      const goingUp = lastY - y > 2;

      // histerese: só esconde depois de 140px rolados; só aparece quando sobe 10px
      if (goingDown && y > 140) setHideOnDown(true);
      if (goingUp) setHideOnDown(false);

      lastY = y;
      ticking = false;
    });
    ticking = true;
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    <header
  className={[
    "sticky top-0 z-50",
    "bg-white/90 backdrop-blur",                  // mantém leve blur sempre após rolar
    "shadow-sm",                                  // sombra discreta
    "transition-[transform,background-color,opacity] duration-300 ease-out",
    hideOnDown ? "-translate-y-6 opacity-95" : "translate-y-0 opacity-100", // desloca menos
    scrolled ? "bg-white/90" : "bg-white/100"
  ].join(" ")}
  style={{ willChange: "transform, opacity" }}    // dica de performance
>

  <div className="container mx-auto px-4 py-2">
    <div className="flex items-center gap-4">
      {/* Logo + marca */}
      <div className="flex items-center gap-4">
        <img src="/grupocfc.jpg" alt="CFC Grupo G6" className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CFC Grupo G6</h1>
          <p className="text-sm text-gray-600">Centro de Formação de Condutores</p>
        </div>
      </div>

      {/* Espaço para empurrar nav/cta à direita */}
      <div className="flex-1" />

      {/* Navegação desktop */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#cursos" className="hover:text-blue-700">Cursos</a>
        <a href="#servicos" className="hover:text-blue-700">Serviços</a>
        <a href="#depoimentos" className="hover:text-blue-700">Depoimentos</a>
        <a href="#contato" className="hover:text-blue-700">Contato</a>
      </nav>

      {/* CTA desktop */}
      <div className="hidden md:flex">
        <a
          href="https://wa.me/5515991047579"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          WhatsApp
        </a>
      </div>

      {/* Botão mobile (hambúrguer) */}
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
    </div>

    {/* Menu mobile dropdown */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden origin-top transform transition duration-250 ease-out",
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        ].join(" ")}
        style={{ willChange: "transform, opacity" }}
      >
        <nav
          className={[
            "flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm overflow-hidden",
            open ? "mt-3" : "mt-0"
          ].join(" ")}
        >
      
        <a href="#cursos" className="hover:text-blue-700">Cursos</a>
        <a href="#servicos" className="hover:text-blue-700">Serviços</a>
        <a href="#depoimentos" className="hover:text-blue-700">Depoimentos</a>
        <a href="#contato" className="hover:text-blue-700">Contato</a>
      
        </nav>
      </div>

  </div>
</header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[640px] md:min-h-[720px] overflow-hidden" aria-label="Introdução CFC G6">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-blue-700/80" />

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs md:text-sm text-blue-100">
              CNH com suporte humano e horários flexíveis
            </div>

            <h1 className="mt-4 font-extrabold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}>
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
              <a href="#contato" className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-xl transition hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400 focus-visible:ring-offset-blue-900">
                Agendar sua aula
              </a>
              <a
                href="https://wa.me/5515991047579?text=Olá!%20Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6."
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

        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
      </section>

      {/* Nossos Cursos (sem componente Card) */}
      <section id="cursos" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">Nossos <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-700">Cursos</span></h2>
            <p className="mt-2 md:mt-3 text-slate-600">Oferecemos os melhores cursos para sua formação como condutor</p>
          </div>

          <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7v3a7 7 0 1014 0V9a7 7 0 00-7-7zm0 2a5 5 0 015 5v3a5 5 0 11-10 0V9a5 5 0 015-5z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Primeira Habilitação (CNH)</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">Curso completo para quem deseja tirar a primeira habilitação.</p>
              <ul className="mt-5 space-y-3 text-slate-700">
                {["Aulas teóricas e práticas","Instrutores qualificados","Veículos modernos e seguros","Material didático incluso","Simulados preparatórios"].map((t,i)=>(
                  <li key={i} className="flex items-start gap-2">
                    <svg className="mt-1 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-sm md:text-base">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero mais informações sobre: Primeira Habilitação (CNH).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Solicitar Informações
              </a>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5a7 7 0 017 7v1h1a3 3 0 010 6H4a3 3 0 010-6h1v-1a7 7 0 017-7zm0 2a5 5 0 00-5 5v1h10v-1a5 5 0 00-5-5z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Reciclagem CNH</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">Curso de reciclagem para renovação da carteira de habilitação.</p>
              <ul className="mt-5 space-y-3 text-slate-700">
                {["Atualização das normas de trânsito","Aulas dinâmicas e objetivas","Horários flexíveis","Certificado reconhecido","Processo rápido"].map((t,i)=>(
                  <li key={i} className="flex items-start gap-2">
                    <svg className="mt-1 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    <span className="text-sm md:text-base">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero mais informações sobre: Reciclagem CNH.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Solicitar Informações
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
        Nossos <span className="text-blue-700">Serviços</span>
      </h2>
      <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
        Soluções completas para cada etapa da sua habilitação, com instrutores qualificados e processos ágeis.
      </p>
    </div>

    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
      {/* Serviço 1 */}
      <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://i0.statig.com.br/bancodeimagens/e6/my/5t/e6my5tacob9ugjede1pv46tu9.jpg"
            alt="Primeira Habilitação"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
            Primeira Habilitação
          </h3>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-slate-600">
            Curso completo para CNH A e B, com aulas teóricas e práticas.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Instrutores qualificados
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Veículos modernos e seguros
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Simulados preparatórios
            </li>
          </ul>
        </div>
      </article>

      {/* Serviço 2 */}
      <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://acdn-us.mitiendanube.com/stores/002/501/128/products/renovacao-de-cnh-210482e8ea190e6e5017564029857972-480-0.webp"
            alt="Renovação de CNH"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
            Renovação de CNH
          </h3>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-slate-600">
            Processo rápido, orientação completa e agendamento facilitado.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Atualização de normas
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Atendimento ágil
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Certificado reconhecido
            </li>
          </ul>
        </div>
      </article>

      {/* Serviço 3 */}
      <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://autoescolaparaty.com.br/wp-content/uploads/2022/07/reciclagem-CNH-EAD.png"
            alt="Reciclagem CNH"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
            Reciclagem CNH
          </h3>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-slate-600">
            Para condutores com suspensão: conteúdo objetivo e horários flexíveis.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Aulas dinâmicas
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Horários flexíveis
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Processo rápido
            </li>
          </ul>
        </div>
      </article>

      {/* Serviço 4 */}
      <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="relative h-48">
          <img
            src="https://opopular.com.br/image/policy:1.1481671:1691089610/image.jpg"
            alt="Reciclagem Preventiva"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">
            Reciclagem Preventiva
          </h3>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-slate-600">
            Atualização de conteúdos para dirigir com mais segurança e confiança.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Conteúdo objetivo
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Certificado reconhecido
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Atendimento humanizado
            </li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>
<section id="depoimentos" className="py-16 md:py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
        Depoimentos
      </h2>
      <p className="mt-2 text-slate-600">Experiências reais de quem já passou por aqui</p>
    </div>

    {/* Grid de cards - adicione/remova conforme precisar */}
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {/* Card 1 */}
      <article className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <img
          src="https://www.rbsdirect.com.br/imagesrc/17020968.jpg?format=webp&w=1600&h=1600&a=c"
          className="rounded-lg w-96 h-96"
          />
      </div>
      </article>

      {/* Card 2 */}
      <article className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <img
          src="https://www.rbsdirect.com.br/imagesrc/17020968.jpg?version=1575255600"
          className="rounded-lg w-96 h-96"
          />
      </div>
      </article>

      {/* Card 3 */}
      <article className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-4">
          <img
          src="https://www.rbsdirect.com.br/imagesrc/17020968.jpg?format=webp&w=1600&h=1600&a=c"
          className="rounded-lg w-96 h-96"
          />
      </div>
      </article>
    </div>
  </div>
</section>


      {/* CTA dentro de Contato com hierarquia correta */}
      <section id="contato" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://www.trisul-sa.com.br/blog/wp-content/uploads/2020/01/transito-em-sao-paulo.jpeg')" }} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-600/75 to-blue-500/70" />

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
    </div>
  );
}

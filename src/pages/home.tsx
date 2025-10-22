import useScrollAnimation from "../hooks/useScrollAnimation";

export default function CFCGrupoG6() {
  const [servicosRef, servicosVisible] = useScrollAnimation();
  const [depoimentosRef, depoimentosVisible] = useScrollAnimation();
  const [porqueRef, porqueVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();


  return (
    <div className="min-h-screen bg-white">

      <div className="h-20 md:h-[84px]" />
      
   <section id="inicio" className="relative min-h-[640px] md:min-h-[720px] overflow-hidden">
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/image.png')",
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

        <p className="mt-4 max-w-2xl text-white md:text-lg">
          Há mais de 20 anos formando condutores conscientes e preparados em Sorocaba, com credenciamento completo no DETRAN e equipe experiente.
        </p>


       <div className="mt-8 flex gap-2 text-white flex-nowrap overflow-x-auto no-scrollbar">
        <div className="rounded-lg bg-white/10 backdrop-blur-md px-4 py-4 min-w-[140px] text-center flex-shrink-0">
          <p className="w-[120px] max-w-[120px] min-w-[120px] text-3xl font-extrabold tabular-nums text-center mx-auto">
            1000+
          </p>
          <p className="text-sm text-blue-100">Alunos formados</p>
        </div>
        <div className="rounded-lg bg-white/10 backdrop-blur-md px-3 py-4 min-w-[140px] text-center flex-shrink-0">
          <p className="w-[120px] max-w-[120px] min-w-[120px] text-3xl font-extrabold tabular-nums text-center mx-auto">
            100%
          </p>
          <p className="text-sm text-blue-100">Credenciado DETRAN</p>
        </div>
        <div className="rounded-lg bg-white/10 backdrop-blur-md px-1 py-4 min-w-[140px] text-center flex-shrink-0">
          <p className="w-[120px] max-w-[120px] min-w-[120px] text-3xl font-extrabold tabular-nums text-center mx-auto">
            20+
          </p>
          <p className="text-sm text-blue-100">Anos de tradição</p>
        </div>
      </div>

        <div className="mt-16 flex flex-col items-start gap-4 w-[470px]">
          <a
            href={`https://api.whatsapp.com/send/?phone=1532243868&text=Ol%C3%A1%21+Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6.%20Vim%20pelo%20site.&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-lg border border-white/70 bg-transparent px-12 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-900"
          >
            Falar no WhatsApp
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=Leopoldo+Machado+40+Sorocaba`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center rounded-lg border border-white/70 bg-blue-500 px-12 py-4 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-900"
          >
            Nosso Endereço
          </a>
        </div>
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
                    {["Instrutores qualificados","Material didático e específico","Simulados preparatórios"].map((b)=>(
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
                    src="renovação de cnh.jpg"
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
                    className="w-full h-auto md:h-50 "
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento2.jpg"
                    alt="Depoimento 2"
                    className="w-full h-auto md:h-50"
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento3.jpg"
                    alt="Depoimento 3"
                    className="w-full h-auto md:h-50"
                  />
                </div>
              </article>

              <article className="relative rounded-3xl overflow-hidden shadow-xl  p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="Depoimento4.jpg"
                    alt="Depoimento 4"
                    className="w-full h-auto md:h-50"
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
                <i className="ri-thumb-up-line text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Alta Aprovação
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                95% de aprovação nos exames teóricos.
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
                Há mais de 20 anos formando condutores responsáveis.
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
                    href={`https://api.whatsapp.com/send/?phone=1532243868&text=Ol%C3%A1%21+Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6.%20Vim%20pelo%20site.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 shadow-lg transition hover:shadow-xl"
                  >
                    Falar no WhatsApp
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

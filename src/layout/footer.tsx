export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-300 py-8 hidden md:block">
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
              <i className="text-lg" />
               <span className="text-sm text-slate-600"><span className="ri-whatsapp-line px-1"></span>(15) 3224 3868</span>
               <span className="text-sm text-slate-600"><span className="ri-whatsapp-line px-1"></span>(15) 99104 7579</span>
              <span className="text-sm text-slate-600"><span className="ri-time-line px-1  "></span>Segunda a Sexta 9h às 18h</span>
            </div>
            <div className="flex space-x-4 flex-shrink-0">
              <a href="https://instagram.com/cfc_g6" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-instagram-line text-2xl text-slate-700" />
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Leopoldo+Machado+40+Sorocaba" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-map-pin-line text-2xl text-slate-700" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=1532243868&text=Ol%C3%A1%21+Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6.%20Vim%20pelo%20site.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-xl shadow hover:shadow-lg transition">
                <i className="ri-whatsapp-line text-2xl text-slate-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4 text-center text-xs text-slate-500">
          © 2025 CFC Grupo G6 — Todos os direitos reservados.
        </div>
      </footer>


      <footer className="bg-gray-50 border-t border-gray-300 py-6 block md:hidden">
        <div className="max-w-xs mx-auto flex flex-col items-center gap-3">
          <h4 className="font-bold text-base text-slate-900 mt-2">CFC Grupo G6</h4>
          <p className="text-xs text-slate-600 text-center">Centro de Formação de Condutores</p>
          <div className="flex items-center gap-2 justify-center mt-2">
            <a href="https://instagram.com/cfc_g6" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg shadow text-slate-700 text-xl hover:shadow-md transition">
              <i className="ri-instagram-line" />
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Leopoldo+Machado+40+Sorocaba" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg shadow text-slate-700 text-xl hover:shadow-md transition">
              <i className="ri-map-pin-line" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=1532243868&text=Ol%C3%A1%21+Quero%20saber%20sobre%20os%20cursos%20do%20CFC%20G6.%20Vim%20pelo%20site.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg shadow text-slate-700 text-xl hover:shadow-md transition">
              <i className="ri-whatsapp-line" />
            </a>
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <i className="text-base text-slate-600" />
            <span className="text-sm text-slate-600"><span className="ri-whatsapp-line px-1"></span>(15) 3224 3868</span>
               <span className="text-sm text-slate-600"><span className="ri-whatsapp-line px-1"></span>(15) 99104 7579</span>
              <span className="text-sm text-slate-600 "><span className="ri-time-line px-1"></span>Segunda a Sexta 9h às 18h</span>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-300 pt-3 text-center text-xs text-slate-500">
          © 2025 CFC Grupo G6
        </div>
      </footer>
    </>
  );
}

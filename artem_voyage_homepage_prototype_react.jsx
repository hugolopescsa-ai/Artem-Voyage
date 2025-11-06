import React from 'react';

// Artem Voyage - Homepage Prototype
// - Single-file React component
// - TailwindCSS utility classes (assumes Tailwind is configured in the project)
// - Fonts suggested: Playfair Display (titles) + Inter (body). Add them in your index.html or via @import in your CSS.
// - Replace image placeholders with real photography for final visuals.

export default function ArtemVoyageHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Top navigation */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-200">
            <span className="text-lg font-serif">ARTEM</span>
          </div>
          <div>
            <div className="text-sm text-gray-600">Artem Voyage</div>
            <div className="text-xs text-gray-400">Curadoria · Viagens · Estética</div>
          </div>
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#about" className="text-sm hover:underline">Sobre</a>
          <a href="#services" className="text-sm hover:underline">Serviços</a>
          <a href="#portfolio" className="text-sm hover:underline">Portefólio</a>
          <a href="#contact" className="text-sm font-medium border px-4 py-2 rounded-md">Contactar</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="h-[64vh] md:h-[72vh] w-full overflow-hidden rounded-b-3xl">
          <div
            className="w-full h-full bg-cover bg-center flex items-center"
            style={{
              backgroundImage:
                "url('/images/hero-placeholder.jpg')",
              // TODO: replace with cinematic Hero photography
            }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-serif leading-tight">
                  Viagens desenhadas à medida.
                </h1>
                <p className="mt-4 text-gray-700">
                  Na Artem Voyage criamos experiências únicas, pensadas ao pormenor para quem procura mais
                  do que destinos: procura significado.
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="#contact" className="inline-block px-6 py-3 border rounded-md text-sm font-medium">Começar a tua viagem</a>
                  <a href="#portfolio" className="inline-block px-6 py-3 text-sm">Ver portefólio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Um ateliê de curadoria de viagens</h2>
            <p className="mt-4 text-gray-700">
              Não somos uma agência. Somos um ateliê onde cada itinerário nasce do diálogo, da escuta e do cuidado.
              Trabalhamos com um número limitado de clientes para garantir tempo, atenção e presença em cada detalhe.
            </p>
          </div>
          <div className="space-y-3">
            <div className="p-6 border rounded-lg">
              <h3 className="font-medium">Planeamento integral</h3>
              <p className="text-sm text-gray-600 mt-2">Roteiros completos: voos, transfers, alojamentos e experiências escolhidas a dedo.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-medium">Curadoria de alojamentos</h3>
              <p className="text-sm text-gray-600 mt-2">Pequenos hotéis e casas com carácter, seleccionados pela estética e serviço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold">Serviços</h3>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Planeamento Integral</h4>
              <p className="text-sm text-gray-600 mt-2">Roteiros completos, pensados de raiz à tua medida.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Curadoria Alojamentos</h4>
              <p className="text-sm text-gray-600 mt-2">Hotéis e casas selecionadas por alma e detalhe.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Apoio em Viagem</h4>
              <p className="text-sm text-gray-600 mt-2">Linha direta para ajustes e resolução de imprevistos.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Viagens Temáticas</h4>
              <p className="text-sm text-gray-600 mt-2">Fotografia, gastronomia, arte — roteiros com propósito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Portefólio</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <article className="rounded-lg overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/portfolio-1.jpg')"}} />
            <div className="p-4 bg-white">
              <h4 className="font-medium">Itália — Inverno & Ateliers</h4>
              <p className="text-sm text-gray-600 mt-2">Dez dias entre Florença e os Alpes com alojamentos boutique e visitas a estúdios.</p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/portfolio-2.jpg')"}} />
            <div className="p-4 bg-white">
              <h4 className="font-medium">Algarve íntimo para fotógrafos</h4>
              <p className="text-sm text-gray-600 mt-2">Sessões ao nascer do sol e alojamento em casa de campo restaurada.</p>
            </div>
          </article>
          <article className="rounded-lg overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/portfolio-3.jpg')"}} />
            <div className="p-4 bg-white">
              <h4 className="font-medium">Roteiro de design & gastronomia</h4>
              <p className="text-sm text-gray-600 mt-2">Experiências privadas com chefs e visitas a ateliers locais.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Queres começar a tua viagem?</h3>
            <p className="text-sm text-gray-600 mt-2">Conta-nos o destino, as datas e o que valorizas. A primeira conversa é gratuita.</p>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Nome" className="p-3 border rounded" />
              <input placeholder="Email" className="p-3 border rounded" />
              <input placeholder="Destino desejado" className="p-3 border rounded md:col-span-2" />
              <textarea placeholder="Mensagem breve" className="p-3 border rounded md:col-span-2" rows={4} />
              <button type="submit" className="md:col-span-2 px-6 py-3 border rounded">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-serif">ARTEM</div>
            <div className="text-sm mt-1">Artem Voyage · Curadoria · Viagens</div>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Artem Voyage — Todos os direitos reservados</div>
        </div>
      </footer>
    </div>
  );
}

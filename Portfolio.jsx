export default function Portfolio() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <header className="bg-[#3A4A3F] text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Nathi Ferreira</h1>
        <nav className="mt-2 space-x-4">
          <a href="#sobre" className="hover:underline">Sobre Mim</a>
          <a href="#fotografia" className="hover:underline">Fotografia</a>
          <a href="#projetos" className="hover:underline">Projetos</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      <section id="sobre" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold text-[#3A4A3F] mb-4">Sobre Mim</h2>
        <p>
          Sou arquiteta apaixonada por modelagem de cenários para jogos, com formação em Arquitetura e experiência em AutoCAD, SketchUp e Blender.
        </p>
      </section>

      <section id="fotografia" className="p-8">
        <h2 className="text-2xl font-semibold text-[#3A4A3F] mb-4">Fotografia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-200 h-48 rounded-lg" />
          <div className="bg-gray-200 h-48 rounded-lg" />
          <div className="bg-gray-200 h-48 rounded-lg" />
        </div>
      </section>

      <section id="projetos" className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold text-[#3A4A3F] mb-4">Projetos</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">Instituto Esportivo (TCC)</h3>
            <p>Projeto final de curso com foco em estrutura esportiva e integração urbana.</p>
          </li>
          <li className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-bold">Biblioteca (4º semestre)</h3>
            <p>Conceito de espaço público moderno e funcional para leitura e convivência.</p>
          </li>
        </ul>
      </section>

      <section id="contato" className="p-8">
        <h2 className="text-2xl font-semibold text-[#3A4A3F] mb-4">Contato</h2>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Seu nome" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Seu email" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Sua mensagem" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
          <button className="bg-[#3A4A3F] text-white px-4 py-2 rounded hover:bg-[#2f3a31]">Enviar</button>
        </form>
      </section>

      <footer className="text-center text-sm text-gray-500 p-4">
        © {new Date().getFullYear()} Nathi Ferreira. Todos os direitos reservados.
      </footer>
    </main>
  );
}

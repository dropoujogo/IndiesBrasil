function Home() {
  return (
    <div className="p-8 font-sans max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">
        Bem-vindo à comunidade dos desenvolvedores indies do Brasil
      </h1>

      <p className="mb-4">
        Este é um espaço criado por e para pessoas apaixonadas por desenvolvimento de jogos.
        Acreditamos no poder da colaboração, da troca de ideias e do apoio mútuo para transformar sonhos em realidade.
      </p>

      <p className="mb-4">
        Neste exato momento, estamos construindo uma nova página na internet — um lar digital onde desenvolvedores independentes
        possam se conectar, compartilhar experiências, divulgar seus projetos e encontrar ferramentas para crescer.
      </p>

      <p className="mb-4">
        Aqui, você encontrará pessoas como você: criativas, sonhadoras, determinadas. Estamos colocando a mão na massa,
        tijolo por tijolo, para que em breve todos tenham acesso a um espaço feito sob medida para a nossa comunidade.
      </p>

      <p className="mb-4">
        Em breve, teremos perfis de usuário, fóruns de discussão, espaço para mostrar seus jogos, ferramentas de colaboração e muito mais.
      </p>

      <p className="font-semibold mb-2">Página em construção</p>
      <p className="mb-6">
        <code className="bg-gray-100 p-1 rounded">- Meta atual: criação de usuário e autenticação</code>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://discord.gg/seu-link-aqui"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-center transition"
        >
          Acompanhar projeto no Discord
        </a>

        <a
          href="https://trello.com/b/seu-link-aqui"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-center transition"
        >
          Ver tarefas no Trello
        </a>
      </div>
    </div>
  );
}

export default Home;

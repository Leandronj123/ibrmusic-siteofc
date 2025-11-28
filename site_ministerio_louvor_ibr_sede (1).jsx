import React from "react";
import { motion } from "framer-motion";

// Single-file React component styled with Tailwind CSS
// Default export is the component to be used in a React app

export default function WorshipMinistrySite() {
  const team = [
    { name: "Leandro Júlio", role: "Líder de Louvor", bio: "Coração de servo, líder e estrategista de adoração." },
    { name: "Agnis Carvalho", role: "Vice-líder / Baixista", bio: "Vice-líder, organizador do ministério e baixista principal." },
    { name: "Amanda", role: "Ministra de Louvor", bio: "Vocalista com paixão por formar corações na adoração." },
    { name: "George", role: "Baterista", bio: "Bateria com unção e timbre de serviço." }
  ];

  const services = [
    { title: "Cultos Dominicais", desc: "Manhã e noite — adoração intencional e exposição da Palavra." },
    { title: "Ensaios Semanais", desc: "Preparação técnica e espiritual para servir com excelência." },
    { title: "Eventos Especiais", desc: "Conferências, encontros e ministrações com convidados." }
  ];

  function handleSubmitContact(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    alert(`Obrigado, ${name}! Sua mensagem foi recebida (simulação).`);
    e.target.reset();
  }

  function handleAudition(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const inst = form.get("instrument");
    alert(`Inscrição recebida para: ${inst} (simulação). Entraremos em contato.`);
    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-50 text-slate-900">
      <header className="shadow-md bg-white/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-300 to-blue-300 flex items-center justify-center text-white font-bold">IBR</div>
            <div>
              <h1 className="text-lg font-extrabold">Ministério de Louvor — IBR Sede</h1>
              <p className="text-xs text-slate-600">Vivendo para Adorar, Servindo com Excelência</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#quem-somos" className="hover:text-blue-600">Quem Somos</a>
            <a href="#equipe" className="hover:text-blue-600">Equipe</a>
            <a href="#agenda" className="hover:text-blue-600">Agenda</a>
            <a href="#audicoes" className="hover:text-blue-600">Audições</a>
            <a href="#galeria" className="hover:text-blue-600">Galeria</a>
            <a href="#contato" className="hover:text-blue-600">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hidden md:inline-block bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">WhatsApp</a>
            <button className="md:hidden p-2 rounded-md border">Menu</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero / Home */}
        <section id="home" className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Vivendo para Adorar, <span className="text-blue-600">Servindo com Excelência</span></h2>
            <p className="mt-4 text-slate-700">Somos um ministério que entende que servir a Deus vai além da música. É sobre vidas, entrega, unidade e adoração genuína. Subimos ao altar não porque somos perfeitos, mas porque reconhecemos Aquele que é digno de toda honra e glória.</p>

            <div className="mt-6 flex gap-3">
              <a href="#equipe" className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow">Conheça nossa equipe</a>
              <a href="#audicoes" className="px-5 py-3 border rounded-lg">Participe das audições</a>
            </div>

            <div className="mt-6 bg-white/70 p-4 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold">Frase de Honra</h3>
              <p className="text-sm mt-1">Dedicamos honra especial à esposa e filhas de nosso vice-líder, cujo apoio torna possível este ministério.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="w-full h-80 bg-gradient-to-tr from-blue-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-2xl font-bold">Imagem do Ministério</div>
                <div className="text-xs mt-2 text-slate-600">(substitua por fotos reais na galeria)</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="mt-16 bg-white/60 p-8 rounded-2xl shadow">
          <h3 className="text-2xl font-bold">Quem Somos</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <p>O Ministério de Louvor da IBR Sede nasceu do desejo de conduzir o povo a uma adoração verdadeira. Nossa missão é adorar a Deus com excelência, formar discípulos e servir a comunidade com amor e integridade.</p>
            <div>
              <h4 className="font-semibold">Missão</h4>
              <p className="text-sm text-slate-700">Conduzir pessoas à presença de Deus por meio da música e do serviço.</p>

              <h4 className="font-semibold mt-3">Visão</h4>
              <p className="text-sm text-slate-700">Ser um ministério referência em adoração, formação musical e cuidado pastoral.</p>

              <h4 className="font-semibold mt-3">Versículo</h4>
              <p className="text-sm text-slate-700">Colossenses 3:23 — Tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor.</p>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="mt-12">
          <h3 className="text-2xl font-bold">Nossa Equipe</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <motion.article key={t.name} whileHover={{ y: -6 }} className="bg-white p-4 rounded-2xl shadow">
                <div className="w-full h-36 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 font-bold">Foto</div>
                <h4 className="mt-4 font-semibold">{t.name}</h4>
                <p className="text-sm text-blue-600">{t.role}</p>
                <p className="mt-2 text-sm text-slate-700">{t.bio}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="mt-12 bg-white/60 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold">Agenda</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.title} className="p-4 border rounded-lg">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm mt-1 text-slate-700">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">Para inserir eventos e atualizações utilize o painel administrativo do site (não implementado aqui).</p>
        </section>

        {/* Audições */}
        <section id="audicoes" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white/60 p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">Audições e Chamadas</h3>
            <p className="mt-3 text-slate-700">Se você deseja servir no ministério de louvor, temos um processo simples que avalia técnica e caráter. Buscamos pessoas com vida pastoral saudável, compromisso e desejo de servir.</p>

            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
              <li>Critérios: técnica, entonação/afinação, postura de servo, disponibilidade e maturidade espiritual.</li>
              <li>Para serem aprovados: ter ao menos duas avaliações como "Muito Bom" e média mínima de 7 (processo interno).</li>
              <li>Traga música que melhor demonstre seu chamado e uma breve apresentação espiritual.</li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold">Perguntas de reflexão</h4>
              <p className="text-sm mt-2 text-slate-700">Quantas vezes nós ministros subimos ao altar com problemas financeiros, emocionais ou pessoais? Como cuidamos um do outro antes, durante e após o serviço?</p>
            </div>
          </div>

          <form onSubmit={handleAudition} className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold">Inscreva-se nas Audições</h4>
            <div className="mt-3 grid gap-3">
              <input name="nome" placeholder="Nome completo" className="p-3 border rounded" required />
              <input name="email" placeholder="E-mail" type="email" className="p-3 border rounded" required />
              <input name="instrument" placeholder="Instrumento / Voz" className="p-3 border rounded" required />
              <select name="disponibilidade" className="p-3 border rounded">
                <option>Manhã</option>
                <option>Noite</option>
                <option>Ambos</option>
              </select>
              <textarea name="experiencia" placeholder="Breve experiência" className="p-3 border rounded" rows={4}></textarea>
              <button className="mt-2 px-4 py-3 bg-blue-600 text-white rounded">Enviar Inscrição</button>
            </div>
          </form>
        </section>

        {/* Galeria */}
        <section id="galeria" className="mt-12">
          <h3 className="text-2xl font-bold">Galeria</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-40 bg-blue-50 rounded-lg flex items-center justify-center">Foto {i + 1}</div>
            ))}
          </div>
        </section>

        {/* Blog / Devocional */}
        <section id="blog" className="mt-12 bg-white/60 p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold">Devocionais & Notícias</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="p-4 border rounded">
              <h4 className="font-semibold">Servir é uma atitude</h4>
              <p className="mt-2 text-sm text-slate-700">Reflexão curta sobre humildade e serviço no ministério.</p>
              <p className="mt-3 text-xs text-slate-500">Autor: Kemuel Kesley — 10/10/2025</p>
            </article>

            <article className="p-4 border rounded">
              <h4 className="font-semibold">Cuidando um do outro</h4>
              <p className="mt-2 text-sm text-slate-700">Como o ministério pode oferecer suporte emocional aos integrantes.</p>
              <p className="mt-3 text-xs text-slate-500">Autor: Leandro Júlio — 02/09/2025</p>
            </article>

            <article className="p-4 border rounded">
              <h4 className="font-semibold">Próximos ensaios</h4>
              <p className="mt-2 text-sm text-slate-700">Datas e horários dos ensaios da semana.</p>
              <p className="mt-3 text-xs text-slate-500">Equipe — 05/09/2025</p>
            </article>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold">Contato</h3>
            <p className="mt-2 text-sm text-slate-700">Envie-nos uma mensagem ou siga nossas redes sociais para acompanhar novidades.</p>

            <div className="mt-4 text-sm">
              <p><strong>E-mail:</strong> ministeriolouvor@ibrsede.org (simulação)</p>
              <p className="mt-1"><strong>Instagram:</strong> @ibr_louvor</p>
              <p className="mt-1"><strong>Local:</strong> Igreja Batista Renovada - Sede</p>
            </div>
          </div>

          <form onSubmit={handleSubmitContact} className="bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold">Envie uma mensagem</h4>
            <div className="mt-3 grid gap-3">
              <input name="name" placeholder="Seu nome" className="p-3 border rounded" required />
              <input name="email" type="email" placeholder="Seu e-mail" className="p-3 border rounded" required />
              <textarea name="message" placeholder="Sua mensagem" className="p-3 border rounded" rows={4}></textarea>
              <button className="mt-2 px-4 py-3 bg-blue-600 text-white rounded">Enviar</button>
            </div>
          </form>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ministério de Louvor — IBR Sede. Todos os direitos reservados.</p>
          <p className="mt-1">Versículo: Colossenses 3:23</p>
        </footer>
      </main>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/" className="fixed right-6 bottom-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg">WA</a>
    </div>
  );
}

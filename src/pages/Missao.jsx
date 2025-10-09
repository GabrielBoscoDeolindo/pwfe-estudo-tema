import { useState } from "react";
import { missoes } from '../data/dadosMissao';
import { MissaoCard } from '../components/MissaoCard';
import { MissaoModal } from '../components/MissaoModal';

export default function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]); // ✅ novo estado

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]); // adiciona id no array
    setMissaoSelecionada(null); // fecha modal
  };

  return (
    <section className='conteiner'>
      <h2>Missões</h2>
      <div className="missoes-grid">
        {missoes.map((m) => (
          <MissaoCard
            key={m.id} 
            missao={m}  
            onIniciarMissao={setMissaoSelecionada} 
            concluida={missoesConcluidas.includes(m.id)} 
          />
        ))}
      </div>

      {missaoSelecionada && (
        <MissaoModal 
          missao={missaoSelecionada} 
          onClose={() => setMissaoSelecionada(null)} 
          onConcluir={() => concluirMissao(missaoSelecionada.id)} 
        />
      )}
    </section>
  );
}

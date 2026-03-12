import { useState } from 'react';
import './section.css';

export const Section = () => {

    const [nome, setNome] = useState('');
    const [nomeR, setNomeR] = useState('');
    const [nomes, setNomes] = useState([]);

    const adicionarNome = () => {
        setNomes([...nomes, nome]);
    }

    const remover = () => {
        
    }

    return (
            <section>
            <div>
                
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="digite os nomes" />
                <button onClick={adicionarNome}>adicionar</button>
                <ul>
                    {nomes.map((nomes, index) => {
                        return <li key={index}>{nomes} <button>a</button></li>
                    })}
                </ul>
                <input type="text" value={nomeR} onChange={(e) => setNomeR(e.target.value)} placeholder="digite os nomes a serem removidos" />
                <button onClick={remover}>remover</button>
            </div>    
            </section>
    )
}
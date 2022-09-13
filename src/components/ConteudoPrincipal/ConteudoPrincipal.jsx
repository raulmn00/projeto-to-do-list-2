import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';

export function ConteudoPrincipal({ paletaState, setPaletaState }) {
    return (
        <>
            <main className="conteudo-principal">
                <div className="conteudo-principal-container">
                    <PaletaLista
                        paletaState={paletaState}
                        setPaletaState={setPaletaState}
                    />
                </div>
            </main>
        </>
    );
}

import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';

export function ConteudoPrincipal({
    paletaState,
    setPaletaState,
    setTextTitle,
    textTitle,
}) {
    return (
        <>
            <main className="conteudo-principal">
                <div className="conteudo-principal-container">
                    <PaletaLista
                        paletaState={paletaState}
                        setPaletaState={setPaletaState}
                        setTextTitle={setTextTitle}
                        textTitle={textTitle}
                    />
                </div>
            </main>
        </>
    );
}

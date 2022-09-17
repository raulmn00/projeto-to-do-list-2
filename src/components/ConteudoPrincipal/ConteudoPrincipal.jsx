import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';
import { FormCreate } from '../FormCreate/FormCreate';

export function ConteudoPrincipal({
    paletaState,
    setPaletaState,
    setTextTitle,
    textTitle,
    functionAllPaletas,
    showForm,
    setShowFormState,
}) {
    return (
        <>
            <main className="conteudo-principal">
                <div className="conteudo-principal-container">
                    <FormCreate
                        setPaletaState={setPaletaState}
                        functionAllPaletas={functionAllPaletas}
                        showFormState={showForm}
                        setShowFormState={setShowFormState}
                    />
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

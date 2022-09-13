import './PaletaLista.css';
import { PaletaItem } from '../PaletaItem/PaletaItem';
import { useEffect } from 'react';
import { apiHelper } from '../utils/api/Api';

export function PaletaLista({ paletaState, setPaletaState }) {
    const allPaletas = async () => {
        const response = await apiHelper.findAllPaletas();
        setPaletaState(response);
        //console.log('response all paletas: ', response);
    };

    useEffect(() => {
        allPaletas();
    }, []);
    return (
        <section className="secao-paletas-experimentadas">
            <h3>Paletas Experimentadas</h3>
            {paletaState.map((paleta, index) => {
                return (
                    <PaletaItem
                        id={paleta._id}
                        titulo={paleta.titulo}
                        descricao={paleta.descricao}
                        preco={paleta.preco}
                        possuiRecheio={paleta.possuiRecheio}
                        recheio={paleta.recheio}
                        sabor={paleta.sabor}
                        index={index}
                        key={index}
                    />
                );
            })}
        </section>
    );
}

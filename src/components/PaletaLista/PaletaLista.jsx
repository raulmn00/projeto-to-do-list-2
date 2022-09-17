import './PaletaLista.css';
import { PaletaItem } from '../PaletaItem/PaletaItem';
import { useEffect } from 'react';
import { apiHelper } from '../utils/api/Api';
import { Title } from '../Title/Title';

export function PaletaLista({
    paletaState,
    setPaletaState,
    setTextTitle,
    textTitle,
}) {
    const allPaletas = async () => {
        const response = await apiHelper.findAllPaletas();
        setPaletaState(response);
        setTextTitle('Todas as Paletas');
        console.log('response all paletas: ', response);
    };

    useEffect(() => {
        allPaletas();
    }, []);
    return (
        <section className="secao-paletas-experimentadas">
            <Title text={textTitle} />
            {paletaState.map((paleta, index) => {
                return (
                    <PaletaItem
                        id={paleta._id}
                        titulo={paleta.titulo}
                        descricao={paleta.descricao}
                        preco={paleta.preco}
                        foto={paleta.foto}
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

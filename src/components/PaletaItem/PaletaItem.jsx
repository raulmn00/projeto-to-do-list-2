// pedir 0,5 pro Lucas Viccari
import './PaletaItem.css';

export function PaletaItem({
    id,
    titulo,
    descricao,
    preco,
    possuiRecheio,
    recheio,
    sabor,
    index,
    foto,
}) {
    return (
        <div className="paletaItemContainer" key={index}>
            <p>Id: {id}</p>
            <h3>Nome: {titulo}</h3>
            <img src={foto} alt="Imagem da Paleta" />
            <p>Descrição: {descricao}</p>
            <p>Preço: R$ {preco.toFixed(2).replace('.', ',')}</p>
            <p>Sabor: {sabor}</p>
            {possuiRecheio && <p>Recheio: {recheio}</p>}
        </div>
    );
}

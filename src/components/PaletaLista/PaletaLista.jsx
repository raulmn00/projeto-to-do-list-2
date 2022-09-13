import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect, useState } from 'react';

export function PaletaLista() {
	const [paletas, setPaletas] = useState([]);

	const allPaletas = async () => {
		const response = await apiHelper.findAllPaletas();
		setPaletas(response);
		console.log('response all paletas: ', response);
	};
	useEffect(() => {
		allPaletas();
	}, []);

	return (
		<section className="secao-paletas-experimentadas">
			<h3>Paletas Experimentadas</h3>
			{paletas.map((paleta, index) => {
				return (
					<div className="paletaItemContainer" key={index}>
						<h3>Nome: {paleta.titulo}</h3>
						<p>Descrição: {paleta.descricao}</p>
						<p>
							Preço: R${' '}
							{paleta.preco.toFixed(2).replace('.', ',')}
						</p>
						<p>Sabor: {paleta.sabor}</p>
						{paleta.possuiRecheio && (
							<p>Recheio: {paleta.recheio}</p>
						)}
					</div>
				);
			})}
		</section>
	);
}

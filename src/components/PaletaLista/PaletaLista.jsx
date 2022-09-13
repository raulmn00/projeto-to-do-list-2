import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect, useState } from 'react';
import { PaletaItem } from '../PaletaItem/PaletaItem';

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
					<PaletaItem
						id={paleta.id}
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

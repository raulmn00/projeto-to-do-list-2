import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';

export function ConteudoPrincipal() {
	return (
		<>
			<main className="conteudo-principal">
				<div className="conteudo-principal-container">
					<PaletaLista />
				</div>
			</main>
		</>
	);
}

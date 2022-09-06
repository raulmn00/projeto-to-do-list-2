import './ConteudoPrincipal.css';

export function ConteudoPrincipal() {
	return (
		<>
			<main className="conteudo-principal">
				<div className="conteudo-principal-container">
					<section className="secao-tarefas-ativas">
						<h3>Tarefas Ativas</h3>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
					</section>
					<section className="secao-tarefas-feitas">
						<h3>Tarefas Concluidas</h3>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
					</section>
					<section className="secao-tarefas-excluidas">
						<h3>Tarefas Deletadas</h3>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
						<p>TAREFA 1</p>
					</section>
				</div>
			</main>
		</>
	);
}

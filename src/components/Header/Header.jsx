import './Header.css';

export function Header() {
	return (
		<>
			<div className="header-container">
				<h2 className="header-title">HEADER</h2>
				<nav className="navbar">
					<p>Home</p>
					<p>Todas as tarefas</p>
					<p>Excluir Tarefa</p>
				</nav>
			</div>
		</>
	);
}

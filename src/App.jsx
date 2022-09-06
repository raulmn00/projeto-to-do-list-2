import './App.css';
import { Header } from './components/Header/Header.jsx';
import { ConteudoPrincipal } from './components/ConteudoPrincipal/ConteudoPrincipal.jsx';
import { Footer } from './components/Footer/Footer';

export function App() {
	return (
		<>
			<div className="container-to-do-list">
				<div className="header-to-do-list">
					<Header />
				</div>
				<div className="main-content">
					<ConteudoPrincipal />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		</>
	);
}

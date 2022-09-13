import './Header.css';
import { apiHelper } from '../utils/api/Api';

export function Header({ setPaletaState, functionAllPaletas, setTextTitle }) {
    const findByIdPaleta = async () => {
        const input = document.querySelector('#inputId');
        const id = input.value;
        const response = await apiHelper.findPaletaById(id);
        setPaletaState([response]);
        setTextTitle('Paleta Selecionada');
    };

    return (
        <>
            <div className="header-container">
                <h2 className="header-title">HEADER</h2>
                <nav className="navbar">
                    <button onClick={functionAllPaletas}>
                        Todas as paletas
                    </button>
                    <p>Excluir paleta</p>
                    <label htmlFor="inputId">Digite um ID: </label>
                    <input
                        type="text"
                        name="inputId"
                        placeholder="Digite o id.."
                        id="inputId"
                    ></input>
                    <button
                        type="button"
                        className="btnSearch"
                        onClick={findByIdPaleta}
                    >
                        PROCURAR
                    </button>
                </nav>
            </div>
        </>
    );
}

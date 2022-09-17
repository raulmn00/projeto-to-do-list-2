import './Header.css';
import { apiHelper } from '../utils/api/Api';

export function Header({
    setPaletaState,
    functionAllPaletas,
    setTextTitle,
    setShowForm,
    showFormState,
}) {
    const findByIdPaleta = async () => {
        const input = document.querySelector('#inputId');
        const id = input.value;
        const response = await apiHelper.findPaletaById(id);
        setPaletaState([response]);
        setTextTitle('Paleta Selecionada');
    };

    const handleShowForm = () => {
        setShowForm(!showFormState);
    };
    const deletePaleta = async () => {
        const inputDelete = document.querySelector('#deleteId');
        const idDelete = inputDelete.value;
        const response = await apiHelper.deletePaleta(idDelete);
        if (response) {
            alert('Paleta Deletada com Sucesso!');
            functionAllPaletas();
        }
    };

    return (
        <>
            <div className="header-container">
                <h2 className="header-title">HEADER</h2>
                <nav className="navbar">
                    <button onClick={functionAllPaletas}>
                        Todas as paletas
                    </button>
                    <label htmlFor="deleteId">Deletar Paleta </label>
                    <input
                        type="text"
                        name="deleteId"
                        id="deleteId"
                        placeholder="Digite um ID para excluir"
                    />
                    <button onClick={deletePaleta}>DELETAR</button>
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
                    <button
                        onClick={() => {
                            handleShowForm();
                        }}
                    >
                        MOSTRAR FORM
                    </button>
                </nav>
            </div>
        </>
    );
}

import './FormCreate.css';
import { apiHelper } from '../utils/api/Api';
import { useState } from 'react';

export function FormCreate({
    setPaletaState,
    functionAllPaletas,
    showFormState,
    setShowFormState,
}) {
    const [paletaCriada, setPaletaCriada] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await apiHelper.createPaleta(paletaCriada);
        const paletas = await apiHelper.findAllPaletas();
        setPaletaState(paletas);
        setShowFormState(false);
        functionAllPaletas();
    };

    return (
        <div className="formContainer">
            {showFormState === true && (
                <form onSubmit={handleSubmit} className="formCreate">
                    <label htmlFor="tituloPaleta">Titulo: </label>
                    <input
                        type="text"
                        name="titulo"
                        id="tituloPaleta"
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                titulo: event.target.value,
                            });
                        }}
                    />
                    <label htmlFor="descricaoPaleta">Descrição: </label>
                    <input
                        type="text"
                        name="descricao"
                        id="descricaoPaleta"
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                descricao: event.target.value,
                            });
                        }}
                    />
                    <label htmlFor="fotoPaleta">Foto: </label>
                    <input
                        type="text"
                        name="foto"
                        id="fotoPaleta"
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                foto: event.target.value,
                            });
                        }}
                    />
                    <label htmlFor="precoPaleta">Preço: </label>
                    <input
                        type="number"
                        name="preco"
                        id="precoPaleta"
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                preco: event.target.value,
                            });
                        }}
                    />
                    <label htmlFor="saborPaleta">Sabor: </label>
                    <input
                        type="text"
                        name="sabor"
                        id="saborPaleta"
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                sabor: event.target.value,
                            });
                        }}
                    />
                    <label htmlFor="possuiRecheio">Possui Recheio? </label>
                    <select
                        name="possuiRecheio"
                        defaultValue={true}
                        onChange={(event) => {
                            setPaletaCriada({
                                ...paletaCriada,
                                possuiRecheio: event.target.value,
                            });
                        }}
                    >
                        <option value={true}>Sim</option>
                        <option value={false}>Não</option>
                    </select>
                    {paletaCriada.possuiRecheio === 'true' ? (
                        <>
                            <label htmlFor="recheio">Sabor do Recheio: </label>
                            <input
                                type="text"
                                name="recheio"
                                defaultValue={true}
                                onChange={(event) => {
                                    setPaletaCriada({
                                        ...paletaCriada,
                                        recheio: event.target.value,
                                    });
                                }}
                            />
                        </>
                    ) : null}
                    <button type="submit" className="btn-createPaleta">
                        CRIAR PALETA
                    </button>
                </form>
            )}
        </div>
    );
}

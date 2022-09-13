import './App.css';
import { Header } from './components/Header/Header.jsx';
import { ConteudoPrincipal } from './components/ConteudoPrincipal/ConteudoPrincipal.jsx';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { apiHelper } from './components/utils/api/Api';

export function App() {
    const [paletas, setPaletas] = useState([]);
    const [textTitle, setTextTitle] = useState('');

    const allPaletas = async () => {
        const response = await apiHelper.findAllPaletas();
        setPaletas(response);
        console.log('response all paletas: ', response);
    };
    return (
        <>
            <div className="container-to-do-list">
                <div className="header-to-do-list">
                    <Header
                        setPaletaState={setPaletas}
                        functionAllPaletas={allPaletas}
                        setTextTitle={setTextTitle}
                    />
                </div>
                <div className="main-content">
                    <ConteudoPrincipal
                        paletaState={paletas}
                        setPaletaState={setPaletas}
                        setTextTitle={setTextTitle}
                        textTitle={textTitle}
                    />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

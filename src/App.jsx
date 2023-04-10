import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./context/MyContext";
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"

function App() {

    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        try {
            let res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1800');
            let data = await res.json();
            setPokemones(data.results);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <MyContext.Provider value={pokemones}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/pokemones/:pokemon" element={<Pokemones />} />
                    </Routes>
                </BrowserRouter>
            </MyContext.Provider>
        </div>
    );
}

export default App;

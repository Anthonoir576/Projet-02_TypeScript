
// --- IMPORT ----

import React          from "react";
import ReactDOM       from "react-dom";
import { useState }   from "react";

import '../src/styles/style.css';
// ---------------



// --- LOGIQUE ---
const App: React.FC = () => {

    const [nom, setNom]    = useState('');
    const [mail, setMail]  = useState('');

    const submitFonction = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();




    };


    return (
        <div>
            <h1> - C.R.M - </h1>
            <form 
                onSubmit={submitFonction}
                className='formulaire'
            >
                <p className="client">
                    Entrer les coordonnées de votre client :
                </p>

                <label htmlFor="nom">
                    Nom :
                </label>
                <input value={nom}
                       onChange={e => setNom(e.target.value)}
                       id="nom"
                />

                <br />
                <br />
                <br />

                <label htmlFor="email">
                    E-mail :
                </label>
                <input value={mail}
                       onChange={e => setMail(e.target.value)}
                       id="email"
                />

                <br />
                <br />

                <button type="submit">
                    Ajouter
                </button>

            </form>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

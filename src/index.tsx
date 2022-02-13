
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
            <h1>CRM</h1>
            <form 
                onSubmit={submitFonction}
            >
            </form>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

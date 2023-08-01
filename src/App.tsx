import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Editor from './Components/Editor';
import samoraLang from "/samora-logo.png";

const App = () => {
  useEffect(() => {
    const fetchData = () => {
      axios.get(import.meta.env.VITE_TRIGGER_URL)
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(() => {
          console.error('Error:');
        });
    };

    fetchData();
  });

  return (
    <>
      <header id="header">
        <div className="wrapper">
          <div className="logo">
            <img src={samoraLang} alt="" />
          </div>
        </div>
      </header>
      <main>
        <section id="hero">
          <div className="wrapper">
            <div className="content">
              <div className="text">
                <span>Um novo paradigma de <span className="bold">Programação!</span></span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="container">
        <h1>SamoraLang Playground</h1>

        <div className="box">
          <p>Experimente e pratique SamoraLang. Escreva o seu codigo abaixo e clique no botão no canto para rodar!</p>

          <Editor />
        </div>
      </div>
    </>
  );
}

export default App;

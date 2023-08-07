import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Editor from './Components/Editor';
import Header from './Components/Header';
import joinSML from "/join-sml.png";
import arrowRight from "./assets/arrow-right.svg";
import samoraLangLogo from "/samoralang-logo.svg";

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
      <Header />

      <main>
        <section id="hero">
          <div className="wrapper">
            <div className="content">
              <div className="text">
                <span>Experimente um novo paradigma de <span className="bold">programação!</span></span>
                <p>Descubra a magia da codificação no nosso Playground! Experimente agora mesmo.</p>

                <a id="goToPlaugroundBtn" href="#playground">
                  Playground
                  <img src={ arrowRight } alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="playground">
          <div className="container">
            <h2>Playground</h2>

            <div className="box">
              <Editor />
            </div>

            <p className="copyright">SamoraLang Playground © 2023</p>
          </div>
        </section>

        <section id="join-samora-lang">
          <div className="wrapper">
            <div className="content">
              <div className="img">
                <img src={ joinSML } alt="" />
              </div>
              <div className="text">
                <h2>O que acha de se tornar um <span className="bold">colaborador</span>?</h2>
                <p>Junte-se ao projeto Samora Lang! Se você é um entusiasta do desenvolvimento de software e deseja fazer a diferença em um ambiente de código aberto, esta é a sua chance.</p>
                <p>Contribua diretamente com o <a href="https://github.com/GraHms/Samora-Lang" target='_blank'>interpretador</a> ou no <a href="https://github.com/JefferMarcelino/sml-playground" target='_blank'>backend do playground</a> e esse <a href="https://github.com/JefferMarcelino/sml-frontend" target='_blank'>website</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrapper">
          <div className="logo">
            <img src={ samoraLangLogo } alt="" />
          </div>

          <p className="copyright">SamoraLang © Todos direitos reservados 2023</p>
        </div>
      </footer>
    </>
  );
}

export default App;

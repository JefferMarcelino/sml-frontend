import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Editor from './Components/Editor';
import Header from './Components/Header';
import samoraLangLogo from "/samora-lang-logo.svg";
import arrowRight from "./assets/arrow-right.svg";

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
                <img src={ samoraLangLogo } alt="" />
              </div>
              <div className="text">
                <h2>O que acha de se tornar um <span className="bold">colaborador</span>?</h2>
                <p>Junte-se ao projeto Samora Lang! Se você é um entusiasta do desenvolvimento de software e deseja fazer a diferença em um ambiente de código aberto, esta é a sua chance.</p>
                <p>Contribua diretamente com o <a href="https://github.com/GraHms/Samora-Lang">interpretador</a> ou no <a href="https://github.com/JefferMarcelino/sml-playground">backend do playground</a> e esse <a href="https://github.com/JefferMarcelino/sml-frontend">website</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

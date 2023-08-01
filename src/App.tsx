import './App.css';
import Editor from './Components/Editor';

const App = () => {
  return (
    <>
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

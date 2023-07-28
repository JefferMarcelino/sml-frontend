import axios from 'axios';
import { useState } from 'react';
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/";
import { Play } from 'phosphor-react';

import './App.css';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const App = () => {
  const [ code, setCode ] = useState('print("Hello, World!");');
  const [ output, setOutput ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ executionTime, setExecutionTime ] = useState(0);

  const handleClick = async () => {
    setIsLoading(true);

    const startTime = performance.now();

    const result = await axios.post(import.meta.env.VITE_BASE_API_URL, {
      code: code
    });

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    setOutput(result.data.result);

    setIsLoading(false);
    setExecutionTime(executionTime);
  };

  return (
    <>
      <div className="container">
        <h1>SamoraLang Playground</h1>

        <div className="box">
          <p>Experimente e pratique SamoraLang. Escreva o seu codigo abaixo e clique no botão no canto para rodar!</p>

          <div className={`editor ${isLoading ? "disabled" : ""}`}>
            <Play 
              id="runButton" 
              color="green" 
              weight="fill"
              onClick={ handleClick } 
              size={32}
            />

            <SimpleCodeEditor
              value={code}
              padding={10}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.js, "js")}
              style={{
                fontFamily: "monospace",
                fontSize: 17,
                border: "1px solid rgb(168, 163, 163)",
                minHeight: "250px",
                outline: "none",
              }}
            />

            <div id="output">
              <div id="executionTime">
                { executionTime.toFixed(0) } ms
              </div>
              { output }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

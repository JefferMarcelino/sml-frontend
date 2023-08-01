import axios from 'axios';
import { useState } from 'react';
import SimpleCodeEditor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/";
import { Play } from 'phosphor-react';

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const Editor = () => {
  const [ code, setCode ] = useState('print("Olá, SamoraLang!");');
  const [ output, setOutput ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ executionTime, setExecutionTime ] = useState(0);

  const handleClick = async () => {
    setIsLoading(true);

    const startTime = performance.now();

    try {  
      const result = await axios.post(import.meta.env.VITE_BASE_API_URL, {
        code: code
      });
  
      setOutput(result.data.result);
    } catch (error) {
      setOutput("OPS!!! Algo correu mal!");
    }
    
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    setExecutionTime(executionTime);

    setIsLoading(false);
  };

  const handleDropdownItemClick = (item: string) => {
    // Modify this function to add the selected item to the textarea
    setCode(item);
  };

  // Dropdown items with examples
  const dropdownItems = [
    {
      label: "Olá SamoraLang",
      code: 'print("Hello, SamoraLang!");'
    },
    {
      label: "Recursive Factorial Function",
      code: `let factorial = fn(n) {
  if (n == 0) {
    1;
  } else {
    n * factorial(n - 1);
  }
};

let result = factorial(5);
print("A factorial de 5 é: ", result);`
    },
    {
      label: "Closure",
      code: `let adder = fn(x) {
  fn(y) {
    x + y;
  };
};
      
let addTwo = adder(2);
let result = addTwo(3);
print("2 + 3 = ", result);`
    },
    {
      label: "Comentários",
      code: `// Este é um comentário de uma linha.
# Este também é um comentário de uma linha.`
    },
    {
      label: "Arrays",
      code: `let numbers = [1, 2, 3, 4, 5];
print(numbers[2]);`
    },
    {
      label: "Hash (Dictionary)",
      code: `let person = {"name": "John", "age": 25};
print(person["name"]);`
    },
    {
      label: "Map and Reduce",
      code: `let numbers = [1, 2, 3, 4, 5];
let squared = map(numbers, fn(x) { x * x });
let sum = reduce(squared, fn(acc, x) { acc + x }, 0);
print("A soma dos números ao quadrado é: ", sum);`
    },
  ];

  return (
    <div className={`editor ${isLoading ? "disabled" : ""}`}>
      <div id="dropdown-examples">
        <span>Escolha um exemplo: </span>
        <select onChange={(e) => handleDropdownItemClick(e.target.value)}>
          { dropdownItems.map((item, index) => (
            <option key={index} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div id="input">
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
            paddingRight: "1.5rem"
          }}
        />
      </div>

      <div id="output">
        <div id="executionTime">
          { executionTime.toFixed(0) } ms
        </div>
        { output }
      </div>
    </div>
  );
};

export default Editor;
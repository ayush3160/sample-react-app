import { useState } from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([]);

  const [inputText, setInputText] = useState('');

  const handleAdd = () => {

    if (inputText === '') return;

    setList([...list, inputText]);
    setInputText('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => setList([])}>Clear</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

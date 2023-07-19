import React from 'react';
import { useState } from 'react';
import TranslationChart from './components/TranslationChart';
import TranslationForm from './components/TranslationForm'
import  './App.css'

function App(props) {
  
const joe = {name:"Joe", age:"21", hobby:"trading"}

  const [translationLogs, setTranslationLogs] = useState([]);

  const addTranslationLog = (log) => {
    let logs = [...translationLogs, log];
    setTranslationLogs(logs);
    console.log(logs)
    
  }

  return (
    <section className='app'>
      <p> The young boy {joe.name} is age {joe.age} and his hobby is {joe.hobby}</p>
      <TranslationForm addTranslation={addTranslationLog}/>
      <TranslationChart translation={translationLogs}/>
    </section>
  );
  
}

export default App;

// function App(props) {

//   import React from 'react';
// import ReactDOM from 'react-dom';
// import { useState } from 'react';
// import ChoreChart from './components/ChoreChart';
// import ChoreForm from './components/ChoreForm'

//   const [choreLogs, setChoreLogs] = useState([]);

//   const addChoreLog = (log) => {
//     let logs = [...choreLogs, log];
//     setChoreLogs(logs);

//   }
//   return (
//     <section>
//       <ChoreForm addChoreLog={addChoreLog}/>
//       <ChoreChart chores={choreLogs}/>
//     </section>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

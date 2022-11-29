import react from 'react';
import RandomFacts from './RandomFacts/RandomFacts';

function App() {
  document.title = 'Random Facts';
  return (
    <div className='App'>
      <RandomFacts />
    </div>
  );
}

export default App;

import react from 'react';
import RandomActivities from './RandomActivities/RandomActivities';

function App() {
  document.title = 'Random Facts';
  return (
    <div className='App'>
      <RandomActivities />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Metronome } from './components/Metronome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Metronome />
    </div>
  );
}

export default App;

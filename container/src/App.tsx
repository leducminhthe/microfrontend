import React, { Suspense } from 'react';
import './App.css';

const MicroFrontend1 = React.lazy(() =>
  import('microfrontend1/App').catch(() => ({
    default: () => <div>MicroFrontend1 is not available</div>,
  }))
);

function App() {
  const test = async () => {
    try {
      const module = await import('sharedUtils/Utils');
      const cal = module.add(3, 8);
      console.log(cal);
    } catch (error) {
      console.error('Error loading module:', error);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Suspense fallback={<div>Loading...</div>}>
          <MicroFrontend1 test={1232131221111}  handleClick={test} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;

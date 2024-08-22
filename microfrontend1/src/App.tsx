import './App.css';

function App(probs: any) {
  const { test, handleClick } = probs;
  return (
    <div>
      <p>test123456789</p>
      <input type="button" value="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;

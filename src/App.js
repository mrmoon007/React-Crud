import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App p-3 container bg-light">
      <h1>This is a simple crud app</h1>
      <Form />
    </div>
  );
}

export default App;

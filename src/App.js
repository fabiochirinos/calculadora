import './App.css';
import logo from './img/calculadora.jpg'

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo'
          alt='Logo de calculadora' />
      </div>
    </div>
  );
}

export default App;

import Menu from './Componentes/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';
import Rodape from './Componentes/Rodape/rodape';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu/>
        </header>
        <main>
          <h1>Bem Vindo(a) a Full Stack Eletro </h1>
          <h2>Aqui desenvolvedores tem 10% de Desconto em eletronônicos para sua casa!</h2>
          <Container fluid>
            <Rotas/>
          </Container>          
        </main>
        <footer class="rodape">
          <Rodape/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

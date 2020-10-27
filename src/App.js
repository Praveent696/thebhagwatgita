import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationMenu from './components/layout/NavigationMenu';
// eslint-disable-next-line
import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
      <div fluid>
         <NavigationMenu />
      </div>
    </>
    
  );
}

export default App;

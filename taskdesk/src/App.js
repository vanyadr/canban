import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RouterSist} from './components'

function App() {
  return (
      <BrowserRouter>
        <RouterSist/>
      </BrowserRouter>
  );
}

export default App;

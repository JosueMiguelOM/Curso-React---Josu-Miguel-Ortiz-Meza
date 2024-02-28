import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Autor from './components/Autor';

function App() {
  return (//todo componente de react debe tener una etiqueta 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<Autor />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
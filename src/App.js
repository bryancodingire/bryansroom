// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BryansRoom from './components/BryansRoom';
import CheckItem from './components/CheckItem';
import FoundItem from './components/FoundItem';
import Home from './components/Home';
import NotItem from './components/NotItem';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
            <Route path="bryansroom" element={<BryansRoom />} />
            <Route path="checkitem" element={<CheckItem />} />
            <Route path="founditem" element={<FoundItem />} />
            <Route path="notitem" element={<NotItem />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

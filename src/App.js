// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BryansRoom from './components/BryansRoom';
import Home from './components/Home';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
            {/* <Route index element={<Home />} exact/> */}
            <Route path="bryansroom" element={<BryansRoom />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      {/* <Routes>
        <Route path='/' element={BryansRoom} exact/>
        <Route path='/bryansroom' element={BryansRoom}/>
      </Routes> */}
    </main>
  );
}

export default App;

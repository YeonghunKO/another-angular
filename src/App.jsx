import { useState } from 'react';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import somthing from './utils/something';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState('2');

  if (true) {
    console.log('c');
  }

  return (
    <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'/detail'} element={<Detail />} />
    </Routes>
  );
}

export default App;

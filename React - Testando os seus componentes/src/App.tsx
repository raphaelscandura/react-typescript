import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './paginas/Configuracao/Configuracao';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Formulario}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

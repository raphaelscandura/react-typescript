import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/Administração/Restaurantes/AdministracaoRestaurante';
import FormRestaurante from './paginas/Administração/Restaurantes/FormRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdministracaoRestaurantes />} />
      <Route path="/admin/restaurantes/novo" element={<FormRestaurante />} />
      <Route path="/admin/restaurantes/editar/:id" element={<FormRestaurante />} />
      <Route path="/admin/restaurantes/excuir/:id" element={<FormRestaurante />} />
    </Routes>
  );
}

export default App;

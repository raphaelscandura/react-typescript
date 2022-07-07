import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/Administração/Restaurantes/AdministracaoRestaurante';
import FormRestaurante from './paginas/Administração/Restaurantes/FormRestaurante';
import TemplateAdmin from './paginas/Administração/TemplateAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin/' element={<TemplateAdmin/>}>
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurante />} />
        <Route path="restaurantes/editar/:id" element={<FormRestaurante />} />
        <Route path="restaurantes/excuir/:id" element={<FormRestaurante />} />
      </Route>
    </Routes>   
  );
}

export default App;

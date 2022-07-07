import { Routes, Route } from 'react-router-dom';
import AdministracaoRestaurantes from './paginas/Administração/Restaurantes/AdministracaoRestaurante';
import FormRestaurante from './paginas/Administração/Restaurantes/FormRestaurante';
import AdministracaoPratos from './paginas/Administração/Pratos/AdministracaoPratos';
import FormPrato from './paginas/Administração/Pratos/FormPrato';
import TemplateAdmin from './paginas/Administração/TemplateAdmin';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Home from './paginas/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin/' element={<TemplateAdmin/>}>
        {/* Administração de Restaurantes */}
        <Route path="restaurantes" element={<AdministracaoRestaurantes />} />
        <Route path="restaurantes/novo" element={<FormRestaurante />} />
        <Route path="restaurantes/editar/:id" element={<FormRestaurante />} />
        <Route path="restaurantes/excuir/:id" element={<FormRestaurante />} />

        {/* Administração de Pratos */}
        <Route path="pratos" element={<AdministracaoPratos />} />
        <Route path="pratos/novo" element={<FormPrato />} />
        <Route path="pratos/editar/:id" element={<FormPrato />} />
        <Route path="pratos/excuir/:id" element={<FormPrato />} />
      </Route>
    </Routes>   
  );
}

export default App;

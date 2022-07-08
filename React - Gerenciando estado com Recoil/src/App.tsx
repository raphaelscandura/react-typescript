import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import {RecoilRoot} from 'recoil';

function App() {

  //TODO: USE RECOIL TO REPLACE THIS PROP
  const alterarStatusEvento = (id: number) => {

  }
  
  //TODO: USE RECOIL TO REPLACE THIS PROP
  const aplicarFiltro = (data: Date | null) => {

  }

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario/>
          </Card>
          <hr />
          <Card>
            <ListaDeEventos aoFiltroAplicado={aplicarFiltro} aoAlterarStatus={alterarStatusEvento}/>
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;

import React from 'react';
import Form from '../../components/forms';
import List from '../../components/lists';
import style from './style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
    </div>
  );
}

export default App;

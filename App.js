import { Fragment } from 'react';
import Model from './Ui/Model';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Card/Card';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
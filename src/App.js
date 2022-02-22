import { Fragment, useContext } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import CartContext from './store/cart-context';

function App() {

  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {console.log(cartCtx.showCart)}
      {cartCtx.showCart && <Cart/>}
      <Header/>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;

import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    showCart : false
  };

  const cartReducer = (state,action) => {
      if (action.type === 'SHOW') {
          return {
              showCart: true
          }
      }

      if (action.type === 'HIDE') {
        return {
            showCart: false
        }
    }

    return defaultCartState;
  }



const CartProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const handleToggleCart = (toggleState) => {
        if(typeof toggleState === 'boolean' && toggleState){
            dispatchCartAction({ type: 'SHOW'})
        }
        else if(typeof toggleState === 'boolean' && !toggleState){
            dispatchCartAction({ type: 'HIDE'})
        }
    }

    const cartContext = {
        showCart : cartState.showCart,
        toggleCart: handleToggleCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
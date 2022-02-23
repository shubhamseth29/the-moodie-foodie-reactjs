import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    showCart : false,
    items:[],
    totalAmount:0
  };

  const cartReducer = (state,action) => {
      if (action.type === 'SHOW') {
          return {
              showCart: true,
              items: state.items,
            totalAmount: state.totalAmount
          }
      }

      if (action.type === 'HIDE') {
        return {
            showCart: false,
            items: state.items,
            totalAmount: state.totalAmount
        }
    }

    if (action.type === 'ADD'){
        const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
  
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
    
        if (existingCartItem) {
            const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            showCart: state.showCart,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          showCart: state.showCart,
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
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

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD' , item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
      };

    const cartContext = {
        showCart : cartState.showCart,
        toggleCart: handleToggleCart,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
import React from 'react';

const CartContext = React.createContext({
    showCart: false,
    toggleCart:(toggleState) => {}
});

export default CartContext;

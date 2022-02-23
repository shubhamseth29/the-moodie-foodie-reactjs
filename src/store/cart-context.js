import React from 'react';

const CartContext = React.createContext({
    showCart: false,
    toggleCart:(toggleState) => {},
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}

});

export default CartContext;

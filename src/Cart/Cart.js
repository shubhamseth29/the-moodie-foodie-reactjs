import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    const DUMMY_CART_DATA = [
        { 
            id: 'c1', 
            name: 'Sushi', 
            amount: 2, 
            price: 12.99 
        }
    ]

    const cartCtx = useContext(CartContext);

    const cartList = DUMMY_CART_DATA.map((item) => {
        return (
            <li key={item.id}>{item.name}</li>
        )
    });
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartList}
            </ul>

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={()=>{ cartCtx.toggleCart(false)}}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    return (
        <div className={classes.button} onClick={() => {cartCtx.toggleCart(true)}}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span className="cart">Your Cart</span>
            <span className={classes.badge}>0</span>
        </div>
    )
}

export default HeaderCartButton;
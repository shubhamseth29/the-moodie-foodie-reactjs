import React from 'react';
import food from './../assets/food.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={ classes.header}>
                  <h1>The Moodie Foodie</h1>
                <HeaderCartButton/>
            </header>
            
            <div className={classes['main-image']}>
                <img src={food}  alt='A table full of delicious food!'/>
            </div>
        </React.Fragment>
    )
}

export default Header;
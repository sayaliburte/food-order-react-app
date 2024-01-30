import { Fragment } from "react";
import meals from '../../assets/meals.jpg';
import classes from './Header.module.css';
const Header=()=>{
    return<Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <button></button>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt=""></img>
        </div>
    </Fragment>
}

export default Header;
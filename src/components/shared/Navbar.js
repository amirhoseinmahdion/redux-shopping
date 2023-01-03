import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const state = useSelector(state => state.cartState);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
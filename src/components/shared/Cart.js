import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Style
import styles from "./Cart.module.css";

// Actions
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';

const Cart = (props) => {

    const dispatch = useDispatch();
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container} >
            <img className={styles.productImage} src={image} />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decrease(props.data))} >-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))} ><img src={trashIcon} alt="trash" /></button>
                }
                <button onClick={() => dispatch(increase(props.data))} >+</button>
            </div>
        </div>
    );
};

export default Cart;
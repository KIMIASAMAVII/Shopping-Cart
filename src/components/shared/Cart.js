import React, { useContext } from "react";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Functions
import { shorten } from "../../helper/functions";

// Icons
import trashIcon from "../../assets/icons/trash.svg";
import deleteIcon from "../../assets/icons/delete.svg";

// Style
import styles from "./Cart.module.css";

export default function Cart(props) {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        <span className={styles.quantity}>{quantity}</span>
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
      <div className={styles.totalPrice}>{(quantity * price).toFixed(2)} $</div>
      <div className={styles.deleteContainer}>
        <img
          onClick={() =>
            dispatch({
              type: "REMOVE_ITEM",
              payload: props.data,
            })
          }
          src={deleteIcon}
          alt="delete"
        />
      </div>
    </div>
  );
}

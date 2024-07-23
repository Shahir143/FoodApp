import React from "react";
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import Classes from "./OrderItemLIst.module.css";

export default function OrderItemList({ order }) {
  return (
    <table className={Classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map((item) => {
          <tr key={item.food.id}>
            <td>
              <Link to={`/food/${item.food.id}`}>
                <img src={item.food.imageUrl} />
              </Link>
            </td>
            <td>{item.food.name}</td>
            <td>
              <Price price={item.food.price} />
            </td>
            <td>{item.Quantity}</td>
            <td>
              <Price price={item.price} />
            </td>
          </tr>;
        })}
        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
            <Price price={order.totalPrice} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

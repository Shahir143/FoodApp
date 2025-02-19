import React, { useState, useEffect } from "react";
import classes from "./Payment.module.css";
import { getNewOrderForCurr } from "../../services/orderService";
import { Title } from "../../components/Title/Title";
import OrderItemList from "../../components/OrderItemList/OrderItemList";
import Map from "../../components/Map/Map";
import PaypalButtons from "../../components/PaypalButtons/PaypalButtons";

export default function Payment() {
  const [order, setOrder] = useState();

  useEffect(() => {
    getNewOrderForCurr().then((data) => setOrder(data));
  }, []);

  if (!order) return;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="order form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <h3>Name</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address</h3>
              <span>{order.address}</span>
            </div>
            <OrderItemList order={order} />
          </div>
          <div className={classes.map}>
            <Title title="Your Location" fontSize="1.6rem" />
            <Map readonly={true} location={order.addressLatLng} />
          </div>
          <div className={classes.buttons_container}>
            <div className={classes.buttons}>
              <PaypalButtons order={order} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

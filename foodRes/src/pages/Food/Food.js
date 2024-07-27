import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Price from "../../components/Price/Price";
import StarRating from "../../components/StarRating/StarRating";
import Tags from "../../components/Tags/Tags";
import { useCart } from "../../hooks/useCart";
import { getById } from "../../services/foodService";
import classes from "./Food.module.css";
import NotFound from "../../components/NotFound/NotFound";

export default function Food() {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(food);
    navigate("/cart");
  };

  useEffect(() => {
    getById(id).then(setFood);
  }, [id]);

  return (
    <>
      {!food ? (
        <NotFound message="Food Not Found" linkText="back to message" />
      ) : (
        <div>
          <img
            className={classes.image}
            src={`${food.imageUrl}`}
            alt={food.name}
          />
          <div className={classes.details}>
            <div className={classes.header}>
              <span className={`${classes.name}`}>{food.name}</span>
              <span
                className={`${classes.favorite} ${
                  food.favorite ? "" : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div>
              <StarRating className={food.stars} size={25} />
            </div>
            <div className={classes.origins}>
              {food.origins?.map((origin) => {
                <span key={origin}>{origin}</span>;
              })}
            </div>
            <div className={classes.tags}>
              {food.tags && (
                <Tags
                  tags={food.tags.map((tag) => ({ name: tag }))}
                  forFoodPage={true}
                />
              )}
            </div>
            <div className={classes.cook_time}>
              <span>
                Time to cook about<strong>{food.cookTime}</strong>Minutes
              </span>
            </div>
            <div className={classes.price}>
              <Price price={food.price} />
            </div>
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}

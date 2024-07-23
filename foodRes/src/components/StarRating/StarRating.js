import React from "react";
import classes from "./StarRating.module.css";

export default function StarRating({ stars, size }) {
  const styles = {
    width: size + "px",
    height: size + "px",
    marginRight: size / 6 + "px",
  };
  function Star({ number }) {
    const halfNum = number - 0.5;

    return stars >= number ? (
      <img src="../../assest/icons/star-full.svg" style={styles} alt={number} />
    ) : stars >= halfNum ? (
      <img src="../../assest/icons/star-half.svg" style={styles} alt={number} />
    ) : (
      <img
        src="../../assest/icons/star-empty.svg"
        style={styles}
        alt={number}
      />
    );
  }

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((num) => (
        <Star key={num} number={num} />
      ))}
    </div>
  );
}
StarRating.defaultProps = {
  size: 18,
};

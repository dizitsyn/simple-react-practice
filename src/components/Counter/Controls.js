import React from "react";
import style from "./Controls.module.css";

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={style.containerButton}>
      <button
        type="button"
        onClick={onIncrement}
        className={style.counterButton}
      >
        Увеличить на 1
      </button>
      <button
        type="button"
        onClick={onDecrement}
        className={style.counterButton}
      >
        Уменьшить на 1
      </button>
    </div>
  );
};

export default Controls;

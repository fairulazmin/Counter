import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onDelete, onIncrement, onDecrement, onReset, counters } = props;

  return (
    <div className="mt-2">
      {counters.length != 0 && (
        <button
          onClick={onReset}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Reset
        </button>
      )}
      {counters.map((counter, id) => (
        <Counter
          key={id}
          index={id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;

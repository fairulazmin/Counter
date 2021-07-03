const Counter = (props) => {
  const { onIncrement, onDecrement, onDelete, counter, index } = props;

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    const { value } = counter;
    return (classes += value === 0 ? "warning" : "primary");
  };

  const formatCount = () => {
    let { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className="row">
      <div className="col-1 ">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col ">
        <button
          onClick={onIncrement}
          data-index={index}
          className="btn btn-secondary btn-sm "
        >
          +
        </button>
        <button
          onClick={onDecrement}
          data-index={index}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? true : false}
        >
          -
        </button>
        <button
          onClick={onDelete}
          data-index={index}
          className="btn btn-danger btn-sm "
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Counter;

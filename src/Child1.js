function Child1(props) {
  return (
    <div className="App" style={{ color: "blue" }}>
      Child1
      <div style={{ margin: 20, border: "1px solid" }}>
        {props.data[0] && (
          <button
            style={{ float: "left", margin: 20, color: "blue" }}
            onClick={(e) => props.handleClick1(props.data[0])}
          >
            {props.data[0]}
          </button>
        )}
        {props.data[1] && (
          <button
            style={{ float: "left", margin: 20, color: "blue" }}
            onClick={(e) => props.handleClick1(props.data[1])}
          >
            {" "}
            {props.data[1]}
          </button>
        )}
        {props.data[2] && (
          <button
            style={{ float: "left", margin: 20, color: "blue" }}
            onClick={(e) => props.handleClick1(props.data[2])}
          >
            {" "}
            {props.data[2]}
          </button>
        )}
      </div>
    </div>
  );
}

export default Child1;

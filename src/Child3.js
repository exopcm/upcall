function Child3(props) {
  return (
    <div className="App" style={{ color: "blue", margin: 50 }}>
      Child3
      <div style={{ margin: 20 }}>
        <ul>
          {props.data2[0] && (
            <a
              style={{
                // float: "left",
                margin: 20,
                fontSize: 18,

                // border: "1px solid",
              }}
              onClick={(e) => props.handleClick2(props.data2[0])}
            >
              {props.data2[0]}
            </a>
          )}
          {props.data2[1] && (
            <a
              style={{
                // float: "left",
                margin: 20,
                fontSize: 18,
                // border: "1px solid",
              }}
              onClick={(e) => props.handleClick2(props.data2[1])}
            >
              {props.data2[1]}
            </a>
          )}
          {props.data2[2] && (
            <a
              style={{
                // float: "left",
                margin: 20,
                fontSize: 18,
                // border: "1px solid",
              }}
              onClick={(e) => props.handleClick2(props.data2[2])}
            >
              {props.data2[2]}
            </a>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Child3;

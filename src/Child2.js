import Child3 from "./Child3";
function Child2(props) {
  return (
    <>
      <div className="App" style={{ color: "blue" }}>
        Child2
        <div style={{ margin: 20 }}>
          <ul>
            {props.data1[0] && (
              <a
                style={{
                  // float: "left",
                  margin: 20,
                  fontSize: 18,

                  // border: "1px solid",
                }}
                onClick={(e) => props.handleClick1(props.data1[0])}
              >
                {props.data1[0]}
              </a>
            )}
            {props.data1[1] && (
              <a
                style={{
                  // float: "left",
                  margin: 20,
                  fontSize: 18,
                  // border: "1px solid",
                }}
                onClick={(e) => props.handleClick1(props.data1[1])}
              >
                {props.data1[1]}
              </a>
            )}
            {props.data1[2] && (
              <a
                style={{
                  // float: "left",
                  margin: 20,
                  fontSize: 18,
                  // border: "1px solid",
                }}
                onClick={(e) => props.handleClick1(props.data1[2])}
              >
                {props.data1[2]}
              </a>
            )}
          </ul>
        </div>
      </div>
      <div style={{ position: "absolute" }}>
        <Child3
          data2={props.data2}
          handleClick1={props.handleClick1}
          handleClick2={props.handleClick2}
        />
      </div>
    </>
  );
}

export default Child2;

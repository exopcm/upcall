import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import { useEffect, useState } from "react";
import Header from "./Header";

const data = ["one", "two", "three"];

// function handleClick(x) {
//   console.log(data);
//   var index = data.indexOf(x);
//   delete data[index];
// }

function App() {
  const [data1, setData1] = useState(["one", "two", "three"]);
  const [data2, setData2] = useState(["four", "five", "six"]);
  const tempdata1 = data1;
  const tempdata2 = data2;

  function dup() {
    const nums = [1, 2, 3, 4, 5];
    let dupl = [];
    nums.map((x) => {
      if (dupl.indexOf(x) === -1) {
        dupl.push(x);
      } else console.log("dupl: " + true);
    });
  }

  const handleClick1 = (x) => {
    // setTimeout(() => {
    console.log(tempdata1);
    console.log(x);
    const arr = tempdata1.filter((item) => item !== x);
    setData1(arr);
  };
  const handleClick2 = (x) => {
    // setTimeout(() => {
    console.log(tempdata2);
    console.log(x);
    const arr = tempdata2.filter((item) => item !== x);
    setData2(arr);
  };

  const refresh = () => {
    console.log("refresh");
    setData1(["one", "two", "three"]);
    setData2(["four", "five", "six"]);
  };

  useEffect(() => {
    console.log("test dup: ");
    dup();
  });

  return (
    <Router>
      <Header refresh={refresh} />
      <div className="container">
        Parent:
        <ol>
          {data1.map((x) => (
            <li key={x} style={{ fontSize: 20 }}>
              {x}
            </li>
          ))}
        </ol>
        <ol>
          {data2.map((x) => (
            <li key={x} style={{ fontSize: 20 }}>
              {x}
            </li>
          ))}
        </ol>
        <Routes>
          {/* <div style={{ margin: 140, alignItems: "center" }}>
        <Child1 data={tempdata} handleClick={handleClick} />
      </div> */}
          {/* <div>
        <Child2 data={tempdata} handleClick={handleClick} />
      </div> */}
          <Route
            path="/c1"
            element={<Child1 data={tempdata1} handleClick1={handleClick1} />}
          />
          <Route
            path="/c2"
            element={
              <Child2
                data1={tempdata1}
                data2={tempdata2}
                handleClick1={handleClick1}
                handleClick2={handleClick2}
              />
            }
          />
          {/* <Route
            path="/c1"
            element={<Child3 data={tempdata} handleClick={handleClick} />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

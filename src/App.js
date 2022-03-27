import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>  Counter Pre-Post App    </h1>
          <div className="my-5">
            <h2 className="my-5" >  {count} </h2>
            <button className="btn btn-success mx-3" onClick = {()  => setCount(count + 1) } disabled= {count === 10}>+</button>
            <button className="btn btn-danger mx-3" onClick = {()  => setCount(count - 1)} disabled= {count === 0}>-</button>
            <button className="btn btn-secondary mx-3" onClick = {()  => setCount(0) }>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

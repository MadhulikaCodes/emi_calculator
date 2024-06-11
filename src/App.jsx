import React, { useState } from "react";
import data from "./Data.js";

const App = () => {
  const [toggle, setToggle] = useState(0);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="container">
            <div>
              <span>{item.ques}</span>
              <button
                onClick={() =>
                  toggle == item.id ? setToggle(0) : setToggle(item.id)
                }
              >
               {toggle==item.id ?'^':'#'}
              </button>
            </div>
            {toggle == item.id && <p>{item.ans}</p>}
          </div>
        );
      })}
    </>
  );
};

export default App;

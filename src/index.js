// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div style={{color:"red"}}>
//     hellooo
//   </div>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App/>
    </div>
  </React.StrictMode>
);


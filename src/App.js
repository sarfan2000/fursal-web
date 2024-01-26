import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Store from "./pages/Store.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Login from "./pages/Login.jsx";
import Registraion from "./pages/Registration.jsx";
import IndexStudent from "./pages/Student/IndexStudent.jsx";
import IndexTeacher from "./pages/Teacher/IndexTeacher.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Courts from "./pages/Courts.jsx";


function App() {
  if (localStorage.getItem("Role") === "student" && document.cookie) {
    return (
      <div>
        {console.log(localStorage.getItem('Role'))}
        <IndexStudent />
      </div>
    );
  } else if (localStorage.getItem("Role") === "teacher" && document.cookie) {
    return (
      <div>
        {console.log(localStorage.getItem('Role'))}
        <IndexTeacher />
      </div>
    );
  } else {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <NavigationBar />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "courts",
            element: <Courts />,
          },
          {
            path: "store",
            element: <Store />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "reg",
            element: <Registraion />,
          },
        ],
      },
    ]);
    return (
      <div>
        {console.log(localStorage.getItem('Role'))}
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    );
  }
}

export default App;

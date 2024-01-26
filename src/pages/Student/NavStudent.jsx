import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     display: "flex",
//     textDecoration: "none",
//     // height: "20px",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(2),
//     "&:hover": {
//       color: "black",
//     },
//   },
// }));

const NavStudent = () => {
  // const classes = useStyles();
  const logout = () => {
    alert("Are you sure to logout?");
    axios
      .post("http://localhost/20it0452/backend/logout.php")
      .then(function (response) {
        console.log(response.data);
        if (response.data === "fine") {
          document.cookie = "";
          localStorage.clear();
          window.location = "http://localhost:3000/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundImage: "linear-gradient(135deg, #191818 90%, #191818 100%)",
        }}
      >
        <CssBaseline />
        <Toolbar>
          <Typography
            variant="h5"
            className={{ flexGrow: "1", cursor: "pointer" }}
          >
            <span style={{ fontFamily: "BigNoodleTitling" }}>STUDENT MS</span>
          </Typography>
          <span style={{ marginRight: "20px", fontFamily: "BigNoodleTitling" }}>
            Hi {localStorage.getItem("Name")}:)
          </span>

          <div className={{ display: "flex", textDecoration: "none" }}>
            <Link
              to="/home"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              <button
                type="button"
                className="btn btn-warning btn-outline-dark"
              >
                Home
              </button>
            </Link>

            <Link
              to="/sresult"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              <button
                type="button"
                className="btn btn-warning btn-outline-dark"
              >
                Result
              </button>
            </Link>
            <Link
              to="/sprofile"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              <button
                type="button"
                className="btn btn-warning btn-outline-dark"
              >
                Profile
              </button>
            </Link>
            {/* <Link to="/login" className={{textDecoration: "none",
    color: "white",
    fontSize: "20px",}}> */}
            <button
              type="button"
              onClick={() => logout()}
              className="btn btn-warning btn-outline-dark"
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
            {/* </Link> */}
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default NavStudent;

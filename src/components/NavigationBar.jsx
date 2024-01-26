import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
import f1 from "../images/f1.png";

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
//       color: "white",
//     },
//   },
// }));

const NavigationBar = () => {
  // const classes = useStyles();

  return (
    <>
      <AppBar
        
        className=""
        position="sticky"
        style={{
          backgroundImage: "linear-gradient(135deg, #191818 90%, #191818 100%)" ,
        }}
      >
        <CssBaseline />
        <Toolbar className="">
          <Typography
            variant="h4"
            className={{ flexGrow: "1", cursor: "pointer" }}
          >
            <span style={{ fontFamily: "ABigDeal" }}>
              <img
                src={f1}
                alt="logo"
                style={{ width: "60px"  }}
                
                class="rounded-circle"
              />
            </span>
            <span> </span>
            <span style={{ fontFamily: "BigNoodleTitling" }}>
              TEAM FUTSAL
            </span>
          </Typography>

          <div className={{ display: "flex", textDecoration: "none" }} style={{marginLeft:"880px"}}>
          <Link
              to="/home"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                
              }}
            >
              <button type="button" className="btn btn-warning" >
                Home
              </button>
            </Link>
            <Link
              to="/courts"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                
              }}
            >
              <button type="button" className="btn btn-warning" style={{marginLeft:"20px"}}>
                Courts
              </button>
            </Link>
            <Link
              to="/store"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                
              }}
            >
              <button type="button" className="btn btn-warning"style={{marginLeft:"20px"}}>
                Store
              </button>
            </Link>

            <Link
              to="/reg"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                
              }}
            >
              <button type="button" className="btn btn-warning"style={{marginLeft:"20px"}}>
                Sign-Up
              </button>
            </Link>
            <Link
              to="/login"
              className={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                
              }}
            >
              <button type="button" className="btn btn-warning"style={{marginLeft:"20px"}}>
                Sign-In
              </button>
            </Link>
            {/* {localStorage.getItem('Role') ? <Link>logout</Link> :} */}
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
export default NavigationBar;

import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";

const Login = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      role: "",
      nic: "",
      pswd: "",
    },
    {
      role: "required",
      nic: "required",
      pswd: "required|between:6,15",
    }
  );

  const onSub = async (event) => {
    const isvalid = await form.validate(event);
    if (isvalid) {
      try {
        await axios
          .post("http://localhost/20it0452/backend/login.php", {
            role: fields.role,
            nic: fields.nic,
            password: fields.pswd,
          })
          .then(function (response) {
            if (response.data) {
              if (response.data.role === "student") {
                popupStudent(response.data);
              } else if (response.data.role === "teacher") {
                popupTeacher(response.data);
              } else {
                popuperror();
              }
            } else {
              popuperror();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const popupStudent = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);
    localStorage.setItem("Index", x.stuid);

    // setting cookie for student
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    toast.success("Student: Successfully Logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popupTeacher = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);

    // setting cookie for teacher
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    toast.success("Teacher: Successfully Logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popuperror = () => {
    toast.error("Incorrect Password and Username", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #C0BBB7 70%, #C0BBB7 100%)",
      }}
    >
      <section className="bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
                <div
                  className="card m-5 border border-white"
                  style={{
                    borderRadius: "35px",
                    backgroundImage:
                      "linear-gradient(135deg, #1D1E1F 70%, #1D1E1F 100%)",
                  }}
                >
                  <div className="card-body p-5">
                    <h3 className="text-uppercase text-center text-light">
                      <b>Login</b>
                    </h3>
                    <form
                      className="form-control border-0 text-light"
                      name="loginForm"
                      id="loginForm"
                      onSubmit={onSub}
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #1D1E1F 90%, #1D1E1F 100%)",
                      }}
                    >
                      <div className="mb-2">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="role"
                          name="role"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value="student"
                        />
                        <label style={{ marginLeft: "10px" }}>Student</label>

                        <input
                          type="radio"
                          className="form-check-input"
                          id="role2"
                          name="role"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value="teacher"
                          style={{ marginLeft: "30px" }}
                        />
                        <label style={{ marginLeft: "10px" }}>Teacher</label>
                        <br />

                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.role ? errors.role : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>NIC</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nic"
                          name="nic"
                          placeholder="Enter Your NIC or Passport number"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.nic}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.nic ? errors.nic : ""}
                        </label>
                      </div>
                      <div className="col-auto mb-4">
                        <label>Enter Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pswd"
                          name="pswd"
                          placeholder="Password"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.pswd}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.pswd ? errors.pswd : ""}
                        </label>
                      </div>
                      <div className="col-auto text-center">
                        <button type="submit" className="btn btn-primary mb-3">
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
      <Footer/>
    </div>
//     <section class="vh-100 gradient-custom">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//         <div class="card bg-dark text-white" style="border-radius: 1rem;">
//           <div class="card-body p-5 text-center">

//             <div class="mb-md-5 mt-md-4 pb-5">

//               <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
//               <p class="text-white-50 mb-5">Please enter your login and password!</p>

//               <div class="form-outline form-white mb-4">
//                 <input type="email" id="typeEmailX" class="form-control form-control-lg" />
//                 <label class="form-label" for="typeEmailX">Email</label>
//               </div>

//               <div class="form-outline form-white mb-4">
//                 <input type="password" id="typePasswordX" class="form-control form-control-lg" />
//                 <label class="form-label" for="typePasswordX">Password</label>
//               </div>

//               <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

//               <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

//               <div class="d-flex justify-content-center text-center mt-4 pt-1">
//                 <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
//                 <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
//                 <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
//               </div>

//             </div>

//             <div>
//               <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
  );
};
export default Login;

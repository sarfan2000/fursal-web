import { React, useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer";

import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const ProfileStudent = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost/20it0452/backend/getprofile.php", {
        role: localStorage.getItem("Role"),
        nic: localStorage.getItem("Nic"),
      })
      .then(function (response) {
        // console.log(response.data);
        setDetail(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
        {/* {console.log(detail)} */}
      <div
        style={{
          backgroundImage: "linear-gradient(135deg, #C0BBB7 70%, #C0BBB7 100%)",
        }}
      >
        <section className="vh-100" style={{  }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-4">
                <div className="card" style={{ borderRadius: "15px",backgroundColor: "#2A2A2A"  }}>
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4">
                      <img
                        alt="Profile"
                        src="https://cdn.pixabay.com/photo/2020/06/16/07/59/wallpaper-5304654_960_720.jpg"
                        className="rounded-circle img-fluid"
                        style={{ width: "100px" }}
                      />
                    </div>
                    <h4 className="mb-2 text-light">{detail.fname} {detail.lname}</h4>
                    <p className=" mb-2 text-light">
                    @{detail.role} <span className="mx-2">|</span>{" "}
                      <span>{detail.email}</span>
                    </p>
                    <p className=" mb-2 text-light">
                    NIC : {detail.nic}
                    </p>
                    <p className=" mb-2 text-light">
                    Student Id : {detail.stuid}
                    </p>
                    <p className=" mb-4 text-light">
                    Mobile Number : {detail.mobile}
                    </p>
                    <div className="mb-4 pb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating rounded-circle text-light"
                      >
                        <TfiFacebook />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating rounded-circle text-light"
                      >
                        <FaInstagram />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-floating rounded-circle text-light"
                      >
                        <FaLinkedin />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-rounded btn-lg"
                    >
                      Edit Profile
                    </button>
                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileStudent;

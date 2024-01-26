import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      {/* <div
        className="carousel-caption fixed-bottom"
        style={{ fontFamily: "BigNoodleTitling", color: "black" }}
      ></div> */}
      <footer className="text-center text-white border-white" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <div className="container p-3 pb-0" >
          <section className="mb-2">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/jawidh.barsl.3"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <FaFacebookSquare />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/jawidh0076/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <FaInstagram />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/jawidh-ahamed-a1533421a/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <FaLinkedin />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fontFamily: "BigNoodleTitling",
          }}
        >
          20IT0452
        </div>
      </footer>
    </div>
  );
};
export default Footer;
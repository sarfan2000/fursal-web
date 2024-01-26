import Footer from "../components/Footer";
import HM1 from "../images/HM1.jpg";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src={HM1} alt="New York" style={{ width: "100%" }} />
              <div
                className="carousel-caption"
                style={{ fontFamily: "BigNoodleTitling" }}
              >
                <div
                  className="carousel-caption"
                  style={{
                    fontFamily: "BigNoodleTitling",
                    color: "white",
                    border: "black",
                  }}
                >
                  <h1>“ Nothing is impossible ” </h1>
                  <h5>Ronaldo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-md-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus aut inventore harum fuga ipsum est eos dignissimos
            accusantium in numquam quisquam, ipsa officiis laboriosam sunt vel
            debitis consectetur ea nemo?
          </div>
          <div className="col-md-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            ad reiciendis reprehenderit ipsam voluptatibus tenetur adipisci,
            minus, odio ipsum beatae itaque. Neque consequatur laborum est enim
            nam! Veritatis, exercitationem eveniet!
          </div>
        </div>
        <div>
          <div className="homecontainer">
            <div className="background-image"></div>
            <div className="text-overlay">
              <h1>Your Text Here</h1>
              <p>Additional text goes here.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;

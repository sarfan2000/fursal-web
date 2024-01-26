import crt from "../images/courts.jpg";
import Footer from "../components/Footer";
const Courts = () => {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={crt} alt="New York" style={{ width: "100%" }} />
            <div
              className="carousel-caption"
              style={{ fontFamily: "BigNoodleTitling", color: "white", border:"black" }}
            >
              <h1>“ The whole purpose of education is to turn mirrors into windows y” </h1>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Courts;

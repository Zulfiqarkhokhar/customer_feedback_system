import banner from "../assets/banner.jpg";
import "../styles/herosection.css";

function HeroSection() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-3">
        <img className="banner" src={banner}></img>
      </div>
    </>
  );
}
export default HeroSection;

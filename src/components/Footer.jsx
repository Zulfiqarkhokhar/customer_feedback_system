import "../styles/footer.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <>
      <div className="container-fluid footer-container">
        <div className="m-5">
          <h3>SHOP EASY</h3>
          <p>
            Welcome to SHOP EASY—your one-stop online destination for quality
            products at unbeatable prices. Enjoy a seamless shopping experience
            with fast shipping and exceptional customer service. Shop easy, shop
            smart, only at SHOP EASY!
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={facebook} alt="Facebook" className="social-icon-img" />
            </a>
            <a
              href="https://www.instagram.com/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="social-icon-img"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={linkedin} alt="LinkedIn" className="social-icon-img" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

import "../styles/Footer.css";
import FooterSVG from "../assets/footer-wave.svg";

const Footer = () => {
  return (
    <>
      <div className="wave footer-wave-containter">
        <img className="footer-wave" src={FooterSVG}></img>
      </div>
      <footer>
        <div className="mainFooter">
          <div className="footer-category">
            <h5>Godziny otwarcia</h5>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
          <div className="footer-category">
            <h5>Kontakt</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            incidunt!
          </div>
          <div className="footer-category">
            <h5>Adresy </h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            incidunt!
          </div>
        </div>
        <div className="footerFooter">© 2023 Dom Kwiatów</div>
      </footer>
    </>
  );
};

export default Footer;

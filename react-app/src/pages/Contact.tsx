import TitleUnderlined from "../components/TitleUnderlined";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <TitleUnderlined priority="1">Kontakt</TitleUnderlined>
      <p>Śmiało skontaktuj się z nami:</p>
      <section id="contact-us">
        <article>
          <TitleUnderlined priority="4">Skontaktuj się:</TitleUnderlined>
          <address>
            <i className="fa-solid fa-location-dot"></i>
            <a href="https://maps.app.goo.gl/SvwHMn8LxbwK93Rr7">
              Pruszcz Gdański ul. Spokojna 14
            </a>
          </address>
          <div id="phone-numbers">
            <b>Telefon</b>
            <div>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:789412707">789 412 707</a>
            </div>
            <div>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <a href="tel:536743380">536 743 380</a>
            </div>
          </div>
          <div id="links">
            <b>Linki</b>
            <div>
              <i className="fa-solid fa-envelope"></i>domkiwatow@vp.pl
            </div>
            <div>
              <i className="fa-brands fa-square-facebook"></i>
              <a href="https://www.facebook.com/profile.php?id=100063239497413">
                fb/domkwiatow
              </a>
            </div>
          </div>
        </article>

        <article>
          <div id="open-hours">
            <TitleUnderlined priority="4">Godziny otwarcia:</TitleUnderlined>
            <p>Pon. 8:00 - 19:00</p>
            <p>Wt. 8:00 - 19:00</p>
            <p>Śr. 8:00 - 19:00</p>
            <p>Czw. 8:00 - 19:00</p>
            <p>Pt. 8:00 - 19:00</p>
            <p>
              <b>Sob. 9:00 - 18:00</b>
            </p>
            <p>
              <b>Ndz. 9:00 - 18:00</b>
            </p>
          </div>
        </article>
      </section>
      <article id="iframe-section">
        <TitleUnderlined priority="3">Znajdziesz nas tutaj!</TitleUnderlined>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145.66359390088112!2d18.623719523879746!3d54.257652862350845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd71c2569b9cd9%3A0x72ec4409677f86d5!2sDom%20Kwiat%C3%B3w!5e0!3m2!1sen!2spl!4v1712957910820!5m2!1sen!2spl"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </article>
      <section id="contact-form">TODO: FORM</section>
    </>
  );
};

export default Contact;

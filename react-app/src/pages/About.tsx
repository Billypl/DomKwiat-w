import TitleUnderlined from "../components/TitleUnderlined";
import IconCard from "../components/IconCard";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <main>
        <section id="about">
          <article>
            <TitleUnderlined priority="2"> O nas </TitleUnderlined>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae doloremque asperiores, ipsa harum sit nemo sunt? Fugit eos
            molestiae nesciunt dolores! Laboriosam fugiat neque iure voluptatum
            itaque accusamus cumque!
          </article>
          <div>
            <img className="imgPlaceholder"></img>
            <article>
              <TitleUnderlined priority="3"> Test </TitleUnderlined>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              mollitia a minima ullam, possimus placeat consectetur consequatur
              labore eveniet eligendi quibusdam. Pariatur fuga debitis molestiae
              aliquid praesentium asperiores, ea inventore.
            </article>
          </div>
        </section>
        <section id="why-us">
          <h2>Dlaczego my?</h2>
          <article>
            <IconCard
              title="Najlepsza kwiaciarnia w Pruszczu"
              icon="fa-solid fa-trophy"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              facilis, ipsam magni voluptates error maiores repellat similique
              impedit nemo pariatur!
            </IconCard>
            <IconCard
              title="Najlepsza kwiaciarnia w Pruszczu"
              icon="fa-solid fa-trophy"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              facilis, ipsam magni voluptates error maiores repellat similique
              impedit nemo pariatur!
            </IconCard>
            <IconCard
              title="Najlepsza kwiaciarnia w Pruszczu"
              icon="fa-solid fa-trophy"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              facilis, ipsam magni voluptates error maiores repellat similique
              impedit nemo pariatur!
            </IconCard>
          </article>
        </section>
      </main>
    </>
  );
};

// o naszej firmie
// dlaczego my?

export default About;

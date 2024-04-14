import PopCard from "../components/PopCard";
import "../styles/Flower-machines.css";

const flowerMachineImages = Object.values(
  import.meta.glob("@assets/kwiatomaty/*.{png,jpg,jpeg,PNG,JPEG}", {
    eager: true,
    as: "url",
  })
);

console.log(flowerMachineImages);

const FlowerMachines = () => {
  return (
    <>
      <section id="flower-machines-description">
        <h1>Kwiatomaty</h1>
        <article>
          <b>Czym są kwiatomaty?</b> Dla tych co jeszcze nie znają/nie wiedzą
          czym jest
          <i>
            <b> #KWIATOMAT</b>
          </i>
          . Jest to urządzenie chłodnicze działające 24h przez 7dni ze stałą,
          idealną temperaturą, w których znajdują się gotowe kompozycje,
          bukiety, flower boxy, wieczne róże wykonane przez nas z najwyższej
          jakości kwiatów z dbałością o każdy szczegół!
          <p>💚Tworzymy z pasją, sercem i zaangażowaniem💚</p>
          <p>
            💚
            <cite>
              Wasze zadowolenie, jakość i trwałość to dla nas piorytet!
            </cite>
            💚
          </p>
        </article>
      </section>
      <section id="flower-machines-gallery">
        <h3>Lokalizacje</h3>
        <article>
          <PopCard
            imgSrc={"../assets/kwiatomaty/kwiatomat-przy-lidlu.jpg"}
            title="ul. Bajki 2"
            subtitle="Rotmanka"
            description="przy piekarni Cymes"
          />
          <PopCard
            imgSrc={"../assets/kwiatomaty/kwiatomat-bank.jpg"}
            title="ul. Wojska Polskiego 38"
            subtitle="Pruszcz Gdański"
            description="przy banku PKO"
          />
          <PopCard
            imgSrc={"../assets/kwiatomaty/kwiatomat-noca.jpg"}
            title="ul. Chopina 36"
            subtitle="Pruszcz Gdański"
            description="przy centrum handlowym Arbat"
          />
          <PopCard
            imgSrc={"../assets/kwiatomaty/lotnisko.jpg"}
            title="ul. J. Słowackiego 200"
            subtitle="Gdańsk"
            description="lotnisko, terminal"
          />
        </article>
      </section>
      <section id="flower-machines-instructions">
        <h3>Instrukcja korzystania</h3>
        <ol>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ol>
      </section>
      <section>
        <article>
          <h3>Mapka</h3>
          <ul>
            <li>Ul Wojska Polskiego 38 Pruszcz Gd przy banku PKO</li>
            <li>Ul Chopina 36 Pruszcz Gd przy centrum handlowym Arbat</li>
            <li>Ul Bajki 2 Rotmanka przy piekarni Cymes </li>
            <li>
              Ul J.Słowackiego 200 Gdańsk Lotnisko terminal przylotów/odlotów
            </li>
          </ul>
        </article>
        <article id="iframe-section">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1NhUDGadLev64pLvmT_vQaYaKXMEltoE&ehbc=2E312F&noprof=1"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </article>
      </section>
    </>
  );
};

export default FlowerMachines;

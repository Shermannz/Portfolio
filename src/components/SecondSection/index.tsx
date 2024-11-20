import pesca2 from "../../assets/pesca2.png";
import "./styles.css";

export default function SecondSection() {
  return (
    <>
      <section id="sobre" className="second-section">
        <div className="sobre">
          <div className="pesca2">
            <img src={pesca2} alt="abc" />
          </div>
          <div className="sobre-main">
            <h1>Minha Jornada</h1>
            <p>
              Minha Historia com a tecnologia começou em 2021 quando por pura
              curiosidade estudei sobre sistemas.
            </p>
            <p className="paragrafo">
              A partir dai iniciei meus estudos na area e em 2023 ja estava bem
              familiarizado com a tecnologia que decidi seguir a profissão.
            </p>
            <p className="paragrafo">
              Atualmente eu curso Analise e desenvolvimento de sistemas e sigo
              estudando.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

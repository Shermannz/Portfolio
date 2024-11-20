import pesca from "../../assets/foto.jpg";
import "./styles.css";

export default function FirstSection() {
  return (
    <>
      <section id="inicio" className="main-section">
        <div className="apresentacao">
          <img src={pesca} alt="" />
          <div className="apresentacao-composto">
            <h1>Oi, eu sou Robson</h1>
            <hr />
            <h1>Um Desenvolvedor Java</h1>
          </div>
        </div>
      </section>
    </>
  );
}

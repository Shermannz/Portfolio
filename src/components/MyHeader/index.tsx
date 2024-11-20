import "./styles.css";

export default function MyHeader() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <a href="#inicio">
              <li>Inicio</li>
            </a>
            <a href="#skills">
              <li>Habilidades</li>
            </a>
            <a href="#contatos">
              <li>Contatos</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

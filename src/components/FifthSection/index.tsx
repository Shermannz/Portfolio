import Email from "../../assets/icons/email.png";
import Github from "../../assets/icons/github220.png";
import Linkedin from "../../assets/icons/linkedin.png";
import "./styles.css";
export default function FifthSection() {
  //
  // ÓDIOOOOOO AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  //
  // const handleFunc = function (x: Projeto) {
  //   const style = document.querySelectorAll(".projeto");
  //   const details = document.querySelector(".desc");
  //   let listaBruta = document.querySelectorAll(".lista li");

  //   details!.innerHTML = x.descricao;
  //   for (let i = 0; i < x.tecnologias.length; i++) {
  //     listaBruta[i].innerHTML = x.tecnologias[i];
  //   }
  //   style.forEach((x) => x.classList.remove("ativo"));
  //   style[x.id - 1].classList.add("ativo");
  // };

  return (
    <>
      <section id="contatos" className="fifth-section">
        <h1>Mantenha Contato</h1>
        <div className="fifth-organizacao-projetos">
          <div className="fifth-imgs">
            <a href="https://www.linkedin.com/in/robson-cardoso-faraco-8aaa3422b/">
              <img id="img1" src={Linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Shermannz">
              <img id="img2" src={Github} alt="github" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=robsonfaraco@gmail.com&su=Assunto%20do%20Email">
              <img id="img3" src={Email} alt="email" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

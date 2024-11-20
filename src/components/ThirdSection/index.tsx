import { PescaSkills } from "../../models/skills";
import Skill from "./Skill";
import "./styles.css";
export default function ThirdSection() {
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
      <section id="skills" className="third-section">
        <div className="third-organizacao-projetos">
          {PescaSkills.map((x) => (
            <div key={x.id}>
              <Skill skills={x} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

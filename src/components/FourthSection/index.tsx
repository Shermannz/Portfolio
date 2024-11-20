import { useState } from "react";
import { Projeto } from "../../models/projeto";
import { Projetos } from "../../models/projetos";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import "./styles.css";
export default function FourthSection() {
  const [desc, setDesc] = useState<Projeto>();
  const handleFunc = function (x: Projeto) {
    const style = document.querySelectorAll(".projeto");
    style.forEach((x) => x.classList.remove("ativo"));
    style[x.id - 1].classList.add("ativo");
    setDesc(x);
  };

  return (
    <>
      <section id="projetos" className="fourth-section">
        <div className="organizacao-projetos">
          {Projetos.map((x) => (
            <div
              key={x.id}
              onClick={() => {
                // handleFunc(x);
                handleFunc(x);
              }}
            >
              <Project nome={x.nome} data={x.data} link={x.link} />
            </div>
          ))}
          <ProjectDetails desc={desc} />
        </div>
      </section>
    </>
  );
}

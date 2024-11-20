import { Projeto } from "../../../models/projeto";
import "./styles.css";

type Props = {
  desc?: Projeto;
};

export default function ProjectDetails({ desc }: Props) {
  return (
    <>
      <div>
        <div className="descricao-projeto">
          <div>
            <h1>Descrição do Projeto:</h1>
            <p className="desc">
              {desc?.descricao}
              <br />
            </p>
          </div>
          <hr />
          <div className="lista-titulo">
            <h1>Tecnologias usadas:</h1>
            <ul className="lista">
              {desc?.tecnologias.map((x) => <li>{x}</li>) || [
                <li></li>,
                <li></li>,
                <li></li>,
                <li></li>,
                <li></li>,
                <li></li>,
              ]}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

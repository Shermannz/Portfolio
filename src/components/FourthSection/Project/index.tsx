import github from "../../../assets/github.png";
import "./styles.css";

type Props = {
  nome: string;
  data: string;
  link: string;
};

export default function Project({ nome, data, link }: Props) {
  return (
    <>
      <div>
        <div className="projeto">
          <div>
            <a href={link}>
              <img src={github} alt="github" />
            </a>
            <h1>{nome}</h1>
          </div>
          <div className="data">
            <h3>{data}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

import { PescaSkill } from "../../../models/skill";
import "./styles.css";

type Props = {
  skills: PescaSkill;
};

export default function Skill({ skills }: Props) {
  return (
    <>
      <div>
        <div className="skill">
          <div>
            <h1>{skills.titulo}</h1>
          </div>
          <div className="skill-details">
            <ul>
              {skills.skills.map((x) => [<li>{x}</li>]) || [
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

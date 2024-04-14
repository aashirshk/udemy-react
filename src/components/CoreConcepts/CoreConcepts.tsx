import CoreComponentProps from "../../data";
import "./CoreConcepts.css";
export default function CoreConcepts(props: CoreComponentProps) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p className="concepts-title">{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

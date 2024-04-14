import ExampleType from "../example_data";

export default function ExampleDescription(props: ExampleType) {
  return (
    <>
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
      <pre>
        <code>{props.example}</code>
      </pre>
    </>
  );
}

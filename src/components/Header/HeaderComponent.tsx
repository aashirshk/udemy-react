import reactlogo from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const reactDescription: Array<String> = ["Fundamental", "Crucial", "Core"];

  function getRandomDescription(description: Array<String>): String {
    let randomNumber: number = Math.floor(Math.random() * description.length);
    return description[randomNumber];
  }
  return (
    <header>
      <img src={reactlogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomDescription(reactDescription)} React concepts you will need
        for almost any app you are going to build!
      </p>
    </header>
  );
}

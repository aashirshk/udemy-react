export default interface ExampleType {
  title: string;
  description: string;
  example: string;
}

export const Examples: Array<ExampleType> = [
  {
    title: "Component",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    example: `
    function Welcome() {
      return <h1>Hello, World!</h1>;
    }`,
  },
  {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    example: `
        <div>
            <h1>Welcome {userName}</h1>
            <p>Time to learn React!</p>
        </div>
    `,
  },
  {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    example: `
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    example: `
    function Counter() {
      const [isVisible, setIsVisible] = useState(false);
    
      function handleClick() {
        setIsVisible(true);
      }
    
      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,
  },
];

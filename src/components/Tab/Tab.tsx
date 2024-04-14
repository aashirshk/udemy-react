import Button from "./Button/Button";
import "./Tab.css";

interface TabProps {
  buttons: Array<string>;
  onClick: (arg1: number) => void;
  selectedIndex: number;
}

export default function Tab(props: TabProps) {
  //   let button_labels: Array<string> = ["Components", "JSX", "Props", "State"];
  return (
    <menu>
      {props.buttons.map((label: string, index: number) => {
        return (
          <Button
            onClick={() => props.onClick(index)}
            isSelected={props.selectedIndex === index}
            key={index}
          >
            {label}
          </Button>
        );
      })}
    </menu>
  );
}

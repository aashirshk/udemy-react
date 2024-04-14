interface ButtonProps {
  isSelected: boolean;
  onClick: () => void;
  children: string;
}

export default function Button(props: ButtonProps) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  );
}

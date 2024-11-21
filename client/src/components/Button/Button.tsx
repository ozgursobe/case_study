import "./button.css";

interface IButton {
  style: {
    bg_color: string;
    width: string;
    height: string;
  };
  handleColor: () => void;
}

const Button = ({ style, handleColor }: IButton) => {
  return (
    <button
      style={{
        backgroundColor: style.bg_color,
        width: style.width,
        height: style.height,
      }}
      onClick={handleColor}
    ></button>
  );
};

export default Button;

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
  }
  
  const Button = ({ text, onClick, className = "" }: ButtonProps) => {
    return (
      <button
        className={`px-4 py-2 rounded-md transition duration-300 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
// components/FilterButton.tsx
interface Props {
    onClick: () => void;
    label: string;
  }
  
  export const Button = ({ onClick, label }: Props) => {
    return (
      <button
        type="button"
        className="btn-primary"
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
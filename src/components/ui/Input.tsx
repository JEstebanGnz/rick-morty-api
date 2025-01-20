// components/InputField.tsx
interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string
  }
  
  export const Input = ({ value, onChange, placeholder, className }: Props) => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${className}`}
        placeholder={placeholder}
      />
    );
  };
  
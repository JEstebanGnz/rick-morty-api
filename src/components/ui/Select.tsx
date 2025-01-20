interface Props {
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const Select = ({onChange, placeholder, className}: Props) => {
  return (
    <div>
      <label htmlFor="property" className={`mr-2 font-bold ${className}`}>
        {placeholder}
      </label>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="gender">Gender</option>
        <option value="status">Status</option>
        <option value="species">Species</option>
      </select>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const RadioButton = ({ id, label, name, value, checked, onChange }) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;

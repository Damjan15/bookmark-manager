const InputField = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  onBlur,
  error = "",
  disabled = false,
  required = false,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label htmlFor={id} className="input-label text-neutral-900">
          {label}
          {required && <span className="ml-2 text-teal-700">*</span>}
        </label>
      )}

      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className="input input-field"
      />

      {error && <p className="input-error text-red-800">{error}</p>}
    </div>
  );
};

export default InputField;

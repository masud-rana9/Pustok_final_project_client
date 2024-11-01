const AppFormTextarea = ({
  label,
  defaultValue,
  readOnly,
  error,
  placeholder,
  required,
  name,
  register,
}) => {
  return (
    <>
      {readOnly ? (
        <div className="bg-[#f9f8f8] rounded select-none border border-[#D0D2D5] h-11 2xl:h-12 w-full flex items-center min-w-[200px] px-3 2xl:px-4 py-2.5 font-sans text-base 2xl:text-lg font-normal text-textBlack/50">
          {defaultValue}
        </div>
      ) : (
        <>
          <div className="relative float-label-input w-full min-w-[200px]">
            <label className="text-[20px] text-[#475569]" htmlFor={name}>
              {label}
              {required ? "*" : ""}
            </label>
            <textarea
              id={name}
              rows={5}
              {...register(name, { ...(required && { required: true }) })}
              className={`outline-none border p-3 rounded-lg w-full text-[16px] ${
                error ? "border-red-500" : "border-borderColor"
              }`}
              placeholder={placeholder}
            />
            {error && (
              <p className="text-sm text-red-500 text-left">
                {label || name} is required
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AppFormTextarea;

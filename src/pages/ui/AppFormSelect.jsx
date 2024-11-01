import { Select } from "antd";
import { Controller } from "react-hook-form";

const AppFormSelect = ({
  name,
  size = "large",
  control,
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  required,
  handleChange,
  className,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={
        required
          ? {
              required: `${name} field is required`,
            }
          : undefined
      }
      defaultValue={defaultValue}
      render={({ field: { value: renderValue, onChange }, fieldState }) => (
        <div className="flex flex-col items-start justify-normal gap-2 w-full">
          {label && (
            <label
              className="text-[20px] text-left text-[#475569]"
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            popupClassName="capitalize"
            className={`${className ? className : ""}`}
            options={options}
            value={value ? value : renderValue}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
          {fieldState.error && (
            <p className="text-sm text-red-500 font-normal">
              {fieldState.error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default AppFormSelect;

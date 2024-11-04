import { Link } from "react-router-dom";

const AppButton = ({
  label,
  className = "",
  children,
  type = "button",
  href,
  variant = "filled",
  icon,
  iconPosition = "right",
  onClick,
  disabled = false,
}) => {
  const filledClass =
    "border border-primary bg-primary/90 text-white px-4 py-1.5 rounded-full hover:bg-primary transition-all active:scale-95";
  const outlineClass =
    "text-primary px-4 py-1.5 rounded-full border border-primary hover:bg-primary hover:border-primary hover:text-white transition-all active:scale-95";
  const noDesignClass =
    "text-white/80 px-4 py-1.5 hover:text-white transition-all active:scale-95";

  // Combine the appropriate classes based on variant and icon
  const buttonClass = [
    icon && "flex items-center gap-2", // Add icon class if icon is provided
    variant === "filled"
      ? filledClass
      : variant === "outlined"
      ? outlineClass
      : noDesignClass,
    "max-sm:text-sm min-w-fit",
    className,
  ]
    .filter(Boolean) // Removes any falsy values from the array
    .join(" "); // Joins the class names into a single string

  return href ? (
    <Link to={disabled ? "" : href} className="block cursor-pointer min-w-fit">
      <button className={buttonClass} type={type} disabled={disabled}>
        {iconPosition === "left" && icon} {label}{" "}
        {iconPosition === "right" && icon}
      </button>
    </Link>
  ) : (
    <button
      disabled={disabled}
      className={buttonClass}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {iconPosition === "left" && icon} {label} {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default AppButton;

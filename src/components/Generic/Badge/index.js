import PropTypes from "prop-types";

const Badge = ({
  children,
  className,
  startIcon,
  endIcon,
  type = "primary",
}) => {
  if (type === "primary") {
    return (
      <span
        className={`badge badge-primary text-sm rounded-sm px-2 py-1 bg-primaryLight text-white shadow border border-gray-100 ${className}`}
      >
        {startIcon && <span className="mr-1">{startIcon}</span>}
        {children && <span>{children}</span>}
        {endIcon && <span className="ml-1">{endIcon}</span>}
      </span>
    );
  }

  if (type === "secondary") {
    return (
      <span
        className={`badge badge-secondary flex items-center justify-center text-sm rounded-sm px-2 py-1 text-gray-600 shadow border border-gray-200 ${className}`}
      >
        {startIcon && <span className="mr-1">{startIcon}</span>}
        {children && <span>{children}</span>}
        {endIcon && <span className="ml-1">{endIcon}</span>}
      </span>
    );
  }
};

Badge.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Badge;

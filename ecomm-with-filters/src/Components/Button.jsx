/* eslint-disable react/prop-types */
const Button = ({
  title,
  bgColor = "bg-transparent",
  textColor = "text-lightWhite",
  textHoverColor = "text-mutedWhite",
  changeBgHoverColor,
  handleClick,
  value,
}) => {
  return (
    <button
      className={`py-2 px-5 ${textColor} ${bgColor} border border-lightWhite rounded-md cursor-pointer transition-colors duration-300 ease-linear hover:${
        !changeBgHoverColor ? "bg-lightBlack/75" : "bg-myTeal/75"
      } hover:${textHoverColor} hover:border-myTeal`}
      value={value}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;

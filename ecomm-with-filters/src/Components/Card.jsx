// import { FaStar } from "react-icons/fa6";
import Button from "../Components/Button";

// eslint-disable-next-line react/prop-types
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="flex flex-col gap-2 bg-lightBlack w-60 rounded-md lg:rounded-lg shadow-md p-2">
      <img src={img} alt={title} className="w-full h-36 object-cover" />
      <h3 className="font-semibold text-lg">{title}</h3>
      {/* price */}
      <div>
        <p className=" text-xl md:text-2xl font-bold text-mutedWhite">
          ${newPrice}
        </p>
        <span className="line-through">{prevPrice}</span>
      </div>
      {/* rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {/* <FaStar color="#FABC3F" />
          <FaStar color="#FABC3F" />
          <FaStar color="#FABC3F" />
          <FaStar color="#FABC3F" />
          <FaStar /> */}
          {star}
        </div>
        <span>{reviews}</span>
      </div>
      {/* add to cart btn */}
      <Button title={"Add to cart"} changeBgHoverColor={true} />
    </div>
  );
};

export default Card;

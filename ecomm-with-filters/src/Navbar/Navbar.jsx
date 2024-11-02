// icons
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Navbar = ({ query, handleInputChange }) => {
  return (
    <nav className="w-full flex items-center justify-between">
      <div>
        <input
          type="text"
          name="product-name-input"
          id="product-name-input"
          placeholder="Search by product name"
          className="outline-none bg-lightBlack py-2 px-6 rounded-sm md:rounded-md border border-lightWhite w-96"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      {/* random icons: just for appearence */}
      <div className="flex items-center gap-6">
        <FaCartShopping size={20} />
        <FaHeart size={20} />
        <FaUser size={20} />
      </div>
    </nav>
  );
};

export default Navbar;

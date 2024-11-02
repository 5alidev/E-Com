// components
import RadioButton from "../Components/RadioButton";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleChange }) => {
  return (
    <div className="bg-lightBlack py-10 px-16 flex flex-col gap-8 flex-1">
      {/* logo */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-mutedWhite font-serif">
        Filter It.
      </h1>
      {/* categories filter */}
      <div className="flex flex-col gap-4">
        <span className="text-lg md:text-xl">Category</span>
        <div className="flex flex-col gap-1">
          <RadioButton
            id={"category-id-all"}
            label={"All"}
            name={"by-category"}
            value={"all"}
            onChange={handleChange}
          />
          <RadioButton
            id={"category-id-sneakers"}
            label={"Sneakers"}
            name={"by-category"}
            value={"sneakers"}
            onChange={handleChange}
          />
          <RadioButton
            id={"category-id-flats"}
            label={"Flats"}
            name={"by-category"}
            value={"flats"}
            onChange={handleChange}
          />
          <RadioButton
            id={"category-id-sandals"}
            label={"Sandals"}
            name={"by-category"}
            value={"sandals"}
            onChange={handleChange}
          />
          <RadioButton
            id={"category-id-heels"}
            label={"Heels"}
            name={"by-category"}
            value={"heels"}
            onChange={handleChange}
          />
        </div>
        {/* by price */}
        <span className="text-lg md:text-xl">Price</span>
        <div className="flex flex-col gap-1">
          <RadioButton
            id={"price-id-all"}
            label={"All"}
            name={"by-price"}
            value={"all"}
            onChange={handleChange}
          />
          <RadioButton
            id={"price-id-50"}
            label={"$0 - $50"}
            name={"by-price"}
            value={"50"}
            onChange={handleChange}
          />
          <RadioButton
            id={"price-id-100"}
            label={"$50 - $100"}
            name={"by-price"}
            value={"100"}
            onChange={handleChange}
          />
          <RadioButton
            id={"price-id-150"}
            label={"$100 - $150"}
            name={"by-price"}
            value={"150"}
            onChange={handleChange}
          />
          <RadioButton
            id={"price-id-over-150"}
            label={"Over $150"}
            name={"by-price"}
            value={"200"}
            onChange={handleChange}
          />
        </div>
        {/* by colors */}
        <span className="text-lg md:text-xl">Colors</span>
        <div className="flex flex-col gap-1">
          <RadioButton
            id={"color-id-all"}
            label={"All"}
            name={"by-colors"}
            value={"all"}
            onChange={handleChange}
          />
          <RadioButton
            id={"color-id-black"}
            label={"Black"}
            name={"by-colors"}
            value={"black"}
            onChange={handleChange}
          />
          <RadioButton
            id={"color-id-blue"}
            label={"Blue"}
            name={"by-colors"}
            value={"blue"}
            onChange={handleChange}
          />
          <RadioButton
            id={"color-id-red"}
            label={"Red"}
            name={"by-colors"}
            value={"red"}
            onChange={handleChange}
          />
          <RadioButton
            id={"color-id-green"}
            label={"Green"}
            name={"by-colors"}
            value={"green"}
            onChange={handleChange}
          />
          <RadioButton
            id={"color-id-white"}
            label={"white"}
            name={"by-colors"}
            value={"white"}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

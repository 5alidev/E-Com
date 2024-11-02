import Button from "../Components/Button";

// eslint-disable-next-line react/prop-types
const Recommended = ({ handleClick }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl md:text-2xl font-semibold">Recommended</h2>
      {/* filter Buttons */}
      <div className="flex items-center gap-2">
        <Button value={""} title={"All Products"} handleClick={handleClick} />
        <Button value={"Nike"} title={"Nike"} handleClick={handleClick} />
        <Button value={"Adidas"} title={"Adidas"} handleClick={handleClick} />
        <Button value={"Puma"} title={"Puma"} handleClick={handleClick} />
        <Button value={"Vans"} title={"Vans"} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Recommended;

// eslint-disable-next-line react/prop-types
const Products = ({ resultRender }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {resultRender}
    </div>
  );
};

export default Products;

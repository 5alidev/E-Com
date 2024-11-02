import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

// data import
import data from "./Database/data";
import Card from "./Components/Card";

// uuid
import { v4 as uuid } from "uuid";

function App() {
  // sidebar category filter
  const [selectedCategory, setSelectedCategory] = useState(null);
  // navbar input:text filter
  const [query, setQuery] = useState("");

  // handlers
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // filter items by input text
  const filteredData = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // sidebar: radio filtering
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // buttons filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // filter and render data
  const filterData = (data, selected, query) => {
    let filteredProducts = data;

    if (query) {
      filteredProducts = filteredData;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // render data
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={uuid()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const resultRender = filterData(data, selectedCategory, query);

  return (
    <main className="bg-backgroundBlack w-full flex min-h-screen text-lightWhite">
      <Sidebar handleChange={handleChange} />
      <div className="flex flex-col py-10 px-16 flex-[6] gap-6">
        <Navbar query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products resultRender={resultRender} />
      </div>
    </main>
  );
}

export default App;

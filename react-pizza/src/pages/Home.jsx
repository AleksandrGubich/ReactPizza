import React from "react";

import Categories from "../components/Categories/Categories";
import PizzaBlockSkeleton from "../components/PizzaBlockSkeleton/PizzaBlockSkeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort/Sort";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности (DESC)",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryID > 0 ? `category=${categoryID}` : "";

    fetch(
      `https://68e7a27e10e3f82fbf400722.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryID}
          onChangeCategory={(index) => setCategoryID(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;

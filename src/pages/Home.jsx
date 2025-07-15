import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import Search from "../components/search";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  console.log("category id", categoryId);
  console.log("setCategoryId:", setCategoryId);
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        ` https://686ba7e1e559eba908737d45.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.sortProperty}&order=desc${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      {" "}
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : items.length > 0 ? (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>
            Ничего не найдено 😕
          </h2>
        )}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;

import { FC, useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

import { IItemProduct } from "../interfaces/IItemProduct";
import { pizzaService } from "../services/pizzaService";

const Home: FC = () => {
  const [items, setItems] = useState<IItemProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const request = pizzaService.getResource();
    request.then((data) => {
      setItems(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />

        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {items.map((pizzaItem, idx) =>
          isLoading ? (
            <Skeleton key={idx} />
          ) : (
            <PizzaBlock key={pizzaItem.id} {...pizzaItem} />
          )
        )}
      </div>
    </>
  );
};

export default Home;

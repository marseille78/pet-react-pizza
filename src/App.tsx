import { useEffect, useState } from "react";

import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";

import { IItemProduct } from "./interfaces/IItemProduct";
import { pizzaService } from "./services/pizzaService";

import "./scss/app.scss";

function App() {
  const [items, setItems] = useState<IItemProduct[]>([]);
  pizzaService.getResource();

  useEffect(() => {
    const request = pizzaService.getResource();
    request.then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {items.map((pizzaItem) => (
              <PizzaBlock key={pizzaItem.id} {...pizzaItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';

import './scss/app.scss';

import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="wrapper">

      <Header/>
      
      <div className="content">
        <div className="container">
          <div className="content__top">

            <Categories/>
            
            <Sort/>

          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            
            {
              pizzas.map((pizzaItem) => (
                <PizzaBlock key={pizzaItem.id} {...pizzaItem} />
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

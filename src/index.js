import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "tomato Onine oil ",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="max-w-[80rem] mx-auto  flex flex-col item-center gap-[4.8rem]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="self-stretch">
      <h1 class="text-[#ed4bbf] uppercase text-center text-[5.2rem] font-light tracking-widest relative w-full block">
        Fast React pizza menu
      </h1>
      ;
      <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-[12rem] h-[3px] bg-[#b42b8b]"></div>
      <div class="absolute top-1/2 right-0 transform -translate-y-1/2 w-[12rem] h-[3px] bg-[#b42b8b]"></div>
    </header>
  );
}
function Main() {
  //const pizzaData = [];
  return (
    <main className="flex flex-col item-center gap-[4rem]">
      <h2 className="inline-block pt-4 pb-4 border-t-2 border-b-2 text-4xl uppercase tracking-wide font-medium ">
        <p class="text-xl text-center leading-6 w-4/5">Our Menu</p>
      </h2>
      {pizzaData.length != 0 ? (
        <ul className="list-none grid grid-cols-2 gap-[4.8rem]">
          {pizzaData.map((pizza) => (
            <Pizza
              img={pizza.photoName}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              sold={pizza.soldOut}
              key={pizza.name}
            />
          ))}
        </ul>
      ) : (
        "the is no pizza"
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={props.sold ? "pizza sold-out" : "flex gap-8"}>
      <img
        className={`w-48 aspect-square self-start ${
          props.sold ? "filter grayscale opacity-80" : ""
        }`}
        src={props.img}
        alt={props.name}
      />
      <div
        className={`flex flex-col gap-2 py-1 ${
          props.sold ? "text-gray-500" : ""
        }`}
      >
        <h3 className="text-2xl font-normal">{props.name}</h3>
        <p className="text-lg font-light italic mb-auto">{props.ingredients}</p>
        <span className="block text-xl">{props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours(); // Use getHours() for the correct method
  const open = 12;
  const close = 22;

  return (
    <div>
      <footer className="footer" className="order">
        {hour >= open || hour <= close
          ? `we are open until ${close}:00 .come visit us or order online.`
          : "sorry We are closed"}
        <button className="btn">Order online</button>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

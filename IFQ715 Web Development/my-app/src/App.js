//imports here
import {useState} from "react";
const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo", "hippopotamus"],
  },
  {
    name: "Tiger",
    number: 5,
    eats: ["moose", "deer", "buffalo"],
  },
  {
    name: "Giraffe",
    number: 6,
    eats: ["leaves", "twigs"],
  },
  {
    name: "Elephant",
    number: 4,
    eats: ["grass", "leaves", "flowers", "fruit"],
  },
  {
    name: "Monkey",
    number: 10,
    eats: ["fruit", "leaves", "vegetables", "insects"],
  },
  {
    name: "Lemur",
    number: 15,
    eats: ["fruit", "leaves", "insects"],
  },
  {
    name: "Rhinoceros",
    number: 2,
    eats: ["grass", "shoots", "leaves", "berries"],
  },
 ];


export default function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <h2>Start editing to see some magic happen!</h2>
      {animals.map((animal)=> (
        <AnimalComponent {...animal} />
      ))}
    </div>
    
  );
 }
 function AnimalComponent({name, number, eats}) {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <LikeCounter />
    </div>
  );
 }
 function LikeCounter() {
  const [count,setCount] = useState(0);
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      
    </div>
  );
 }
 
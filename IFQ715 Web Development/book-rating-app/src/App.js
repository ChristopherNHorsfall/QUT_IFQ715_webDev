import {useState} from "react";
const books = [
  {
    title: "1984",
    author: "George Orwell",
  },
  {
    title: "The Magician's Nephew",
    author: "C. S. Lewis",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>Book Rating App</h1>
      {books.map((book)=> (
        <BookComponent {...book}/>
      ))}

    </div>
  )
};

function BookComponent ({title,author}) {
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <LikeCounter/>
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
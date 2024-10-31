import { useEffect, useState } from "react";
import "./App.css";

function fetchUser(id) {
  const url = `https://reqres.in/api/users/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default function App() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState();
  const [yourname, setyourname] = useState("");
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchUser(userId).then((fetchedUser) => setUser(fetchedUser));
  }, [userId]);

  const handleNameChange = (event) => { 
    const { value } = event.target; 
    if (/[0-9]/.test(value)) { 
      setError("Names shouldn't have numbers"); 
    } else { 
      setError(null);
      setyourname(value); 
    } 
  }; 


  return (
    <div className="App">
      <h1>User Details</h1>
      <button disabled={userId === 1} onClick={() => setUserId(userId - 1)}>
        Previous
      </button>
      <button onClick={() => setUserId(userId + 1)}>
        Next
      </button>
      {user ? (
        <div>
          <img src={user.avatar} alt="Avatar"></img>
          <ul>
            <li>User id: {userId}</li>
            <li>First Name: {user.first_name}</li>
            <li>Last Name: {user.last_name}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    <h1>Hello, {yourname}!</h1>
        <input 
        type="text" 
        name="name" 
        id="name" 
        value={yourname} 
        onChange={handleNameChange}
  /> 

{ 
  error != null ? <p>Error: {error}</p> : null 
} 


    </div>
  );
}

//Hooks 'useWindowResize'
export const useWindowResize = () => { 
  const [width, setWidth] = useState(window.innerWidth); 
  const [height, setHeight] = useState(window.innerHeight); 

  const listener = () => { 
    setWidth(window.innerWidth); 
    setHeight(window.innerHeight); 
  }; 

  useEffect(() => { 
    window.addEventListener("resize", listener); 
    return () => { 
      window.removeEventListener("resize", listener); 
    }; 
  }, []); 

  return { 
    width, 
    height, 
  }; 
}; 


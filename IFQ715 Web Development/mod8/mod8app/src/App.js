//App.js
const API_URL = `https://d2h6rsg43otiqk.cloudfront.net/prod`;


export default function App() {
  const login = () => {
    const url = `${API_URL}/user/login`;

    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "mike@gmail.com", password: "password" }),
    })
    .then((res) => 
        res.json().then((res) => {
          localStorage.setItem("token", res.token); 
          console.log(res)
        })
      )
    .catch((error) => console.log(error));
  };

  const getFactors = () => {
    const url = `${API_URL}/factors/2020`;
    const token = localStorage.getItem("token")

    return fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
     },
   })
      .then((res) =>
        res.json().then((res) => {
          console.log(res);
       })
     )
      .catch((error) => console.log(error));
  };



 
  return (
      <div className="App">
        <h1>JWT Token Example</h1>
        <button onClick={login}>Login</button>
        <button onClick={getFactors}>Get Factors</button>
      </div>
    );
  }


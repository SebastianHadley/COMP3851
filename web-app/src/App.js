import logo from './logo.svg';
import './App.css';
import { useEffect, useState, setData } from 'react';

async function fetchBasic() {
  const response = await fetch("http://localhost:3001/checking");
  return response.json();
}
function App() {
  const [data, setData] = useState("");

  useEffect(async () => {
    const response = await fetchBasic();
    setData(response);
    console.log(response);
  }, []);

  return (
  <div>
    <h1>{data.check}</h1>
  </div>
  );
}

export default App;


//may be a better way of doing it need to consider later.
// fetch("http://localhost:3001/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
// return (data);
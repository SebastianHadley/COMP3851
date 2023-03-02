import './App.css';
import { useEffect, useState, setData } from 'react';

async function fetchBasic() {
  try{
  const response = await fetch("http://localhost:3001/FacultyMember");
  return response.json();
  }catch(error){
    console.log(error);
    return null;
  }
}
function App() {
  const [data, setData] = useState("");

  useEffect(async () => {
    const response = await fetchBasic();
    if(response != null){
      setData(response);
    }else{
      setData({check: "checking2"});
    }
    console.log(response);
  }, []);

  return (
    <div>
      <h1>{data.check} HELLO</h1>
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
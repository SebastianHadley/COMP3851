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
    <div className="App">
      <NavBar />
      <Banner />
      <FirstDay />
      <FacultyInfo />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

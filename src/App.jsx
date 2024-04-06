import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Bookcreate from './components/Bookcreate'
import Bookget from './components/Bookget'
import Header from './components/Header'
import Bookinfo from './components/Bookinfo'
import Bookupdate from './components/Bookupdate'

import { useState,useEffect } from 'react'

function App() {
  const [APIData, setAPIData] = useState([]);

  // Fetch API data when component mounts
  useEffect(() => {
    fetch('your_api_endpoint')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setAPIData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
    <BrowserRouter>
      <Header/>
    
      <Routes>
        <Route path='/' element={<Bookget/>}/>
        <Route path='/bookcreate' element={<Bookcreate/>}/>
        {/* <Route path="/book/:id" element={<Bookinfo/>} /> */}
        {/* <Route path="/book/:id" element={<Bookinfo />} /> */}
        <Route path="/book/:id" element={<Bookinfo APIData={APIData} />} />
        <Route path="/update/:id" element={<Bookupdate/>}/>
        

      </Routes>
   
        
         
    
   
  </BrowserRouter>
  </>
  )
}

export default App

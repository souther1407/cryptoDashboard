
import './App.css';
import Nav from './components/Nav';
import { useState,useEffect } from 'react';
import Cards from './components/Cards';



function App() {

  const apiData = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
  
  const [currencies,setCurrencies] = useState([])

  const getCurrencies = async ()=>{
      let resp = await fetch(apiData)
      let data = await resp.json()
      setCurrencies([...data])
  }   
  
  useEffect(()=>{
    getCurrencies()
    

  },[])
  
  
  
  return (
    <div className="App">
      <Nav />
      <Cards currencies={currencies} />
    </div>
  );
}

export default App;

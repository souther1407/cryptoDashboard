
import './App.css';
import Nav from './components/Nav';
import { useState,useEffect } from 'react';
import Cards from './components/Cards';



function App() {

  const apiData = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
  
  const [currencies,setCurrencies] = useState([])
  const [oscuro,setOscuro] = useState(false)

  const minutesToMiliseconds = (minutes)=>{
    return minutes * 60 * 1000
  }

  const switchOscuro = ()=>{
    setOscuro(!oscuro)
  }
  const esObscuro = ()=>oscuro

  const getCurrencies = async ()=>{
      let resp = await fetch(apiData)
      let data = await resp.json()
      console.log(data)
      setCurrencies([...data])
  }   
  
  useEffect(()=>{
    getCurrencies()
    setInterval(getCurrencies,minutesToMiliseconds(3))
    

  },[])
  
  
  
  return (
    <div className={`App ${oscuro && "oscuro"}`}>
      <Nav onSwitch={switchOscuro} onObscuro={esObscuro}/>
      <Cards currencies={currencies} />
    </div>
  );
}

export default App;

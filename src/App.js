
import './App.css';
import Body from "./components/body2.0"
import CoinGecko from "coingecko-api";
//import logo from "../Círculo_Carcajadas__1_-removebg-preview.png"

const CoinGeckoClient = new CoinGecko()

function App() {
/*  var dataa;
  var data;

  var func = async() => {
     data = await await CoinGeckoClient.coins.markets();
     console.log(data.data)

  }*/


  //put the total of active criptos on the top
  //  let data = await CoinGeckoClient.global();
  //console.log(data.data.data.active_cryptocurrencies)
  

  return (
   <Body/>
  );
}

export default App;

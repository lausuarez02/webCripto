
import './App.css';
import Body from "./components/body2.0"
import Exchange from "./components/exchange";
import CoinGecko from "coingecko-api";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    <div>
          <Router>
    <Switch>
       <Route path="/" exact component={Body}/>

      <Route path="/exchange" exact component={Exchange}/>
 
    </Switch>
    </Router>
    </div>

  );
}

export default App;

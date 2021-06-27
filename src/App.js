
import './App.css';
import Body from "./components/body2.0"
import Exchange from "./components/exchange";
import CoinGecko from "coingecko-api";

import {
  HashRouter as Router,
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
       <Route exact path="/" component={Body}/>

      <Route exact path="/exchange" component={Exchange}/>
 
    </Switch>
    </Router>
    </div>

  );
}

export default App;

import React, {useState, useEffect} from "react"
import CoinGecko from "coingecko-api";
import logo from "../Círculo_Carcajadas__1_-removebg-preview.png"

const CoinGeckoClient = new CoinGecko()

export default function Body(){
    
    const [criptos, setCriptos] = useState([])
    const [search, setSearch] = useState("");
    


  const fetchingData = async() => {
    try{
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      const data = await res.json()


      setCriptos(data)
      console.log(data)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(async() => {
    await fetchingData()
}, [])
const handleChange = e => {
  setSearch(e.target.value);
};
   
const filteredCoins = criptos.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
);







const formatPercent = number => `${new Number(number).toFixed(2)}%`

const formatDollar = (number, maxSignificantDigits) => 
new Intl.NumberFormat(
  "en-US",
  {
    style:"currency",
    currency:"usd",
    maxSignificantDigits
  }
).format(number)
return (


 <div  style={{backgroundColor:"#264653", width:"100%"}}>

<nav class="navbar navbar-dark " style={{backgroundColor:"#1d3557",width:"100%" }} >
<div style={{marginLeft:"32%"}}>
<img src={logo} alt="Logo" style={{height:"200px", width:"200px"}}/>
</div>

    <div  style={{width:"80%", marginLeft:"20px", marginRight:"20px"}}>
     <form class="form-inline my-2 my-lg-0">
     <input className="form-control me-2" type="search" placeholder="Search..." onChange={handleChange} />

    </form></div>
     
</nav>

   
   <div style={{}}>
   
   </div>

   <div style={{width:"50%", justifyContent:"center", alignItems:"center", alignContent:"center", display:"flex",  float:"center", zIndex:"2"}}>
 
   </div>
 
   <table className="table">
     <thead>

     <tr>
     <th style={{color:"white"}}>Coin</th>
     <th style={{color:"white"}}>24H</th>
     <th style={{color:"white"}}>Price</th>
     <th style={{color:"white"}}>Market Cap</th>
   </tr>
   </thead>
   
  
     

   {/*filter(val => {
     if(searchTerm === ""){
       return val
     }else if(val.symbol.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
     }
   })
   
    <tr >
       <td style={{color:"white"}}> <img src={coin.image} style={{width:25, height: 25, marginRight:10}}/>{coin.symbol.toUpperCase()}</td>
       <td > <span className={coin.price_change_percentage_24h > 0 ? ("text-success") : ("text-danger")}>{formatPercent(coin.price_change_percentage_24h)}</span></td>
       <td style={{color:"white"}}>{formatDollar(coin.current_price, 20)}</td>
       <td style={{color:"white"}}>{formatDollar(coin.market_cap,12)}</td>
     </tr>
   */}
  
  
  
  
  
  {/*
  {criptos.filter((coin) =>{
     if(searchTerm === ""){
       return coin;
     }else if(coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())){
      return coin
     }
   } 
   )}
   */}
   <tbody>
  
  {filteredCoins.map(coin => {
    return (
      <tr key={coin.id}>
      <td style={{color:"white"}}> <img src={coin.image} style={{width:25, height: 25, marginRight:10}}/>{coin.symbol.toUpperCase()}</td>
      <td > <span className={coin.price_change_percentage_24h > 0 ? ("text-success") : ("text-danger")}>{formatPercent(coin.price_change_percentage_24h)}</span></td>
      <td style={{color:"white"}}>{formatDollar(coin.current_price, 20)}</td>
      <td style={{color:"white"}}>{formatDollar(coin.market_cap,12)}</td>
    </tr>
    )
  })}
   </tbody>
   </table>
<div class="navbar navbar-dark " style={{backgroundColor:"#1d3557",width:"100%", height:"100px" , flexDirection:"row"}}>
<div style={{marginLeft:"10%"}}>
<p ><a href="https://www.coingecko.com/en/api" target="_blank" style={{textDecoration:"none", color:"white", textAlign:"center"}}>Api</a></p> 
</div>

<div style={{width:"80%", marginLeft:"10%"}}>
<p style={{textDecoration:"none", color:"white"}}>Made By <a href="#" style={{textDecoration:"none", color:"white", textAlign:"center"}}>Lautaro Suarez</a></p>
</div>


</div>

 </div>
  

  
)
}



/*
export async function getServerSideProps(context){
const params = {
  order: CoinGecko.ORDER_MARKET_CAP_DESC
}
const result = await CoinGeckoClient.coins.markets({params})
return{
  props: {
    result
  }
};
}*/

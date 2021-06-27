import React, {useState, useEffect} from "react"
import logo from "../Círculo_Carcajadas__1_-removebg-preview.png"
import {Link} from "react-router-dom"

const Exchange = () => {
    const [criptos, setCriptos] = useState(0);
    const [num, setNum] = useState(0)
    
    const fetchingData = async() => {
        try{
          const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
          const data = await res.json()
    
    
          setCriptos(data[0].current_price)
          console.log(data[0].current_price)
        }catch(error){
          console.error(error)
        }
      }
    
      useEffect(async() => {
        await fetchingData()
    }, [])

    


    const exchange = () => {
        var a = Number(num)
        var b = Number(criptos)
        var r = (a / b)
        return r

    }
    return(
        <div style={{backgroundColor:"#1d3557", width:"100%", height:"600px"}}>
              <div>
              <nav className="navbar navbar-expand-lg navbar-light" style={{color:"white",backgroundColor:"#264653",borderBottom:"2px", borderBottomColor:"white", borderBottomStyle:"solid"}}>
  <div className="container-fluid">
  <img src={logo} alt="Logo" style={{height:"100px", width:"100px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/exchange" className="nav-link" style={{color:"white"}}>Exchange</Link>
        </li>
 
      </ul>
      

   
  </div>
  </div>
  </nav>

  <div>
  <div className="input-group mb-3">

</div>
  </div>
  </div>
              <input type="number" className="form-control" placeholder="Usd" onChange={e => {setNum(e.target.value)}}/>
  <span className="input-group-text">To BTC</span>
  <div type="text" className="form-control" placeholder="Btc" >{exchange()}</div>
  <div class="navbar navbar-dark " style={{backgroundColor:"#1d3557",width:"100%", height:"100px" ,marginTop:"25%",borderTop:"2px",borderTopColor:"white",borderTopStyle:"solid", flexDirection:"row"}}>
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

 {   /*  
 */}



        
    


export default Exchange;
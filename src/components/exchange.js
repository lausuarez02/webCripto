import React, {useState, useEffect} from "react"
import logo from "../Círculo_Carcajadas__1_-removebg-preview.png"
import {Link} from "react-router-dom"

const Exchange = () => {
    const [criptos, setCriptos] = useState(0);
    const [num, setNum] = useState(0)
    const [ btc, setBtc] = useState(0);
   const [button, setButton] = useState(0);





    
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

    

    const exchange01 = () => {
      let a = Number(btc)
      let b = Number(criptos)
        let r = (a * b)
        return r
    }
    const exchange = () => {
      let a = Number(num)
      let b = Number(criptos)
        let r = (a / b)
        return r

    }

    const Click = () => {
    if(button === 0){
      return( 
        <div>    <input type="number" className="form-control" placeholder="Usd" onChange={e => {setNum(e.target.value)}}/>
        <button className="input-group-text" onClick={() => {setButton(button + 1)}}>To BTC | Switch</button>
          <div type="text" className="form-control" placeholder="Btc" >{exchange()}</div></div>
      )

        }else if(button === 1){
          return (
            <div>
            <input type="number" className="form-control" placeholder="Btc" onChange={e => {setBtc(e.target.value)}}/>
            <button className="input-group-text" onClick={() => {setButton(button - 1)}}>To USD | Switch</button>
            <div type="text" className="form-control" placeholder="Btc" >{exchange01()}</div>
            </div> 
            
          )

      
      
        }}
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
<div>
  {Click()}
</div>
    

         
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
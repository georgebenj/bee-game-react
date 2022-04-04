import React, {useState, useEffect} from "react";
import ShopItem from "./components/ShopItem";
import ShopList from "./components/ShopList";


function App() {



  const [gameData, setGameData] = useState({
    honey: 200,
    perSecond: 1,
    money: 100,
    perClick: 1,
    jars: 0,
    jarCost: 10,
    jarsOfHoney: 0,
    shippingTime: 5,
    countdown: 0,
    gameData: [
      {
        "name":"Hive",
        "value":1,
        "cost":20,
        "count":1,
        "capacity":100
      },
      {
        "name":"House",
        "value":5,
        "cost":110,
        "count":0,
        "capacity":1000
      },
      {
        "name":"Mansion",
        "value":25,
        "cost":600,
        "count":0,
        "capacity":10000
      },
      {
        "name":"Castle",
        "value":125,
        "cost":3500,
        "count":0,
        "capacity":100000
      },
      {
        "name":"Village",
        "value":625,
        "cost":20000,
        "count":0,
        "capacity":1000000
      },
      {
        "name": "Town",
        "value": 2000,
        "cost": 100000,
        "count": 0,
        "capacity": 1000000000
      }
    ]})

    useEffect(() => {
      const interval = setInterval(() =>{
        gameLoop()
        
        
      }, 1000);//1000ms = 1s
      return () => clearInterval(interval)
    }, []);

  const addMoney = () =>{
    setGameData({...gameData, money: gameData.money + gameData.perClick
    })
  }

  const gameLoop = () =>{
    setGameData(prevState => ({...prevState, money: prevState.money + prevState.perSecond}))
  }

  const handlePurchase = (name, value, cost) =>{
    if(gameData.money >= cost){
      setGameData({...gameData,
         money: gameData.money - cost,
         perSecond: gameData.perSecond + value,
         gameData: gameData.gameData.map(data =>{
           if(data.name === name){
             return{
               ...data,
               count: data.count + 1,
             }
           }
           return data
         }),
        })
    } else {
      alert("Insufficient funds")
    }
  }



  return (
    <>

    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 pt-5">
          
          <h1>${gameData.money}</h1>
          <button type="button" class="btn btn-danger" onClick={addMoney}>Make Money</button>
          <h2>{gameData.perSecond}/s</h2>
        </div>

        <div class="col-md-6">
          <ShopList 
            data={gameData} 
            handlePurchase={handlePurchase}
          />
        </div>
      </div>
    </div>
    </>

      
      
      

  );
}

export default App;

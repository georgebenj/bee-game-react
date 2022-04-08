import React, {useState, useEffect} from "react";
import ShopList from "./components/ShopList";
import BeeList from "./components/BeeList";

function App() {

  const [toggle, setToggle] = useState(false);
  const [gameData, setGameData] = useState({
    honey: 200,
    perSecond: 1,
    money: 500000,
    perClick: 1,
    perClickCost: 100,
    jars: 0,
    jarCost: 10,
    jarsOfHoney: 0,
    shippingTime: 5,
    countdown: 0,
    gameData: [
      {
        "name":"Bee Hive",
        "value":5000,
        "cost":200000,
        "count":1,
        "capacity":100
      },
      {
        "name":"Bee House",
        "value":12500,
        "cost":450000,
        "count":0,
        "capacity":1000
      },
      {
        "name":"Bee Mansion",
        "value":50000,
        "cost":1000000,
        "count":0,
        "capacity":10000
      },
      {
        "name":"Bee Castle",
        "value":125000,
        "cost":2000000,
        "count":0,
        "capacity":100000
      },
      {
        "name":"Bee Village",
        "value":250000,
        "cost":85000000,
        "count":0,
        "capacity":1000000
      },
      {
        "name": "Town",
        "value": 500000,
        "cost": 200000000,
        "count": 0,
        "capacity": 1000000000
      }
    ],
  bees: [
    {
      "name":"Bee",
      "value":1,
      "cost":20,
      "count":1,
      "capacity":100,
      "img": "./assets/img/bee.png"
    },
    {
      "name":"Super Bee",
      "value":5,
      "cost":110,
      "count":0,
      "capacity":1000,
      "img": "./assets/img/superbee.png" 
    },
    {
      "name":"Mega Bee",
      "value":25,
      "cost":600,
      "count":0,
      "capacity":10000,
      "img": "./assets/img/megabee.png"
    },
    {
      "name":"Uber Bee",
      "value":125,
      "cost":3500,
      "count":0,
      "capacity":100000,
      "img": "./assets/img/superbee.png"
    },
    {
      "name":"Mech Bee",
      "value":625,
      "cost":20000,
      "count":0,
      "capacity":1000000,
      "img": "./assets/img/superbee.png" 
    },
    {
      "name": "AI Bee",
      "value": 2000,
      "cost": 100000,
      "count": 0,
      "capacity": 1000000000,
      "img": "./img/superbee.png" 
    }
  ],
}
)

    useEffect(() => {
      if(localStorage.getItem("saveData")){
        console.log("Save data found!")
      }
      else{
        console.log("No save data found")
      }
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
               cost: Math.round(data.cost + data.cost * 0.1)
             }
           }
           return data
         }),
        })
    } else {
      alert("Insufficient funds")
    }
  }

  const handleBeePurchase = (name, value, cost) =>{
    console.log("Attempting to purchase" + name + " for " + cost)
    if(gameData.money >= cost){
      setGameData({...gameData,
        money: gameData.money - cost,
        perSecond: gameData.perSecond + value,
        bees: gameData.bees.map(data =>{
          if(data.name === name){
            return{
              ...data,
              count: data.count + 1,
              cost: Math.round(data.cost + data.cost * 0.1)
            }
          }
        return data
        }),
      })
    } else {
      alert("Insufficient funds")
    }
  }

  const buyHives = () =>{
    if(gameData.money >= 500000){
      setToggle(true)
      setGameData({...gameData,
        money: gameData.money - 500000})}
    else{
      alert("You need " + (500000 - gameData.money) + " money to unlock more upgrades.")
    }

  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const buyPerClick = () =>{
  if(gameData.money >= gameData.perClickCost){
    setGameData({...gameData,
      money: gameData.money - gameData.perClickCost,
      perClick: Math.round(gameData.perClick = gameData.perClick * 2),
      perClickCost: Math.round(gameData.perClickCost = gameData.perClickCost * 2.2)
  })
}else{
  alert("Insufficient money")
}}


  
  return (
    <>

    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 pt-5">
          
          <h1>${numberWithCommas(gameData.money)}</h1>
          <button type="button" class="btn btn-danger" onClick={addMoney}>Make ${numberWithCommas(gameData.perClick)}</button>
          <h2>{numberWithCommas(gameData.perSecond)}/s</h2>

          <h2 class="pt-5"style={{color: "green"}}>${numberWithCommas(gameData.perClickCost)}</h2>
          <button type="button" class="btn btn-success" onClick={buyPerClick}>2x Per Click</button>
        </div>

       

        <div class="col-md-6 pt-5">
          <BeeList
          data={gameData}
          handlePurchase={handleBeePurchase}>  
          </BeeList>

          <div style={{display: toggle ? "none" : "block"}}>
          <button type="button" class="btn btn-success" onClick={buyHives}>Unlock Hives</button>
          <h5 style={{color: "green"}}>$500,000</h5>
          
          </div>
          <div style={{display: toggle ? "block" : "none"}}>
          <ShopList
            

            data={gameData} 
            handlePurchase={handlePurchase}
          />
          </div>
        </div>
      </div>
    </div>
    </>

      
      
      

  );
}

export default App;

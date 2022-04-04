import React from "react";

const ShopItem = ({data, handlePurchase}) =>{
  return(
    <div class="col-md-3 text-center my-2 mx-2 border">
      <h2>{data.name}</h2>
      <h3>{data.count}</h3>
      <button type="button" onClick={() => handlePurchase(data.name, data.value, data.cost)}>{data.cost}</button>
      <h5>{data.value * data.count}</h5>
    </div>
  )
}

export default ShopItem
import React from "react";

const BeeItem = ({data, handlePurchase}) =>{

  return(
    <div class="col-md-4">
      <h5 class="pt-4" style={{color: "green"}}>${data.cost}</h5>
      <button type="button" class="btn btn-warning" onClick={() => handlePurchase(data.name, data.value, data.cost)}>{data.name}</button>
      <h5>{data.value * data.count}/s</h5>
    </div>
  )
}

export default BeeItem
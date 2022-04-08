import React from "react";

const ShopItem = ({data, handlePurchase}) =>{

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return(
    <div class="col-md-4 pt-5">
    <h5 class="pt-4" style={{color: "green"}}>${numberWithCommas(data.cost)}</h5>
    <button type="button" class="btn btn-success" onClick={() => handlePurchase(data.name, data.value, data.cost)}>{data.name}</button>
    <h5>{numberWithCommas(data.value * data.count)}/s</h5>
  </div>
  )
}

export default ShopItem
import React from "react"
import ShopItem from "./ShopItem"

const ShopList = ({data, handlePurchase}) => {
  return(
    <>
    <div class="row text-center">
      {data.gameData.map(e => (
        <ShopItem
        key={e.name}
        data={e}
        handlePurchase={handlePurchase}></ShopItem>
      ))}
    </div>
    </>
  )
}

export default ShopList
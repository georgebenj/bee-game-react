import React from "react"
import BeeItem from "./BeeItem"

const BeeList = ({data, handlePurchase}) => {
  return(
    <>
    <div class="row text-center">
      {data.bees.map(e => (
        <BeeItem
        key={e.name}
        data={e}
        handlePurchase={handlePurchase}></BeeItem>
      ))}
    </div>
    </>
  )
}

export default BeeList
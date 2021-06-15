import React from 'react'

const Product = ({id,title,qty,unitPrice, extendedPrice,increaseQtyState}) => 
{


    const increaseQtyHandler = ()=>{

      increaseQtyState(id)
    }


    const decreaseQtyHandler = ()=>{

        alert("The decrease button was pressed");
    }

    return (
      
        <div className="grid grid-col-4">
            <span>{title}</span>
            <div>
                <button type="button" class="btn dButton" onClick={decreaseQtyHandler}>-</button>
                <span className="qty">{qty}</span>
                <button type="button" className="btn iButton" onClick={increaseQtyHandler}>+</button>
            </div>
            
            <span className="unitPrice">${unitPrice}</span>
            <span className="extendedPrice">${extendedPrice}</span>
      </div>

    )
}

export default Product

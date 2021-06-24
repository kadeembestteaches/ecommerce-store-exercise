import React,{useContext} from 'react'
import ecommerceContext from '../context/EcommerceContext';

const Product = ({id,title,qty,unitPrice, extendedPrice}) => 
{

    const {products,setProducts} = useContext(ecommerceContext)


    const increaseQtyHandler = ()=>{
        //Copy the contents of the existing array into a new  array THAT WE CAN CHANGE!
        const updatedProductsArr = [...products];


        //I need to locate the product in the array that was clicked by the increase and decrease button
        const selectedProduct = products.find(product=>product.id === id);

        selectedProduct.qty++;
        selectedProduct.extendedPrice = selectedProduct.qty * selectedProduct.unitPrice;

        setProducts(updatedProductsArr);
      
    }


    const decreaseQtyHandler = ()=>{

        //Copy the contents of the existing array into a new  array THAT WE CAN CHANGE!
        const updatedProductsArr = [...products];


        //I need to locate the product in the array that was clicked by the increase and decrease button
        const selectedProduct = products.find(product=>product.id === id);
        
        if(selectedProduct.qty > 0)
        {
            selectedProduct.qty--;
            selectedProduct.extendedPrice = selectedProduct.qty * selectedProduct.unitPrice;
            
            setProducts(updatedProductsArr);

         }



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

import {useContext} from "react"
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";

const ProductContainer = () => {

    //Here I am going to use the context that was provided in the ContextPRovider
    const {products,setBill} = useContext(ecommerceContext);

    const genrateBillHandler = ()=>{

        let subTotal = 0;

        products.forEach(product=>{

            subTotal+=product.extendedPrice;
        })

        const tax = 0.13 * subTotal;

        const total = subTotal + tax;


        //update the setbill state
        setBill({
            subTotal,
            tax,
            total
        })


    }
    
    return (

    <>
        <div id="heading-area" className="grid grid-col-4">

            <h2>Product</h2>
            <h2>Quantity</h2>
            <h2>Unit Price</h2>
            <h2>Extended Price</h2>
        </div>

        <div id="product-rows-area">

            {products.map((product)=>(<Product id={product.id} key={product.id} title={product.title} qty={product.qty} unitPrice={product.unitPrice} extendedPrice={product.extendedPrice}/>))}

            <button className="btn" type="button" id="calculateButton" onClick={genrateBillHandler}>Calculate</button>
       
        </div>
 
    </>


    )
}

export default ProductContainer

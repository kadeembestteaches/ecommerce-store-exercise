import Product from "./Product";

const ProductContainer = ({products,increaseQtyState,decreaseQtyState}) => {
    return (

    <>
        <div id="heading-area" className="grid grid-col-4">

            <h2>Product</h2>
            <h2>Quantity</h2>
            <h2>Unit Price</h2>
            <h2>Extended Price</h2>
        </div>

        <div id="product-rows-area">

            {products.map((product)=>(<Product id={product.id} key={product.id} title={product.title} qty={product.qty} unitPrice={product.unitPrice} extendedPrice={product.extendedPrice} increaseQtyState={increaseQtyState} decreaseQtyState={decreaseQtyState}/>))}

            {/*  
            
            
                  <Product title="Pants" qty={0} unitPrice={40.99} extendedPrice={0} />
                <Product title="Shirt" qty={0} unitPrice={10.99} extendedPrice ={0} />
                 <Product title="Shoes" qty={0} unitPrice={200.99} extendedPrice ={0} />

            */}
      
            <button className="btn" type="button" id="calculateButton">Calculate</button>
       
        </div>
 
    </>






    )
}

export default ProductContainer

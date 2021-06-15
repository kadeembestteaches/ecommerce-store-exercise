import {useState} from "react";
import Header from "./Header";
import ProductContainer from "./ProductContainer";
import TotalContainer from "./TotalsContainer";
import PromoCodeContainer from "./PromoCodeContainer";



import   "../assets/css/App.css"

const App = () => {


  const [products, setProducts] = useState(
  [{

      id:1,
      title: "Shirt",
      unitPrice : 10,
      qty:0,
      extendedPrice:0
  },
 
  {
    id:2,
    title: "Pants",
    unitPrice : 40,
    qty:0,
    extendedPrice:0
  }, 
  
  {
    id:3,
    title: "Shoes",
    unitPrice : 100,
    qty:0,
    extendedPrice:0
  },

  {
    id:4,
    title: "Hat",
    unitPrice : 2,
    qty:0,
    extendedPrice:0
  },


]);


const increaseQtyState = (id)=>{


  //Copy the contents of the existing array into a new  array THAT WE CAN CHANGE!
  const updatedProductsArr = [...products];


  //I need to locate the product in the array that was clicked by the increase and decrease button
  const selectedProduct = products.find(product=>product.id === id);

  selectedProduct.qty++;
  selectedProduct.extendedPrice = selectedProduct.qty * selectedProduct.unitPrice;

  setProducts(updatedProductsArr);

}



const decreaseQtyState = (id)=>{


  

}

  /*
  const [shirtQty, setShirtQty] = useState(0);
  const [pantsQty, setPantsQty] = useState(0);
  const [shoesQty, setShoesQty] = useState(0);

  const [shirtExtendedPrice, setShirtExtendPrice] = useState(0);
  const [pantsExtendedPrice, setPantsExtendPrice] = useState(0);
  const [shoesExtendedPrice, setShoesExtendPrice] = useState(0);
  */

  return (
    <div id="container">
        <Header />
        <ProductContainer products={products} increaseQtyState={increaseQtyState}/>
        <TotalContainer/>
        <PromoCodeContainer/>
    </div>
  )
}

export default App

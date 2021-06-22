import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useState,useEffect} from "react";

import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import AddProductFormPage from "../pages/AddProductFormPage";

import "../assets/css/App.css"

const App = () => {
 const [products, setProducts] = useState([]);



  useEffect(()=>{


      //Async operation //POST,PUT OR DELETE
      fetch("http://localhost:5000/products")
      .then((res)=>{

        return res.json()
      })
      .then(json=>{    
            setProducts(json);
      })
      .catch((err)=>{
          console.log(`Error ${err}`);
      })


  },[])

 


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


    <Router>

        <Switch>
  
          <Route exact path="/">
                <HomePage products={products} increaseQtyHandler={increaseQtyState}  decreaseQtyHandler={decreaseQtyState}/>
          </Route>

         
          <Route path="/about-us">

              <AboutUsPage/>

          </Route>


         
          <Route path="/products">

              <AddProductFormPage/>

          </Route>

        </Switch>
    </Router>


  )
}

export default App

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useState,useEffect} from "react";

import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import AddProductFormPage from "../pages/AddProductFormPage";

import ecommerceContext from "../context/EcommerceContext";

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

 



  return (


    <Router>

        <Switch>
  
          <ecommerceContext.Provider value={{products,setProducts}} >   
        
            <Route exact path="/">
                  <HomePage />
            </Route>

          
            <Route path="/about-us">

                <AboutUsPage/>

            </Route>


          
            <Route path="/products">

                <AddProductFormPage/>

            </Route>

          </ecommerceContext.Provider>

        </Switch>
    </Router>


  )
}

export default App

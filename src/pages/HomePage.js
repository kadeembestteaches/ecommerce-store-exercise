import React from 'react';

import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import TotalsContainer from "../components/TotalsContainer";
import PromoCodeContainer from "../components/PromoCodeContainer"

const HomePage = () => {
    return (
        <div id="container">
            <Header/>
            <main>
                <ProductContainer />
                <TotalsContainer/>
                <PromoCodeContainer/>
            </main>
        </div>
    )
}

export default HomePage

import {useContext} from 'react';
import ecommerceContext from '../context/EcommerceContext';

const TotalsContainer = () => {


    const {bill} = useContext(ecommerceContext);
    
    return (


        <div id="bill-area">

            <p>
                Sub Total : ${bill.subTotal.toFixed(2)}
            </p>
            <p>
                Tax :   : ${bill.tax.toFixed(2)}
            </p>
            <p>
                Total:  ${bill.total.toFixed(2)}
            </p>

        </div>

    )
}

export default TotalsContainer

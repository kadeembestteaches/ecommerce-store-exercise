import React from 'react'

const PromoCodeContainer = () => {
    return (
        <div id="promo-code-area">
            <p>
                Have a promo Code <button className="btn" type="button">Click to Enter</button>
            </p>
            <form>
                <label htmlFor="promoCode">PROMO CODE</label>
                <input type="text" id="promoCode"/>
                <button className="btn" type="button">Enter Code</button>
            </form>
    </div>
    )
}

export default PromoCodeContainer

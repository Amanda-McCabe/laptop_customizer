import React from 'react';
import Total from './total';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function Cart(){
return(
 <section className="main__summary">
 <h2>Your cart</h2>
 {/* {summary} */} summary
 <div className="summary__total">
   <div className="summary__total__label">Total</div>
   <div className="summary__total__value">
     {USCurrencyFormat.format(total)}
   </div>
 </div>
</section>
);
}
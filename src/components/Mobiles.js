import React from 'react';
function Mobiles({con,link,brandprice,discount,brandname="Nokia"})
{
  return (
    <div>
    <h4>Brand Name: {brandname}</h4>
    <p>Details: {con}</p>
    <p>Rs.{brandprice}</p>
    <p>offer {discount}</p>
    <a href="#">{link}</a><hr/>
    </div>
  );
}

export default Mobiles;

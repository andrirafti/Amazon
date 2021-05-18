import React, { useState,useRef,useEffect }from 'react'

const Basket = (props) => {
  const [checkout, setCheckOut] = useState(false)
  const { cartItems, onAdd, onRemove } = props

  //i put 0 as the value of the reduce so it adds 0 to the price total.. //
  const itemsPrice = cartItems.reduce((a, b) => a + b.price * b.QTY,0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  
  

  //PayPal Below//
  
  
  //everytime that checkout changes, we will run the paypal code!// 
  const paypal = useRef(null)
  //window.paypal.Buttons is the PayPal code needed ALWAYS to st up//
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err )=>{
        return actions.order.create({
          // intent: "CAPTURE",
          purchase_units: [
            {
              // description: "Rolex Game Master II",
              amount: {
                value: totalPrice
              }
            }]
          })
        },
        onApprove: async(data, actions)=> {
          const order = await actions.order.capture();
          console.log(order)
          console.log(data)
          
        },
        //onError is only if you want to catch the error,only onApprove is needed.
        onError: (err) => {
          console.log(err)
        }
      }).render(paypal.current)
  }, [checkout])
 
    return (
      //aside is side bars HTML eleemnt//
      //We check is cartitems length is 0 if it is write cart is empty..//
      <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length===0 && <div>Cart is Empty</div>}
      </div> 
      {cartItems.map((val) => (
        <div key={val.id} className="row">
          <div className="col-2">{val.name}</div>
          <div className="col2"><img src={val.picture}/></div>
          <div className="col-2">
            <button onClick={() => onAdd(val)} className="add">+</button>
            <button onClick={()=>onRemove(val)} className="remove">-</button>

          </div>
          <div className="col-2 text-right">
           
            {val.QTY} x ${val.price.toFixed(2)}
          </div>
  
        </div>
      ))}

      {cartItems.length !== 0 &&(
        <>
          <hr></hr>
          
            <div className="row">
              <div className="col-2">Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
          
            <div className="row">
              <div className="col-2">Tax Fee</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          
          <div className="row">
              <div className="col-2">Shipping Fee</div>
              <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
              <div className="col-2"> <strong>TOTAL</strong> </div>
              <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          
               
            
            <div className="PayPal Starts Below Here!"></div>
            <div  className="row">
              {checkout ? (
             <div ref={paypal}></div>
      ):(
        <button  onClick = { ()=>{ setCheckOut(true) } }>CheckOut</button>
      )
            }


            
            </div>
            
          </>
      )}
      </aside>
  )
}

export default Basket

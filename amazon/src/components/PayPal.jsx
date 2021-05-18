import React,{useRef,useEffect,useState} from 'react'
import { totalPrice } from "./Basket"
export default function PayPal() {
  const paypal = useRef()
  
 
  

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
              value: '100'
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
  }, [])
  //we take the paypal from HTML and we reference it in the DIV below
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}

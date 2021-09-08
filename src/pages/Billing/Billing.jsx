import React from "react"; 
import ReactDOM from "react-dom"; 
import StripeCheckout from "react-stripe-checkout"; 
import axios from "axios"; 
import {toast} from "react-toastify";  
import "./Billing.css"; 

export default function Billing() {
    const [product] = React.useState({ 
      price: 112.69,
      description: "Cool car"
    });
  
    async function handleToken(token, addresses) {
      const response = await axios.post(
        "https://x5ro3.sse.codesandbox.io/checkout",
        { token, product }
      );
      const { status } = response.data;
      console.log("Response:", response.data);
      if (status === "success") {
        toast("Success! Check email for details", { type: "success" });
      } else {
        toast("Something went wrong", { type: "error" });
      }
    }
  
    return (
      <div className="billingContainer">
        <div className="product">
          <h1>{product.name}</h1>
          <h3>Amount Due: ${product.price}</h3>
        </div>
        <StripeCheckout
          className="stripeButton" 
          stripeKey="pk_test_51JPW1fA65mBwu86mj5qqtbhaDDHxrJL5yzlRyvsgbnMxQT1yYf1QUxTFFwKDxCgb9VV1F4mvCaeozZYvN4mdDVZh00P7Q0xGPg"
          token={handleToken}
          amount={product.price * 100}
          name="Solar Payment"
          billingAddress
          shippingAddress
        />
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Billing />, rootElement); 
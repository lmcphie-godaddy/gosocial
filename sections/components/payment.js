import paymentStyles from "../../styles/payment.module.css";

const payment = () => {
    return (
      <div className={paymentStyles.payment}>
        <div className={paymentStyles.card}>
        <h1>Payment</h1>
        <form>
          <div className={paymentStyles.inputFields}>
            <div className={paymentStyles.firstLine}>
              <label id="cardholderLabel" htmlFor="holderName">Cardholder Name</label><br></br>
              <input type="text" id="cardHolder" placeholder="Bob Robert"></input><br></br><br></br>
            </div>
            <div className={paymentStyles.secondLine}>
              <div className={paymentStyles.box}>
                <label id="cardNumberLabel" htmlFor="cardNumber">Card Number</label><br></br>
                <input type="text" id="cardNumber" placeholder="987654321111"></input>
              </div>
              <div className={paymentStyles.box}>
                <label id="expirationLabel" htmlFor="expiration">Expiration Date</label><br></br>
                <input type="text" id="expiration" placeholder="12/22/2026"></input>
              </div>
              <div className={paymentStyles.box}>
                <label id="cvvLabel" htmlFor="cvv">CVV</label><br></br>
                <input type="text" id="cvv" placeholder="000"></input><br></br><br></br>
              </div>
            </div>
            <div className={paymentStyles.thirdLine}>
              <label id="billingLabel" htmlFor="billing">Billing Address</label><br></br>
              <input type="text" id="billing" placeholder="111 North Street City, State ZIP"></input>
            </div>
          </div>
        </form>
        </div>
      </div>
    )
}
  
export default payment
import paymentStyles from "../../styles/payment.module.css";

const payment = () => {
    return (
      <div className={paymentStyles.payment}>
        <h1>Payment</h1>
        <form>
            <label id="firstNameLabel" htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Bob"></input>

            <label id="lastNameLabel" htmlFor="lastName">Last Name</label>
            <input type="text" id="lasttName" placeholder="Robert"></input><br></br><br></br>

            <label id="emailLabel" htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="bob@robert.com"></input>
            
            <label id="phoneLabel" htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="111-222-3333"></input><br></br><br></br>

            <label id="emailLabel" htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="bob@robert.com"></input>



        </form>
      </div>
    )
  }
  
  export default payment
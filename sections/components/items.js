import itemStyles from "../../styles/items.module.css";

const Items = () => {
  return (
    <div className={itemStyles.Items}>
      <h1>Your Items</h1>
      <h2>Office 365 Starter Email</h2>
      <h2 className={itemStyles.price}>$0.00</h2>
      <h3>Free for 6 months</h3>
      <hr className={itemStyles.hr}></hr>

      <h2>Domain: business-name.io</h2>
      <h2 className={itemStyles.price}>$0.00</h2>
      <h3>
        1 Year Plan <br></br> Free Website Builder Included
        <br></br> Free Privacy Protection Forever
      </h3>
      <hr className={itemStyles.hr}></hr>

      <h2>POS: Smart Terminal</h2>
      <h2 className={itemStyles.price}>$0.00</h2>
      <h3>
        Free 2-Day Shipping <br></br> <s>$499</s>
        <br></br> Dual Screen
      </h3>
      <hr className={itemStyles.hr}></hr>

      <div className={itemStyles.total}>Total</div>
      <h2 className={itemStyles.price}>$298.00</h2>
    </div>
  );
};

export default Items;

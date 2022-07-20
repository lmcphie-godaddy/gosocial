import itemStyles from "../../styles/items.module.css";

const Items = () => {
  return (
    <div className={itemStyles.Items}>
      <h1>Your Items</h1>
      <h2>
        Office 365 Starter Email{" "}
        <span className={itemStyles.price1}>$0.00</span>
      </h2>
      <h3>Free for 6 months</h3>
      <hr className={itemStyles.hr}></hr>

      <h2>
        Domain: business-name.io{" "}
        <span className={itemStyles.price2}>$49.00</span>
      </h2>
      <h3>
        1 Year Plan <br></br> Free Website Builder Included
        <br></br> Free Privacy Protection Forever
      </h3>
      <hr className={itemStyles.hr}></hr>

      <h2>
        POS: Smart Terminal <span className={itemStyles.price3}>$249.00</span>
      </h2>
      <h3>
        Free 2-Day Shipping <br></br> <s>$499</s>
        <br></br> Dual Screen
      </h3>
      <hr className={itemStyles.hr}></hr>

      <div className={itemStyles.total}>
        Total <span className={itemStyles.pricet}>$298.00</span>
      </div>
    </div>
  );
};

export default Items;

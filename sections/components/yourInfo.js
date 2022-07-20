import { instanceOf } from "prop-types";
import yourInfoStyles from "../../styles/yourInfo.module.css";

const YourInfo = () => {
  return (
    <div className={yourInfoStyles.YourInfo}>
      <h1>Your Info</h1>
      <form>
        <div className={yourInfoStyles.inputFields}>
          <div className={yourInfoStyles.firstLine}>
            <div className={yourInfoStyles.box}>
              <label id="nameLabel" htmlFor="Name">
                First Name <span className={yourInfoStyles.req}>*</span>
              </label>
              <br></br>
              <input type="text" id="name" placeholder="Bob"></input>
              <br></br>
              <br></br>
              <label id="emailLabel" htmlFor="Email">
                Email <span className={yourInfoStyles.req}>*</span>
              </label>
              <br></br>
              <input type="text" id="email" placeholder="bob@gmail.com"></input>
              <br></br>
              <br></br>
            </div>
            <div className={yourInfoStyles.secondLine}>
              <div className={yourInfoStyles.box}>
                <label id="lastNameLabel" htmlFor="lastName">
                  Last Name <span className={yourInfoStyles.req}>*</span>
                </label>
                <br></br>
                <input type="text" id="lastName" placeholder="Robert"></input>
                <br></br>
                <br></br>

                <div className={yourInfoStyles.box}>
                  <label id="PhoneNumberLabel" htmlFor="phoneNumber">
                    Phone Number <span className={yourInfoStyles.req}>*</span>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="123-456-6789"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={yourInfoStyles.thirdLine}>
            <label id="companyName" htmlFor="companyName">
              Company Name <span className={yourInfoStyles.req}>*</span>
            </label>
            <br></br>
            <input
              type="text"
              id="companyName"
              placeholder="Bob's Business"
            ></input>
          </div>
          <div className={yourInfoStyles.fourthLine}>
            <label id="addressLabel" htmlFor="address">
              Company Address <span className={yourInfoStyles.req}>*</span>
            </label>
            <br></br>
            <input
              type="text"
              id="address"
              placeholder="111 North Street City, State ZIP"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default YourInfo;

import infoStyles from "../../styles/info.module.css";

const info = () => {
  return (
    <div className={infoStyles.info}>
      <h1>Your Info</h1>
      <form>
        <div className={infoStyles.inputFields}>
          <div className={infoStyles.firstLine}>
            <div className={infoStyles.box}>
              <label id="firstNameLabel" htmlFor="firstName">
                First Name <span className={infoStyles.req}>*</span> <br></br>
              </label>
              <input type="text" id="firstName"></input>
            </div>
            <div className={infoStyles.firstLine}>
              <label id="lastNameLabel" htmlFor="lastName">
                Last Name
                <span className={infoStyles.req}>*</span> <br></br>
              </label>
              <input type="text" id="lasttName"></input> <br></br>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className={infoStyles.firstLine}>
            <div className={infoStyles.box}>
              <label id="emailLabel" htmlFor="email">
                Email
                <span className={infoStyles.req}>*</span> <br></br>
              </label>
              <input type="text" id="email"></input>
            </div>

            <div className={infoStyles.box}>
              <label id="phoneLabel" htmlFor="phone">
                Phone Number
                <span className={infoStyles.req}>*</span>
                <br></br>
              </label>
              <input type="text" id="phone"></input>
              <br></br>
              <br></br>
            </div>
          </div>

          <label id="companyLabel" htmlFor="company">
            Company Name
            <span className={infoStyles.req}>*</span>
          </label>
          <input type="text" id="company"></input>
          <br></br>
          <br></br>

          <label id="companyAddressLabel" htmlFor="companyAddress">
            Company Address
            <span className={infoStyles.req}>*</span>
          </label>
          <input type="text" id="companyAddress"></input>
        </div>
      </form>
    </div>
  );
};

export default info;

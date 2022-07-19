import infoStyles from "../../styles/info.module.css";

const info = () => {
  return (
    <div className={infoStyles.info}>
      <h1>Your Info</h1>
      <form>
        <label
          id="firstNameLabel"
          htmlFor="firstName"
          className={infoStyles.label}
        >
          First Name <span className={infoStyles.req}>*</span>
        </label>
        <input type="text" id="firstName" className={infoStyles.input}></input>

        <label
          id="lastNameLabel"
          htmlFor="lastName"
          className={infoStyles.label}
        >
          Last Name
          <span className={infoStyles.req}>*</span>
        </label>
        <input type="text" id="lasttName" className={infoStyles.input}></input>

        <br></br>
        <br></br>

        <label id="emailLabel" htmlFor="email">
          Email
          <span className={infoStyles.req}>*</span>
        </label>
        <input type="text" id="email" className={infoStyles.input}></input>

        <label id="phoneLabel" htmlFor="phone">
          Phone Number
          <span className={infoStyles.req}>*</span>
        </label>
        <input type="text" id="phone" className={infoStyles.input}></input>
        <br></br>
        <br></br>

        <label id="companyLabel" htmlFor="company" className={infoStyles.label}>
          Company Name
          <span className={infoStyles.req}>*</span>
        </label>
        <input
          type="text"
          id="company"
          className={infoStyles.input_bottom}
        ></input>
        <br></br>
        <br></br>

        <label
          id="companyAddressLabel"
          htmlFor="companyAddress"
          className={infoStyles.label}
        >
          Company Address
          <span className={infoStyles.req}>*</span>
        </label>
        <input
          type="text"
          id="companyAddress"
          className={infoStyles.input_bottom}
        ></input>
      </form>
    </div>
  );
};

export default info;

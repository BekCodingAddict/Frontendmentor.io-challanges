import { useReducer } from "react";

const initialState = {
  generalEnquiry: false,
  supportRequest: false,
  queryTypeError: false,
  fristNameError: false,
  lastNameError: false,
  messageError: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "generalEnquiry/checked":
      return { ...state, generalEnquiry: true, supportRequest: false };
    case "supportRequest/checked":
      return { ...state, generalEnquiry: false, supportRequest: true };
    case "queryType/unselected":
      return { ...state, queryTypeError: true };
    default:
      return state;
  }
};

function ContactForm() {
  const [{ generalEnquiry, supportRequest, queryTypeError }, dispatch] =
    useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const inputData = new FormData(event.target);
      const data = {
        fristName: inputData.get("fristName"),
        lastName: inputData.get("lastName"),
        email: inputData.get("email"),
        queryType: inputData.get("supportRequest")
          ? "supportRequest"
          : inputData.get("generalEnquiry")
          ? "generalEnquiry"
          : null,
        massage: inputData.get("message"),
      };
      console.log(data);
      console.log("Data SUbmited!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <form action="" className="form-contaner" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="row-inputs">
          <div className="column-inputs">
            <label htmlFor="fristname">Frist Name *</label>
            <input type="text" id="fristname" name="fristName" />
            <span className="error" id="firstNameError">
              This field is required
            </span>
          </div>
          <div className="column-inputs">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" />
            <span className="error" id="lastNameError">
              This field is required
            </span>
          </div>
        </div>

        <div className="emailInput">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" />
          <span className="error" id="emailError">
            Please enter a valid email address
          </span>
        </div>

        <label htmlFor="generalenquiry">Query Type *</label>
        <div className="row-inputs">
          <div className="radio">
            <input
              type="radio"
              name="generalEnquiry"
              id="radioFrist"
              onChange={() => dispatch({ type: "generalEnquiry/checked" })}
              checked={generalEnquiry}
            />
            <label htmlFor="generalenquiry">General Enquiry </label>
          </div>

          <div className="radio left_box2">
            <input
              type="radio"
              name="supportRequest"
              id="supportrequest"
              checked={supportRequest}
              onChange={() => dispatch({ type: "supportRequest/checked" })}
            />
            <label htmlFor="supportrequest">Support Request</label>
          </div>
        </div>
        {queryTypeError && (
          <span className="error" id="queryTypeError">
            Please select a query type
          </span>
        )}

        <div className="message">
          <label htmlFor="message">Message *</label>
          <textarea name="message" id="message" rows="4"></textarea>
          <span className="error" id="messageError">
            This field is required
          </span>
        </div>

        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">
            I consent to being contacted by the team
          </label>
        </div>

        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

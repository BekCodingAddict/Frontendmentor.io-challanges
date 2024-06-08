import { useReducer } from "react";
import { useForm } from "react-hook-form";

const initialState = {
  generalEnquiry: false,
  supportRequest: false,
  queryTypeError: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "generalEnquiry/checked":
      return {
        ...state,
        generalEnquiry: true,
        supportRequest: false,
      };
    case "supportRequest/checked":
      return {
        ...state,
        generalEnquiry: false,
        supportRequest: true,
      };
    case "queryType/unselected":
      return { ...state, queryTypeError: true };
    case "queryType/selected":
      return { ...state, queryTypeError: false };
    default:
      return state;
  }
};

function ContactForm() {
  const [{ generalEnquiry, supportRequest, queryTypeError }, dispatch] =
    useReducer(reducer, initialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
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

      data.queryType === null
        ? dispatch({ type: "queryType/unselected" })
        : dispatch({ type: "queryType/selected" });

      console.log("data:", data);
      console.log("Data SUbmited!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <form
        action=""
        className="form-contaner"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Contact Us</h2>
        <div className="row-inputs">
          <div className="column-inputs">
            <label htmlFor="fristname">Frist Name *</label>
            <input
              type="text"
              id="fristname"
              name="fristName"
              {...register("fristName", { required: true, maxLength: 20 })}
            />
            {errors?.fristName?.type === "required" && (
              <span className="error" id="firstNameError">
                This field is required
              </span>
            )}

            {errors?.fristName?.type === "maxLength" && (
              <span className="error" id="firstNameError">
                First name cannot exceed 20 characters
              </span>
            )}
          </div>

          <div className="column-inputs">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: true, maxLength: 20 })}
            />

            {errors?.lastName?.type === "required" && (
              <span className="error" id="firstNameError">
                This field is required
              </span>
            )}

            {errors?.lastName?.type === "maxLength" && (
              <span className="error" id="firstNameError">
                First name cannot exceed 20 characters
              </span>
            )}
          </div>
        </div>

        <div className="emailInput">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.email && (
            <span className="error" id="emailError">
              Please enter a valid email address
            </span>
          )}
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
              {...register("queryType", { required: queryTypeError })}
            />
            <label htmlFor="supportrequest">Support Request</label>
          </div>
        </div>
        {errors?.queryType?.type === "required" && (
          <span className="error" id="queryTypeError">
            Please select a query type
          </span>
        )}

        <div className="message">
          <label htmlFor="message">Message *</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            {...register("message", { required: true })}
          ></textarea>
          {errors?.message?.type === "required" && (
            <span className="error" id="messageError">
              This field is required
            </span>
          )}
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
